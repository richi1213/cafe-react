import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export async function createOrder({ user, items, totalPrice }) {
  const { name, phoneNumber, address } = user;

  try {
    const { data, error } = await supabase.from('orders').insert(
      {
        created_at: new Date().toISOString(),
        receiver_name: name,
        phone_number: phoneNumber,
        address: address,
        order_info: items,
        total_price: totalPrice,
      },
      { returning: 'representation' }
    );

    // Debugging: Log data and error
    // console.log("Supabase insert data:", data); // Log what Supabase returns
    // console.log("Supabase insert error:", error); // Log any errors

    if (error) {
      console.error('Error inserting order: ', error);
      return null;
    }

    return data; // Return the data if insertion is successful
  } catch (err) {
    console.error('Unexpected error: ', err); // Catch any unexpected errors
    return null;
  }
}

export default supabase;
