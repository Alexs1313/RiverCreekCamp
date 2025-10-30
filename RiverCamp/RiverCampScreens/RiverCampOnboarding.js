import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const RiverCampOnboarding = () => {
  const [riverCampCurrIndex, setRiverCampCurrIndex] = useState(0);
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../../assets/images/rivercampbg.png')}
      style={styles.rivercampback}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ alignItems: 'center', flex: 1, paddingBottom: 40 }}>
          <View style={styles.rivercampwelcomecontainer}>
            <Text style={styles.rivercampwelcometitle}>
              {riverCampCurrIndex === 0 && 'Welcome to River Creek Camp'}
              {riverCampCurrIndex === 1 && 'Read the Tales, Feel the Fear'}
              {riverCampCurrIndex === 2 && 'Meet the Fear Statue'}
              {riverCampCurrIndex === 3 && 'Your Campfire Awaits'}
            </Text>
            <Text style={styles.rivercampwelcomesubtitle}>
              {riverCampCurrIndex === 0 &&
                'Ten nights. Ten stories whispered by the fire. Each one dares you to listen till the end.'}
              {riverCampCurrIndex === 1 &&
                'Watch the short intro videos, play the ambient sound, and let the stories pull you into the dark.'}
              {riverCampCurrIndex === 2 &&
                'After each story, rate how scared you felt. The statue will awaken with every fear you face.'}
              {riverCampCurrIndex === 3 &&
                'Turn on your lantern, pick a story — or let the night choose one for you.'}
            </Text>
          </View>

          {riverCampCurrIndex === 0 && (
            <Image source={require('../../assets/images/rivercamponb1.png')} />
          )}
          {riverCampCurrIndex === 1 && (
            <Image source={require('../../assets/images/rivercamponb2.png')} />
          )}
          {riverCampCurrIndex === 2 && (
            <Image source={require('../../assets/images/rivercamponb3.png')} />
          )}
          {riverCampCurrIndex === 3 && (
            <Image source={require('../../assets/images/rivercamponb4.png')} />
          )}

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              if (riverCampCurrIndex < 3) {
                setRiverCampCurrIndex(riverCampCurrIndex + 1);
              } else {
                navigation.replace('SenerityBloomTab');
              }
            }}
          >
            <ImageBackground
              source={require('../../assets/images/rivercamponbbtn.png')}
              style={{
                width: 98,
                height: 23,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 30,
              }}
            >
              <Text style={styles.rivercampbuttontext}>
                {riverCampCurrIndex === 0 && 'Next'}
                {riverCampCurrIndex === 1 && 'Next'}
                {riverCampCurrIndex === 2 && 'Next'}
                {riverCampCurrIndex === 3 && 'Begin'}
              </Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  rivercampback: {
    flex: 1,
    width: '100%',
  },
  rivercampwelcomecontainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#001436',
    paddingTop: 120,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  rivercampbuttontext: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  rivercampwelcometitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
  },
  rivercampwelcomesubtitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default RiverCampOnboarding;
