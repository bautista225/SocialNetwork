import { supabase } from "./supabase";

export const getPosts = async () => {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) {
    console.error("Error fetching posts:", error);
    return [];
  } else {
    return data;
  }
};

export type Posts = Awaited<ReturnType<typeof getPosts>>;
