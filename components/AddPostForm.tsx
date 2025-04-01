import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Button, Card, TextInput, useThemeColor } from "./Themed";
import { Feather } from "@expo/vector-icons";

interface Props {
  onSubmit: (content: string) => void;
}

export default function AddPostForm({ onSubmit }: Props) {
  const [content, setContent] = useState("");
  const color = useThemeColor({}, "primary");
  return (
    <Card style={styles.container}>
      <TextInput
        value={content}
        onChangeText={setContent}
        placeholder="What's on your mind?"
      />

      <Card style={styles.row}>
        <TouchableOpacity>
          <Feather name="image" size={24} color={color} />
        </TouchableOpacity>
      </Card>

      <Button
        title="Add Post"
        onPress={() => {
          onSubmit(content);
          setContent("");
        }}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
