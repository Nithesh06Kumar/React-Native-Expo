import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const InfoModal = ({ open }: { open?: boolean }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(true);
  function onClose() {
    setModalOpen(false);
  }

  return (
    <View>
      <Modal animationType="slide" visible={modalOpen} transparent>
        <View style={styles.modalContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>App Info</Text>
            <Pressable onPress={onClose}>
              <MaterialIcons name="close" color="#000" size={24} />
            </Pressable>
          </View>
          <ScrollView>
            <View style={styles.content}>
              <Text style={styles.title}>
                This App is for adding emojies to the Images.
              </Text>
              <Text
                style={[styles.title, { color: "darkred", fontWeight: "bold" }]}
              >
                Important: Provide media permission to use this app
                functionality.
              </Text>
              <Text
                style={styles.title}
              >{`1. Select Image from gallery or you can go ahead with default image by clicking to "use this photo"`}</Text>
              <Text
                style={styles.title}
              >{`2. Click on "+" button and select a emoji. Emoji will appear on top of image. `}</Text>
              <Text
                style={styles.title}
              >{`3. You can double tap to zoom in or zoom out the emage. Drag the emoji to place it on image. `}</Text>
              <Text
                style={styles.title}
              >{`4. Finally save the image to gallery by clicking to save button.  `}</Text>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

export default InfoModal;

const styles = StyleSheet.create({
  modalContainer: {
    width: "100%",
    height: "55%",
    backgroundColor: "#fff",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: "absolute",
    bottom: 0,
  },
  titleContainer: {
    height: 50,
    backgroundColor: "#ffa",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#000",
    fontSize: 20,
  },
  content: {
    padding: 16,
    flex: 1,
    gap: 10,
  },
});
