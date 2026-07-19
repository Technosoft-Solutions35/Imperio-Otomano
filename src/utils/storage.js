import AsyncStorage from '@react-native-async-storage/async-storage';

const KEYS = {
  PROGRESS: '@ottoman_progress',
  TRIVIA_HIGH_SCORE: '@ottoman_trivia_high_score',
  TRIVIA_STATS: '@ottoman_trivia_stats',
  CURRENT_SESSION: '@ottoman_current_session',
};

export async function saveProgress(chapterId) {
  try {
    const json = await AsyncStorage.getItem(KEYS.PROGRESS);
    const progress = json ? JSON.parse(json) : [];
    if (!progress.includes(chapterId)) {
      progress.push(chapterId);
      await AsyncStorage.setItem(KEYS.PROGRESS, JSON.stringify(progress));
    }
    return true;
  } catch (e) {
    console.error('Error saving progress:', e);
    return false;
  }
}

export async function getProgress() {
  try {
    const json = await AsyncStorage.getItem(KEYS.PROGRESS);
    return json ? JSON.parse(json) : [];
  } catch (e) {
    console.error('Error loading progress:', e);
    return [];
  }
}

export async function saveTriviaScore(score) {
  try {
    const json = await AsyncStorage.getItem(KEYS.TRIVIA_HIGH_SCORE);
    const currentHigh = json ? JSON.parse(json) : 0;
    if (score > currentHigh) {
      await AsyncStorage.setItem(KEYS.TRIVIA_HIGH_SCORE, JSON.stringify(score));
    }
    return true;
  } catch (e) {
    console.error('Error saving trivia score:', e);
    return false;
  }
}

export async function getTriviaScore() {
  try {
    const json = await AsyncStorage.getItem(KEYS.TRIVIA_HIGH_SCORE);
    return json ? JSON.parse(json) : 0;
  } catch (e) {
    console.error('Error loading trivia score:', e);
    return 0;
  }
}

export async function saveTriviaStats(stats) {
  try {
    await AsyncStorage.setItem(KEYS.TRIVIA_STATS, JSON.stringify(stats));
    return true;
  } catch (e) {
    console.error('Error saving trivia stats:', e);
    return false;
  }
}

export async function getTriviaStats() {
  try {
    const json = await AsyncStorage.getItem(KEYS.TRIVIA_STATS);
    return json
      ? JSON.parse(json)
      : { totalCorrect: 0, totalAnswered: 0, sessionsPlayed: 0 };
  } catch (e) {
    console.error('Error loading trivia stats:', e);
    return { totalCorrect: 0, totalAnswered: 0, sessionsPlayed: 0 };
  }
}

export async function saveCurrentSession(sessionData) {
  try {
    await AsyncStorage.setItem(KEYS.CURRENT_SESSION, JSON.stringify(sessionData));
    return true;
  } catch (e) {
    console.error('Error saving current session:', e);
    return false;
  }
}

export async function getCurrentSession() {
  try {
    const json = await AsyncStorage.getItem(KEYS.CURRENT_SESSION);
    return json ? JSON.parse(json) : null;
  } catch (e) {
    console.error('Error loading current session:', e);
    return null;
  }
}

export async function clearCurrentSession() {
  try {
    await AsyncStorage.removeItem(KEYS.CURRENT_SESSION);
    return true;
  } catch (e) {
    console.error('Error clearing current session:', e);
    return false;
  }
}
