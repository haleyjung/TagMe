import * as ImagePicker from 'expo-image-picker';
import React, { useState, useEffect } from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { Button } from '@rneui/themed';
import Collection from '../screens/Collection';

export default function ImageUploader({ onImageUpload, onSave, navigation }) {
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
      const responseData = await onImageUpload(result.base64);
      setText(responseData);
      setLoadStatus('Image loaded');
    }
  };

  if (Array.isArray(text) && text.length > 1) {
    tagList = text.map((tag, i) => {
      return (
        <View style={styles.tagWrapper} key={i}>
          <Text style={styles.tagText}>#{tag}</Text>
        </View>
      );
    });
  }

  const saveImageWithTags = async () => {
    let imgTagsToSave = {
      image: image,
      tags: text,
    };
    const responseData = await onSave(imgTagsToSave);
    setLoadStatus('Saved');
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

      case 'Saved':
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

      <View style={styles.buttonsContainer}>
        {renderButton(loadStatus)}
        <TouchableOpacity
          style={[styles.galleryButton, styles.buttonShadowProp]}
        >
          <Button
              icon={{
                name: 'user',
                type: 'font-awesome',
                size: 25,
                color: 'white',
              }}
              iconRight
              buttonStyle={{
                backgroundColor: '#F5B873',
                borderColor: 'transparent',
                borderWidth: 3,
                borderRadius: 15,
                height: 50,
                width: 80,
              }}
              onPress={() => navigation.navigate('Collection')}
            />
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
    margin: 5,
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignContent: 'space-between',
  },
  tagWrapper: {
    backgroundColor: 'rgba(255,182,193, .4)',
    borderColor: 'rgba(255,182,193, .4)',
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 2,
    padding: 5,
    margin: 5,
    width: 160,
  },
  tagText: {
    color: '#000',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignContent: 'space-around',
  },
  buttonDesign: {
    height: 50,
    width: '70%',
    backgroundColor: '#F5B873',
    borderColor: '#F5B873',
    borderRadius: 15,
    borderWidth: 3,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonDesign: {
    height: 50,
    width: '70%',
    backgroundColor: '#FA8C69',
    borderColor: '#FA8C69',
    borderRadius: 15,
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
  galleryButton: {
    marginLeft: '5%'
  }
});
