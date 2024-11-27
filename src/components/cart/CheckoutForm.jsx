import { useState } from "react";
import styles from "./CheckoutForm.module.css";
import useGeolocation from "../../hooks/useGeolocation";

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

export default function CheckoutForm({ onConfirmClick, onCancelClick }) {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    address: "",
  });
  const [isFormInvalid, setIsFormInvalid] = useState(false);

  const { address, loading, error } = useGeolocation();

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (isFormInvalid) {
      setIsFormInvalid(false);
    }
  };

  const handleGeolocation = () => {
    if (address) {
      setFormData((prevState) => ({
        ...prevState,
        address,
      }));
    }
  };

  const validateForm = () => {
    const { name, phoneNumber, address } = formData;
    return (
      name.trim() !== "" && isValidPhone(phoneNumber) && address.trim() !== ""
    );
  };

  const isUserDataValid = validateForm(); // Check if user data is valid

  const checkoutFormSubmitHandler = (e) => {
    e.preventDefault();

    if (!isUserDataValid) {
      setIsFormInvalid(true);
      return;
    }

    onConfirmClick({
      name: formData.name.trim(),
      phoneNumber: formData.phoneNumber.trim(),
      address: formData.address.trim(),
    });
  };

  return (
    <form className={styles.checkoutForm} onSubmit={checkoutFormSubmitHandler}>
      {isFormInvalid && (
        <p className={styles.formErrorText}>Please enter valid details</p>
      )}
      <input
        placeholder="Name"
        name="name"
        value={formData.name}
        onChange={inputChangeHandler}
      />
      <input
        placeholder="Phone number"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={inputChangeHandler}
      />
      <div className={styles.addressField}>
        <input
          placeholder="Address"
          name="address"
          value={formData.address}
          onChange={inputChangeHandler}
        />
        <button
          type="button"
          className={styles.location}
          onClick={handleGeolocation}
          disabled={loading}
        >
          {loading ? "Fetching Location..." : "Use My Location"}
        </button>
        {error && <p className={styles.errorText}>{error}</p>}
      </div>
      <div className={styles.checkoutControles}>
        <button type="button" className={styles.cancel} onClick={onCancelClick}>
          Cancel
        </button>
        <button
          type="submit"
          className={styles.confirm}
          disabled={!isUserDataValid}
        >
          Confirm
        </button>
      </div>
    </form>
  );
}
