import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Post } from "@/lib/api";
import { Card, Text, useThemeColor } from "./Themed";
import { FontAwesome } from "@expo/vector-icons";

interface Props {
  post: Post;
}

export default function PostCard({ post }: Props) {
  const color = useThemeColor({}, "primary");
  return (
    <Card style={styles.container}>
      <Card style={styles.header}>
        <Image
          source={{ uri: "https://picsum.photos/200" }}
          style={styles.avatar}
        />
        <Text style={styles.username}>Juan Bautista</Text>
        <Text>{post.created_at.substring(0, 19).replace("T", " ")}</Text>
      </Card>
      {post.image && (
        <Card style={styles.imageContainer}>
          <Image source={{ uri: post.image }} style={styles.image} />
        </Card>
      )}
      <Card style={styles.content}>
        <Text style={styles.contentText}>{post.content}</Text>
        <Card style={styles.footer}>
          <TouchableOpacity>
            <FontAwesome name="heart-o" size={24} color={color} />
          </TouchableOpacity>
        </Card>
      </Card>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingTop: 8,
    paddingHorizontal: 16,
  },
  avatar: { height: 32, width: 32, borderRadius: 16 },
  username: { fontWeight: "bold" },
  content: { padding: 16 },
  contentText: { fontSize: 16 },
  footer: { paddingTop: 8 },
  imageContainer: {
    height: 300,
    width: "100%",
    marginTop: 8,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
