import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";

interface Props {
  onSubmit: (content: string) => void;
}

export default function AddPostForm({ onSubmit }: Props) {
  const [content, setContent] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        value={content}
        onChangeText={setContent}
        placeholder="Write anything..."
        style={styles.input}
      />
      <Button
        title="Add Post"
        onPress={() => {
          onSubmit(content);
          setContent("");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,
  },
  input: { borderColor: "gray", borderWidth: 1, padding: 8 },
});
