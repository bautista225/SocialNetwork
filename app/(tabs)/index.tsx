import { FlatList, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import AddPostForm from "@/components/AddPostForm";
import { getPosts, Posts } from "@/lib/api";

export default function HomeScreen() {
  const [posts, setPosts] = useState<Posts>([]);

  useEffect(() => {
    getPosts().then((data) => setPosts(data));
  }, []);

  console.log(posts);

  const handleSubmit = async (content: string) => {
    const { data, error } = await supabase
      .from("posts")
      .insert({ content })
      .select();
    if (error) {
      console.error("Error adding post:", error);
    } else {
      setPosts([...posts, data[0]]);
    }
  };

  return (
    <View style={styles.container}>
      <AddPostForm onSubmit={handleSubmit} />
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{new Date(item.created_at).toLocaleString()}</Text>
            <Text>{item.content}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
