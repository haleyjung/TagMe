import * as ImagePicker from 'expo-image-picker';
import React, { useState, useEffect } from 'react';
import { Button, Image, View, Text } from 'react-native';

function ImagePickerComponent({ onSubmit }) {
  const [image, setImage] = useState(null);
  const [text, setText] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      base64: true,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      setText("Loading..");
      const responseData = await onSubmit(result.base64);
      setText(responseData);
    }

  };

  let itemList;
  if ( Array.isArray(text) && text.length > 1) {
    itemList = text.map((tag, i) => {
      return <Text key={i}>{tag}</Text>
    });
    console.log('THIS:', itemList)
  }

  return (
    <View>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: 400, height: 300, resizeMode: "contain" }}
        />
      )}

      {itemList}

    </View>
  );
}

export default ImagePickerComponent;