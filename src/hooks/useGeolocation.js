import { useState, useEffect } from "react";
import { getAddress } from "../services/apiGeocoding";

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

const useGeolocation = () => {
  const [position, setPosition] = useState(null);
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAddress = async () => {
    try {
      setLoading(true);
      setError(null);

      // 1) Get user's position (latitude and longitude)
      const positionObj = await getPosition();
      const userPosition = {
        latitude: positionObj.coords.latitude,
        longitude: positionObj.coords.longitude,
      };
      setPosition(userPosition);

      // 2) Reverse geocoding to get human-readable address
      const addressObj = await getAddress(userPosition);
      const userAddress = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;
      setAddress(userAddress);
    } catch (err) {
      setError("Failed to fetch address. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAddress();
  }, []);

  return { position, address, loading, error };
};

export default useGeolocation;
