import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  StatusBar,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { getTriviaScore, getProgress } from '../utils/storage';
import chapters from '../data/chapters';
import { toggleMusic, isMusicMuted } from '../utils/music';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 56) / 2;

export default function HomeScreen({ navigation }) {
  const [highScore, setHighScore] = useState(0);
  const [chaptersRead, setChaptersRead] = useState(0);
  const [muted, setMuted] = useState(isMusicMuted());

  const scaleLeft = useRef(new Animated.Value(1)).current;
  const scaleRight = useRef(new Animated.Value(1)).current;
  const titleOpacity = useRef(new Animated.Value(0)).current;
  const titleTranslate = useRef(new Animated.Value(-30)).current;
  const cardLeftTranslate = useRef(new Animated.Value(40)).current;
  const cardRightTranslate = useRef(new Animated.Value(40)).current;
  const cardLeftOpacity = useRef(new Animated.Value(0)).current;
  const cardRightOpacity = useRef(new Animated.Value(0)).current;
  const statsOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    loadStats();
    Animated.sequence([
      Animated.parallel([
        Animated.timing(titleOpacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(titleTranslate, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(cardLeftOpacity, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(cardLeftTranslate, {
          toValue: 0,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(cardRightOpacity, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(cardRightTranslate, {
          toValue: 0,
          duration: 600,
          useNativeDriver: true,
        }),
      ]),
      Animated.timing(statsOpacity, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadStats();
    });
    return unsubscribe;
  }, [navigation]);

  async function loadStats() {
    const score = await getTriviaScore();
    const read = await getProgress();
    setHighScore(score);
    setChaptersRead(read.length);
  }

  async function handleToggleMusic() {
    const newMuted = await toggleMusic();
    setMuted(newMuted);
  }

  function onPressIn(scale) {
    Animated.spring(scale, {
      toValue: 0.93,
      useNativeDriver: true,
    }).start();
  }

  function onPressOut(scale) {
    Animated.spring(scale, {
      toValue: 1,
      friction: 3,
      tension: 100,
      useNativeDriver: true,
    }).start();
  }

  return (
    <ImageBackground
      source={require('../../assets/images/fondo_principal.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.overlay} />
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      <View style={styles.topBorder}>
        <Text style={styles.borderPattern}>
          ◆ ✦ ◆ ✦ ◆ ✦ ◆ ✦ ◆ ✦ ◆ ✦ ◆ ✦ ◆ ✦ ◆
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.cornerDecorLeft}>
          <Text style={styles.cornerText}>✧ ✦ ★ ✦ ✧</Text>
        </View>
        <View style={styles.cornerDecorRight}>
          <TouchableOpacity onPress={handleToggleMusic} style={styles.musicButton}>
            <Text style={styles.musicIcon}>{muted ? '🔇' : '🔊'}</Text>
          </TouchableOpacity>
        </View>

        <Animated.View
          style={[
            styles.titleSection,
            {
              opacity: titleOpacity,
              transform: [{ translateY: titleTranslate }],
            },
          ]}
        >
          <Text style={styles.crescentTop}>☪</Text>
          <Text style={styles.title}>Imperio Otomano</Text>
          <Text style={styles.subtitle}>El Legado de los Sultanes</Text>
          <View style={styles.titleDecor}>
            <Text style={styles.titleDecorText}>★ ◆ ✦ ◆ ★</Text>
          </View>
        </Animated.View>

        <View style={styles.cardsSection}>
          <Animated.View
            style={[
              styles.cardWrapper,
              {
                opacity: cardLeftOpacity,
                transform: [{ translateX: cardLeftTranslate }],
              },
            ]}
          >
            <Animated.View style={{ transform: [{ scale: scaleLeft }] }}>
              <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate('History')}
                onPressIn={() => onPressIn(scaleLeft)}
                onPressOut={() => onPressOut(scaleLeft)}
                activeOpacity={1}
              >
                <View style={styles.cardBorderLeft} />
                <View style={styles.cardContent}>
                  <Text style={styles.cardIcon}>📚</Text>
                  <Text style={styles.cardTitle}>Historia del{'\n'}Imperio</Text>
                  <View style={styles.cardDecor}>
                    <Text style={styles.cardDecorText}>◆ ✦ ◆</Text>
                  </View>
                  <Text style={styles.cardSubtitle}>
                    {chaptersRead} de {chapters.length} capítulos
                  </Text>
                </View>
              </TouchableOpacity>
            </Animated.View>
          </Animated.View>

          <Animated.View
            style={[
              styles.cardWrapper,
              {
                opacity: cardRightOpacity,
                transform: [{ translateX: cardRightTranslate }],
              },
            ]}
          >
            <Animated.View style={{ transform: [{ scale: scaleRight }] }}>
              <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate('Trivia')}
                onPressIn={() => onPressIn(scaleRight)}
                onPressOut={() => onPressOut(scaleRight)}
                activeOpacity={1}
              >
                <View style={styles.cardBorderRight} />
                <View style={styles.cardContent}>
                  <Text style={styles.cardIcon}>🧠</Text>
                  <Text style={styles.cardTitle}>Trivia{'\n'}Imperial</Text>
                  <View style={styles.cardDecor}>
                    <Text style={styles.cardDecorText}>◆ ✦ ◆</Text>
                  </View>
                  <Text style={styles.cardSubtitle}>
                    500 preguntas
                  </Text>
                </View>
              </TouchableOpacity>
            </Animated.View>
          </Animated.View>
        </View>

        <Animated.View style={[styles.statsSection, { opacity: statsOpacity }]}>
          <View style={styles.statsBorder}>
            <Text style={styles.statsBorderText}>★ ◆ ★</Text>
          </View>
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statIcon}>🏆</Text>
              <Text style={styles.statLabel}>Mejor Puntaje</Text>
              <Text style={styles.statValue}>{highScore}</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statIcon}>📖</Text>
              <Text style={styles.statLabel}>Capítulos Leídos</Text>
              <Text style={styles.statValue}>
                {chaptersRead}/{chapters.length}
              </Text>
            </View>
          </View>
          <View style={styles.statsBorder}>
            <Text style={styles.statsBorderText}>★ ◆ ★</Text>
          </View>
        </Animated.View>

        <View style={styles.bottomDecor}>
          <Text style={styles.bottomDecorText}>
            ☪  ✦  ◆  ✦  ☪  ✦  ◆  ✦  ☪
          </Text>
        </View>
      </View>

      <View style={styles.bottomBorder}>
        <Text style={styles.borderPattern}>
          ◆ ✦ ◆ ✦ ◆ ✦ ◆ ✦ ◆ ✦ ◆ ✦ ◆ ✦ ◆ ✦ ◆
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(13, 13, 26, 0.75)',
  },
  topBorder: {
    backgroundColor: '#8B0000',
    paddingVertical: 8,
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#D4AF37',
  },
  borderPattern: {
    color: '#D4AF37',
    fontSize: 12,
    letterSpacing: 2,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  cornerDecorLeft: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  cornerDecorRight: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  cornerText: {
    color: '#D4AF37',
    fontSize: 12,
    opacity: 0.5,
    letterSpacing: 2,
  },
  musicButton: {
    padding: 8,
  },
  musicIcon: {
    fontSize: 22,
  },
  titleSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  crescentTop: {
    color: '#D4AF37',
    fontSize: 36,
    marginBottom: 8,
  },
  title: {
    color: '#D4AF37',
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 6,
    letterSpacing: 2,
  },
  subtitle: {
    color: '#F5E6CA',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 6,
    fontStyle: 'italic',
    letterSpacing: 1,
  },
  titleDecor: {
    marginTop: 10,
  },
  titleDecorText: {
    color: '#D4AF37',
    fontSize: 16,
    letterSpacing: 6,
  },
  cardsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 24,
  },
  cardWrapper: {
    width: CARD_WIDTH,
  },
  card: {
    height: CARD_WIDTH * 1.3,
    borderRadius: 16,
    overflow: 'hidden',
  },
  cardBorderLeft: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(22, 33, 62, 0.9)',
    borderRadius: 16,
    borderWidth: 3,
    borderColor: '#D4AF37',
  },
  cardBorderRight: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(26, 26, 46, 0.9)',
    borderRadius: 16,
    borderWidth: 3,
    borderColor: '#D4AF37',
  },
  cardContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  cardIcon: {
    fontSize: 42,
    marginBottom: 10,
  },
  cardTitle: {
    color: '#D4AF37',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 6,
  },
  cardDecor: {
    marginVertical: 6,
  },
  cardDecorText: {
    color: '#D4AF37',
    fontSize: 12,
    letterSpacing: 4,
    opacity: 0.7,
  },
  cardSubtitle: {
    color: '#F5E6CA',
    fontSize: 12,
    textAlign: 'center',
    opacity: 0.8,
  },
  statsSection: {
    width: '100%',
    backgroundColor: 'rgba(26, 26, 46, 0.9)',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#D4AF37',
    padding: 16,
  },
  statsBorder: {
    alignItems: 'center',
    paddingVertical: 4,
  },
  statsBorderText: {
    color: '#D4AF37',
    fontSize: 12,
    letterSpacing: 6,
    opacity: 0.6,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 8,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  statLabel: {
    color: '#F5E6CA',
    fontSize: 12,
    marginBottom: 4,
    opacity: 0.8,
  },
  statValue: {
    color: '#D4AF37',
    fontSize: 22,
    fontWeight: 'bold',
  },
  statDivider: {
    width: 2,
    height: 50,
    backgroundColor: '#D4AF37',
    opacity: 0.3,
    marginHorizontal: 8,
  },
  bottomDecor: {
    marginTop: 24,
    alignItems: 'center',
  },
  bottomDecorText: {
    color: '#D4AF37',
    fontSize: 14,
    letterSpacing: 3,
    opacity: 0.4,
  },
  bottomBorder: {
    backgroundColor: '#8B0000',
    paddingVertical: 8,
    alignItems: 'center',
    borderTopWidth: 3,
    borderTopColor: '#D4AF37',
  },
});
