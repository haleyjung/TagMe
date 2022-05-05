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
// import storage from '@react-native-firebase/storage';

import { addToFirebase } from '../config/helpers';

export default function ImageUploader({ onSubmit }) {
  const [image, setImage] = useState(null);
  const [text, setText] = useState(null);
  const [loadStatus, setLoadStatus] = useState('Image not loaded');
  let tagList;

  const uploadImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      base64: true,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      setText('Loading..');
      const responseData = await onSubmit(result.base64);
      setText(responseData);
      setLoadStatus('Image loaded');
    }
  };

  if (Array.isArray(text) && text.length > 1) {
    tagList = text.map((tag, i) => {
      return (
        <View style={styles.tagWrapper} key={i}>
          <Text style={styles.tagText}>
            <Text style={{ fontWeight: 'bold' }}>#</Text>
            {tag}
          </Text>
        </View>
      );
    });
  }

  const saveImageWithTags = async () => {
    console.log('saved');
    setLoadStatus('Image saved');
  };

  const renderButton = (loadStatus) => {
    let button;
    switch (loadStatus) {
      case 'Image not loaded':
        button = (
          <TouchableOpacity
            style={[styles.buttonDesign, styles.buttonShadowProp]}
            onPress={uploadImage}
          >
            <Text style={styles.buttonText}>UPLOAD A PHOTO</Text>
          </TouchableOpacity>
        );
        break;

      case 'Image loaded':
        button = (
          <TouchableOpacity
            style={[styles.saveButtonDesign, styles.buttonShadowProp]}
            onPress={saveImageWithTags}
          >
            <Text style={styles.buttonText}>SAVE</Text>
          </TouchableOpacity>
        );
        break;

      case 'Image saved':
        button = (
          <TouchableOpacity
            style={[styles.buttonDesign, styles.buttonShadowProp]}
            onPress={uploadImage}
          >
            <Text style={styles.buttonText}>UPLOAD MORE PHOTO</Text>
          </TouchableOpacity>
        );
        break;
    }
    return button;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.imgContainer, styles.imgShadowProp]}>
        <Text style={styles.defaultBgText}>SAY MEOW</Text>
        <Image
          source={require('../../assets/addImg.png')}
          style={styles.defaultBgImg}
        />
        {image && <Image source={{ uri: image }} style={styles.loadedImg} />}
      </View>

      <View style={styles.tagContainer}>{tagList}</View>

      <View>{renderButton(loadStatus)}</View>
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
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  defaultBgText: {
    fontSize: 15,
    fontWeight: 'bold',
    opacity: 0.2,
    position: 'absolute',
    paddingBottom: 220,
  },
  defaultBgImg: {
    width: '60%',
    height: '60%',
    resizeMode: 'contain',
    position: 'absolute',
    opacity: 0.3,
  },
  loadedImg: {
    width: '90%',
    height: '80%',
    resizeMode: 'contain',
  },
  tagContainer: {
    flex: 3,
    margin: 10,
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignContent: 'space-between',
  },
  tagWrapper: {
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 5,
    margin: 5,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tagText: {
    color: '#000',
  },
  buttonDesign: {
    height: 50,
    width: '100%',
    backgroundColor: '#F5B873',
    borderColor: '#F5B873',
    borderRadius: 20,
    borderWidth: 3,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonDesign: {
    height: 50,
    width: '100%',
    backgroundColor: '#FA8C69',
    borderColor: '#FA8C69',
    borderRadius: 20,
    borderWidth: 3,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonShadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  buttonText: {
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#fff',
  },
});
