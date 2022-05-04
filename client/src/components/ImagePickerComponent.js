import * as ImagePicker from 'expo-image-picker';
import React, { useState, useEffect } from 'react';
import {
  Button,
  Image,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
// import styled from 'styled-components/native';

export default function ImagePickerComponent({ onSubmit }) {
  const [image, setImage] = useState(null);
  const [text, setText] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      base64: true,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      setText('Loading..');
      const responseData = await onSubmit(result.base64);
      setText(responseData);
    }
  };

  let tagList;
  if (Array.isArray(text) && text.length > 1) {
    tagList = text.map((tag, i) => {
      return <Text styles={styles.tagText} key={i}>#{tag}</Text>;
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headContainer}>
        <Text style={styles.Heading}>Recommended Hashtags</Text>
      </View>

      <View style={styles.imgContainer}>
        {image && (
          <Image
            source={{ uri: image }}
            style={{ width: '90%', height: '80%', resizeMode: 'contain' }}
          />
        )}
      </View>

      <View style={styles.tagContainer}>{tagList}</View>

      <View>
        <TouchableOpacity style={[styles.buttonDesign, styles.buttonShadowProp]} onPress={pickImage}>
          <Text style={styles.buttonText}>UPLOAD A PHOTO</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 350,
    justifyContent: 'center',
  },
  headContainer: {
    flex: 0.3,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imgContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  tagContainer: {
    flex: 2,
    justifyContent: 'center',
    paddingLeft: 30,
    backgroundColor: '#49beb7',
  },
  tagText: {

  },
  buttonDesign: {
    height: 50,
    width: '100%',
    backgroundColor: '#FFA700',
    borderColor: '#FFA700',
    borderRadius: 20,
    borderWidth: 3,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonShadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  buttonText: {
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#fff'
  },
  Heading: {
    fontSize: 20,
  },
});
