import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
  Alert,
} from 'react-native';
import { shuffleArray, shuffleQuestionAnswers } from '../utils/shuffle';
import { saveTriviaScore, getTriviaScore, saveTriviaStats, getTriviaStats } from '../utils/storage';
import questions from '../data/questions';

const { width } = Dimensions.get('window');

const QUESTIONS_PER_SESSION = 20;
const INITIAL_LIVES = 3;
const CORRECT_POINTS = 10;
const LETTERS = ['A', 'B', 'C', 'D'];

export default function TriviaScreen({ navigation }) {
  const [gameState, setGameState] = useState('idle');
  const [gameQuestions, setGameQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(INITIAL_LIVES);
  const [streak, setStreak] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isNewRecord, setIsNewRecord] = useState(false);

  const fadeAnim = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;
  const scoreAnim = useRef(new Animated.Value(1)).current;
  const streakAnim = useRef(new Animated.Value(1)).current;
  const shakeAnim = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const gameOverScale = useRef(new Animated.Value(0)).current;
  const gameOverOpacity = useRef(new Animated.Value(0)).current;
  const titleScale = useRef(new Animated.Value(0)).current;
  const titleOpacity = useRef(new Animated.Value(0)).current;
  const startButtonScale = useRef(new Animated.Value(0)).current;
  const startButtonOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    loadHighScore();
    showTitleAnimation();
  }, []);

  function showTitleAnimation() {
    Animated.sequence([
      Animated.parallel([
        Animated.spring(titleScale, {
          toValue: 1,
          friction: 5,
          useNativeDriver: true,
        }),
        Animated.timing(titleOpacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.spring(startButtonScale, {
          toValue: 1,
          friction: 5,
          useNativeDriver: true,
        }),
        Animated.timing(startButtonOpacity, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }

  async function loadHighScore() {
    const score = await getTriviaScore();
    setHighScore(score);
  }

  function startGame() {
    const shuffled = shuffleArray(questions);
    const selected = shuffled.slice(0, QUESTIONS_PER_SESSION);
    const withShuffledAnswers = selected.map((q) => shuffleQuestionAnswers(q));

    setGameQuestions(withShuffledAnswers);
    setCurrentIndex(0);
    setScore(0);
    setLives(INITIAL_LIVES);
    setStreak(0);
    setCorrectCount(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setIsNewRecord(false);

    fadeAnim.setValue(0);
    slideAnim.setValue(30);

    setGameState('playing');

    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  }

  function getCurrentQuestion() {
    return gameQuestions[currentIndex];
  }

  function handleAnswer(answerIndex) {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answerIndex);
    setShowResult(true);

    const currentQuestion = getCurrentQuestion();
    const isCorrect = answerIndex === currentQuestion.correctIndex;

    if (isCorrect) {
      const bonus = streak * 5;
      const points = CORRECT_POINTS + bonus;
      const newScore = score + points;
      const newStreak = streak + 1;

      setScore(newScore);
      setStreak(newStreak);
      setCorrectCount((prev) => prev + 1);

      Animated.sequence([
        Animated.spring(pulseAnim, {
          toValue: 1.15,
          friction: 3,
          useNativeDriver: true,
        }),
        Animated.spring(pulseAnim, {
          toValue: 1,
          friction: 3,
          useNativeDriver: true,
        }),
      ]).start();

      animateScorePop();
      if (newStreak > 1) {
        animateStreakPop();
      }
    } else {
      const newLives = lives - 1;
      setLives(newLives);
      setStreak(0);

      Animated.sequence([
        Animated.timing(shakeAnim, {
          toValue: 10,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnim, {
          toValue: -10,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnim, {
          toValue: 8,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnim, {
          toValue: -8,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnim, {
          toValue: 0,
          duration: 50,
          useNativeDriver: true,
        }),
      ]).start();

      if (newLives <= 0) {
        setTimeout(() => endGame(), 1500);
        return;
      }
    }

    const delay = isCorrect ? 1000 : 1500;
    setTimeout(() => {
      if (currentIndex + 1 >= QUESTIONS_PER_SESSION) {
        endGame();
      } else {
        transitionToNext();
      }
    }, delay);
  }

  function transitionToNext() {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start(() => {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);

      slideAnim.setValue(30);
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    });
  }

  async function endGame() {
    setGameState('gameover');

    const finalScore = score;
    let recordBroken = false;

    if (finalScore > highScore) {
      await saveTriviaScore(finalScore);
      setHighScore(finalScore);
      recordBroken = true;
      setIsNewRecord(true);
    }

    const stats = await getTriviaStats();
    await saveTriviaStats({
      totalCorrect: stats.totalCorrect + correctCount,
      totalAnswered: stats.totalAnswered + (currentIndex + 1),
      sessionsPlayed: stats.sessionsPlayed + 1,
    });

    gameOverScale.setValue(0);
    gameOverOpacity.setValue(0);
    Animated.sequence([
      Animated.timing(gameOverOpacity, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.spring(gameOverScale, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }),
    ]).start();
  }

  function animateScorePop() {
    scoreAnim.setValue(1.3);
    Animated.spring(scoreAnim, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  }

  function animateStreakPop() {
    streakAnim.setValue(1.4);
    Animated.spring(streakAnim, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  }

  function getOptionStyle(index) {
    if (!showResult || selectedAnswer === null) {
      return styles.optionDefault;
    }
    if (index === getCurrentQuestion().correctIndex) {
      return styles.optionCorrect;
    }
    if (index === selectedAnswer && index !== getCurrentQuestion().correctIndex) {
      return styles.optionWrong;
    }
    return styles.optionDefault;
  }

  function getOptionTextStyle(index) {
    if (!showResult || selectedAnswer === null) {
      return styles.optionText;
    }
    if (index === getCurrentQuestion().correctIndex) {
      return styles.optionTextCorrect;
    }
    if (index === selectedAnswer && index !== getCurrentQuestion().correctIndex) {
      return styles.optionTextWrong;
    }
    return styles.optionText;
  }

  function renderLives() {
    const hearts = [];
    for (let i = 0; i < INITIAL_LIVES; i++) {
      hearts.push(
        <Text key={i} style={[styles.heart, i >= lives && styles.heartLost]}>
          {i < lives ? '❤️' : '🖤'}
        </Text>
      );
    }
    return hearts;
  }

  function renderProgressBar() {
    const progress = ((currentIndex + 1) / QUESTIONS_PER_SESSION) * 100;
    return (
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${progress}%` }]} />
        </View>
        <Text style={styles.progressText}>
          {currentIndex + 1}/{QUESTIONS_PER_SESSION}
        </Text>
      </View>
    );
  }

  function renderIdleScreen() {
    return (
      <View style={styles.idleContainer}>
        <Animated.View
          style={[
            styles.idleContent,
            {
              opacity: titleOpacity,
              transform: [{ scale: titleScale }],
            },
          ]}
        >
          <Text style={styles.idleCrescent}>☪</Text>
          <Text style={styles.idleTitle}>Trivia Imperial</Text>
          <Text style={styles.idleSubtitle}>¿Cuánto sabes del Imperio Otomano?</Text>
          <View style={styles.idleDecor}>
            <Text style={styles.idleDecorText}>★ ◆ ✦ ◆ ★</Text>
          </View>
          <Text style={styles.idleRules}>
            20 preguntas{'\n'}3 vidas{'\n'}Puntos por racha 🔥
          </Text>
        </Animated.View>

        <Animated.View
          style={{
            opacity: startButtonOpacity,
            transform: [{ scale: startButtonScale }],
          }}
        >
          <TouchableOpacity
            style={styles.startButton}
            onPress={startGame}
            activeOpacity={0.7}
          >
            <Text style={styles.startButtonText}>Comenzar Juego</Text>
            <Text style={styles.startButtonIcon}>⚔️</Text>
          </TouchableOpacity>
        </Animated.View>

        {highScore > 0 && (
          <View style={styles.highScoreIdle}>
            <Text style={styles.highScoreIdleLabel}>Mejor puntaje:</Text>
            <Text style={styles.highScoreIdleValue}>{highScore}</Text>
          </View>
        )}
      </View>
    );
  }

  function renderPlayingScreen() {
    const currentQuestion = getCurrentQuestion();
    if (!currentQuestion) return null;

    return (
      <View style={styles.playingContainer}>
        <View style={styles.gameBar}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
              Alert.alert(
                'Salir del juego',
                '¿Seguro que quieres salir? Se perderá el progreso.',
                [
                  { text: 'Cancelar', style: 'cancel' },
                  { text: 'Salir', onPress: () => setGameState('idle') },
                ]
              );
            }}
          >
            <Text style={styles.backArrow}>◄</Text>
          </TouchableOpacity>

          <Animated.View style={{ transform: [{ scale: scoreAnim }] }}>
            <Text style={styles.scoreText}>⭐ {score}</Text>
          </Animated.View>

          <View style={styles.livesContainer}>{renderLives()}</View>

          {streak > 0 && (
            <Animated.View style={{ transform: [{ scale: streakAnim }] }}>
              <Text style={styles.streakText}>🔥 {streak}</Text>
            </Animated.View>
          )}
        </View>

        {renderProgressBar()}

        <Animated.View
          style={[
            styles.questionArea,
            {
              opacity: fadeAnim,
              transform: [
                { translateY: slideAnim },
                { translateX: shakeAnim },
              ],
            },
          ]}
        >
          <View style={styles.questionCard}>
            <View style={styles.questionHeader}>
              <Text style={styles.questionNumber}>
                Pregunta {currentIndex + 1}
              </Text>
              <Text style={styles.questionDecor}>◆ ✦ ◆</Text>
            </View>

            <View style={styles.questionContent}>
              <Text style={styles.questionText}>{currentQuestion.question}</Text>
            </View>

            <View style={styles.questionDivider}>
              <Text style={styles.questionDividerText}>★ ◆ ★</Text>
            </View>
          </View>

          <View style={styles.optionsGrid}>
            {currentQuestion.options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.option, getOptionStyle(index)]}
                onPress={() => handleAnswer(index)}
                activeOpacity={selectedAnswer !== null ? 1 : 0.7}
                disabled={selectedAnswer !== null}
              >
                <View style={styles.optionLetterContainer}>
                  <Text style={[styles.optionLetter, getOptionTextStyle(index)]}>
                    {LETTERS[index]}
                  </Text>
                </View>
                <Text
                  style={[styles.optionText, getOptionTextStyle(index)]}
                  numberOfLines={3}
                >
                  {option}
                </Text>
                {showResult && index === getCurrentQuestion().correctIndex && (
                  <Text style={styles.resultIcon}>✓</Text>
                )}
                {showResult &&
                  index === selectedAnswer &&
                  index !== getCurrentQuestion().correctIndex && (
                    <Text style={styles.resultIconWrong}>✗</Text>
                  )}
              </TouchableOpacity>
            ))}
          </View>
        </Animated.View>
      </View>
    );
  }

  function renderGameOverScreen() {
    return (
      <View style={styles.gameOverContainer}>
        <Animated.View
          style={[
            styles.gameOverCard,
            {
              opacity: gameOverOpacity,
              transform: [{ scale: gameOverScale }],
            },
          ]}
        >
          <Text style={styles.gameOverCrescent}>☪</Text>
          <Text style={styles.gameOverTitle}>Fin del Juego</Text>
          <View style={styles.gameOverDecor}>
            <Text style={styles.gameOverDecorText}>◆ ✦ ★ ✦ ◆</Text>
          </View>

          {isNewRecord && (
            <View style={styles.newRecordBadge}>
              <Text style={styles.newRecordText}>🏆 ¡Nuevo Récord!</Text>
            </View>
          )}

          <View style={styles.gameOverStats}>
            <View style={styles.gameOverStatItem}>
              <Text style={styles.gameOverStatLabel}>Puntaje Final</Text>
              <Text style={styles.gameOverStatValue}>{score}</Text>
            </View>

            <View style={styles.gameOverStatDivider} />

            <View style={styles.gameOverStatItem}>
              <Text style={styles.gameOverStatLabel}>Correctas</Text>
              <Text style={styles.gameOverStatValue}>
                {correctCount}/{currentIndex + 1}
              </Text>
            </View>

            <View style={styles.gameOverStatDivider} />

            <View style={styles.gameOverStatItem}>
              <Text style={styles.gameOverStatLabel}>Mejor Puntaje</Text>
              <Text style={styles.gameOverStatValue}>{highScore}</Text>
            </View>
          </View>

          <View style={styles.gameOverDecor}>
            <Text style={styles.gameOverDecorText}>★ ◆ ★</Text>
          </View>

          <TouchableOpacity
            style={styles.playAgainButton}
            onPress={startGame}
            activeOpacity={0.7}
          >
            <Text style={styles.playAgainText}>Jugar de Nuevo</Text>
            <Text style={styles.playAgainIcon}>🔄</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => setGameState('idle')}
            activeOpacity={0.7}
          >
            <Text style={styles.menuButtonText}>Volver al Menú</Text>
            <Text style={styles.menuButtonIcon}>🏠</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  }

  if (gameState === 'idle') {
    return (
      <View style={styles.container}>
        {renderIdleScreen()}
      </View>
    );
  }

  if (gameState === 'playing') {
    return (
      <View style={styles.container}>
        {renderPlayingScreen()}
      </View>
    );
  }

  if (gameState === 'gameover') {
    return (
      <View style={styles.container}>
        {renderGameOverScreen()}
      </View>
    );
  }

  return null;
}

const OPTION_SIZE = (width - 64) / 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d1a',
  },

  /* ── IDLE SCREEN ── */
  idleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  idleContent: {
    alignItems: 'center',
    marginBottom: 40,
  },
  idleCrescent: {
    fontSize: 52,
    marginBottom: 12,
  },
  idleTitle: {
    color: '#D4AF37',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 6,
    letterSpacing: 1,
  },
  idleSubtitle: {
    color: '#F5E6CA',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 8,
    fontStyle: 'italic',
  },
  idleDecor: {
    marginTop: 12,
    marginBottom: 16,
  },
  idleDecorText: {
    color: '#D4AF37',
    fontSize: 16,
    letterSpacing: 6,
  },
  idleRules: {
    color: '#F5E6CA',
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 24,
    opacity: 0.8,
  },
  startButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#8B0000',
    borderRadius: 16,
    borderWidth: 3,
    borderColor: '#D4AF37',
    paddingVertical: 16,
    paddingHorizontal: 36,
    shadowColor: '#D4AF37',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  startButtonText: {
    color: '#D4AF37',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
  },
  startButtonIcon: {
    fontSize: 22,
  },
  highScoreIdle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    backgroundColor: '#1a1a2e',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D4AF37',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  highScoreIdleLabel: {
    color: '#F5E6CA',
    fontSize: 14,
    marginRight: 8,
    opacity: 0.8,
  },
  highScoreIdleValue: {
    color: '#D4AF37',
    fontSize: 18,
    fontWeight: 'bold',
  },

  /* ── PLAYING SCREEN ── */
  playingContainer: {
    flex: 1,
    paddingTop: 44,
  },
  gameBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#8B0000',
    borderBottomWidth: 2,
    borderBottomColor: '#D4AF37',
  },
  backButton: {
    padding: 8,
  },
  backArrow: {
    color: '#D4AF37',
    fontSize: 20,
    fontWeight: 'bold',
  },
  scoreText: {
    color: '#D4AF37',
    fontSize: 18,
    fontWeight: 'bold',
  },
  livesContainer: {
    flexDirection: 'row',
  },
  heart: {
    fontSize: 20,
    marginHorizontal: 2,
  },
  heartLost: {
    opacity: 0.3,
  },
  streakText: {
    color: '#FF6B35',
    fontSize: 16,
    fontWeight: 'bold',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: '#1a1a2e',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#D4AF37',
    overflow: 'hidden',
    marginRight: 10,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#D4AF37',
    borderRadius: 4,
  },
  progressText: {
    color: '#D4AF37',
    fontSize: 14,
    fontWeight: '600',
    minWidth: 40,
    textAlign: 'right',
  },
  questionArea: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  questionCard: {
    backgroundColor: '#1a1a2e',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#D4AF37',
    padding: 20,
    marginBottom: 16,
  },
  questionHeader: {
    alignItems: 'center',
    marginBottom: 12,
  },
  questionNumber: {
    color: '#D4AF37',
    fontSize: 13,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  questionDecor: {
    color: '#D4AF37',
    fontSize: 12,
    letterSpacing: 4,
    opacity: 0.5,
    marginTop: 4,
  },
  questionContent: {
    alignItems: 'center',
  },
  questionText: {
    color: '#F5E6CA',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 26,
  },
  questionDivider: {
    alignItems: 'center',
    marginTop: 12,
  },
  questionDividerText: {
    color: '#D4AF37',
    fontSize: 12,
    letterSpacing: 4,
    opacity: 0.4,
  },
  optionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  option: {
    width: OPTION_SIZE,
    minHeight: 100,
    borderRadius: 12,
    borderWidth: 2,
    padding: 12,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionDefault: {
    backgroundColor: '#16213e',
    borderColor: '#D4AF37',
  },
  optionCorrect: {
    backgroundColor: '#1a4a2a',
    borderColor: '#2ecc71',
  },
  optionWrong: {
    backgroundColor: '#4a1a1a',
    borderColor: '#e74c3c',
  },
  optionLetterContainer: {
    backgroundColor: '#D4AF37',
    borderRadius: 12,
    width: 26,
    height: 26,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  optionLetter: {
    color: '#0d0d1a',
    fontSize: 14,
    fontWeight: 'bold',
  },
  optionText: {
    color: '#F5E6CA',
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 18,
  },
  optionTextCorrect: {
    color: '#2ecc71',
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 18,
    fontWeight: '700',
  },
  optionTextWrong: {
    color: '#e74c3c',
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 18,
    fontWeight: '700',
  },
  resultIcon: {
    color: '#2ecc71',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 6,
  },
  resultIconWrong: {
    color: '#e74c3c',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 6,
  },

  /* ── GAME OVER SCREEN ── */
  gameOverContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  gameOverCard: {
    backgroundColor: '#1a1a2e',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#D4AF37',
    padding: 28,
    width: '100%',
    alignItems: 'center',
  },
  gameOverCrescent: {
    fontSize: 42,
    marginBottom: 8,
  },
  gameOverTitle: {
    color: '#D4AF37',
    fontSize: 28,
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  gameOverDecor: {
    marginVertical: 12,
  },
  gameOverDecorText: {
    color: '#D4AF37',
    fontSize: 14,
    letterSpacing: 6,
  },
  newRecordBadge: {
    backgroundColor: '#8B0000',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#D4AF37',
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginBottom: 16,
  },
  newRecordText: {
    color: '#D4AF37',
    fontSize: 18,
    fontWeight: 'bold',
  },
  gameOverStats: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 8,
  },
  gameOverStatItem: {
    alignItems: 'center',
    flex: 1,
  },
  gameOverStatLabel: {
    color: '#F5E6CA',
    fontSize: 12,
    opacity: 0.7,
    marginBottom: 4,
  },
  gameOverStatValue: {
    color: '#D4AF37',
    fontSize: 24,
    fontWeight: 'bold',
  },
  gameOverStatDivider: {
    width: 2,
    height: 40,
    backgroundColor: '#D4AF37',
    opacity: 0.3,
    marginHorizontal: 4,
  },
  playAgainButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#8B0000',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#D4AF37',
    paddingVertical: 14,
    paddingHorizontal: 28,
    marginTop: 20,
    marginBottom: 12,
    width: '100%',
    justifyContent: 'center',
  },
  playAgainText: {
    color: '#D4AF37',
    fontSize: 17,
    fontWeight: 'bold',
    marginRight: 8,
  },
  playAgainIcon: {
    fontSize: 18,
  },
  menuButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#16213e',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D4AF37',
    paddingVertical: 12,
    paddingHorizontal: 28,
    width: '100%',
    justifyContent: 'center',
  },
  menuButtonText: {
    color: '#F5E6CA',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 8,
  },
  menuButtonIcon: {
    fontSize: 16,
  },
});
