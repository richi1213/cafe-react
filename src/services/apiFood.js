import supabase from "./supabase";

export async function getFood() {
  const { data, error } = await supabase.from("food-list").select("*");

  if (error) {
    console.error(error);
    throw new Error("Food could not be loaded");
  }

  return data;
}
