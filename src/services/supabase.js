import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://odebsiqxhqzzsgxlflvs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9kZWJzaXF4aHF6enNneGxmbHZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ0MTg1NzksImV4cCI6MjAzOTk5NDU3OX0.wkUHoXc10ByebGAPtPyQl4b8BmqtaeEKoEDFiH23Bbk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
