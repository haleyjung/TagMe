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
  let tagList;

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

  if (Array.isArray(text) && text.length > 1) {
    tagList = text.map((tag, i) => {
      return <Text style={styles.tagText} key={i}>
        <Text style={{ fontWeight: 'bold' }}>#</Text>
        {tag}
      </Text>;
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.imgContainer, styles.imgShadowProp]}>
        <Text style={styles.defaultBgText}>SAY MEOW</Text>
        <Image
          source={require('../../assets/addImg.png')}
          style={styles.defaultBgImg}
        />
        {image && (
          <Image
            source={{ uri: image }}
            style={styles.loadedImg}
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
  imgContainer: {
    flex: 4,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imgShadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  defaultBgText: {
    fontSize: 15,
    fontWeight: 'bold',
    opacity: 0.2,
    position: 'absolute',
    paddingBottom: 220
  },
  defaultBgImg: {
    width: '60%',
    height: '60%',
    resizeMode: 'contain',
    position: 'absolute',
    opacity: 0.3
  },
  loadedImg: {
    width: '90%',
    height: '80%',
    resizeMode: 'contain'
  },
  tagContainer: {
    flex: 2,
    justifyContent: 'center',
    paddingLeft: 30,
  },
  tagText: {
    color: 'purple'
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
});
