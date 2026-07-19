import { Audio } from 'expo-av';
import AsyncStorage from '@react-native-async-storage/async-storage';

let soundObject = null;
let isMuted = false;
let isInitialized = false;

const MUSIC_KEY = '@ottoman_music_muted';

export async function initMusic() {
  if (isInitialized) return;

  try {
    const savedMute = await AsyncStorage.getItem(MUSIC_KEY);
    isMuted = savedMute === 'true';
  } catch (e) {
    isMuted = false;
  }

  isInitialized = true;

  if (!isMuted) {
    await startMusic();
  }
}

async function startMusic() {
  try {
    await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });

    if (soundObject) {
      await soundObject.unloadAsync();
    }

    const { sound } = await Audio.Sound.createAsync(
      require('../../assets/sounds/tema_apk.mp3'),
      { isLooping: true, volume: 0.35, shouldPlay: true }
    );
    soundObject = sound;
  } catch (e) {
    console.log('Error cargando musica:', e);
  }
}

export async function playMusic() {
  try {
    if (soundObject) {
      await soundObject.setVolumeAsync(0.35);
      await soundObject.playAsync();
    } else {
      await startMusic();
    }
    isMuted = false;
    AsyncStorage.setItem(MUSIC_KEY, 'false');
  } catch (e) {
    console.log('Error reproduciendo musica:', e);
  }
}

export async function pauseMusic() {
  try {
    if (soundObject) {
      await soundObject.pauseAsync();
    }
    isMuted = true;
    AsyncStorage.setItem(MUSIC_KEY, 'true');
  } catch (e) {
    console.log('Error pausando musica:', e);
  }
}

export async function toggleMusic() {
  if (isMuted) {
    await playMusic();
  } else {
    await pauseMusic();
  }
  return isMuted;
}

export function isMusicMuted() {
  return isMuted;
}

export async function resumeMusicOnForeground() {
  try {
    if (!isMuted && soundObject) {
      await soundObject.playAsync();
    } else if (!isMuted && !soundObject) {
      await startMusic();
    }
  } catch (e) {
    console.log('Error resuming:', e);
  }
}

export async function pauseMusicOnBackground() {
  try {
    if (soundObject) {
      await soundObject.pauseAsync();
    }
  } catch (e) {
    console.log('Error pausing bg:', e);
  }
}
