import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const OPTION_SIZE = (width - 64) / 2;

export default function TriviaCard({
  question,
  options,
  onAnswer,
  selectedAnswer,
  correctAnswer,
  showResult,
}) {
  function getOptionStyle(index) {
    if (!showResult && selectedAnswer === null) {
      return styles.optionDefault;
    }
    if (showResult) {
      if (index === correctAnswer) {
        return styles.optionCorrect;
      }
      if (index === selectedAnswer && index !== correctAnswer) {
        return styles.optionWrong;
      }
      return styles.optionDefault;
    }
    if (index === selectedAnswer) {
      return styles.optionSelected;
    }
    return styles.optionDefault;
  }

  function getOptionTextStyle(index) {
    if (showResult) {
      if (index === correctAnswer) {
        return styles.optionTextCorrect;
      }
      if (index === selectedAnswer && index !== correctAnswer) {
        return styles.optionTextWrong;
      }
    }
    if (!showResult && index === selectedAnswer) {
      return styles.optionTextSelected;
    }
    return styles.optionText;
  }

  function getLetterPrefix(index) {
    const letters = ['A', 'B', 'C', 'D'];
    return letters[index] + '.';
  }

  const disabled = selectedAnswer !== null;

  return (
    <View style={styles.card}>
      <View style={styles.questionContainer}>
        <Text style={styles.questionMark}>?</Text>
        <Text style={styles.question}>{question}</Text>
      </View>

      <View style={styles.grid}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.option, getOptionStyle(index)]}
            onPress={() => !disabled && onAnswer(index)}
            activeOpacity={disabled ? 1 : 0.7}
            disabled={disabled}
          >
            <Text style={[styles.optionLetter, getOptionTextStyle(index)]}>
              {getLetterPrefix(index)}
            </Text>
            <Text style={[styles.optionLabel, getOptionTextStyle(index)]} numberOfLines={3}>
              {option}
            </Text>
            {showResult && index === correctAnswer && (
              <Text style={styles.resultIcon}>✓</Text>
            )}
            {showResult && index === selectedAnswer && index !== correctAnswer && (
              <Text style={styles.resultIconWrong}>✗</Text>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1a1a2e',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#D4AF37',
    padding: 20,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 8,
  },
  questionContainer: {
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#D4AF37',
  },
  questionMark: {
    color: '#D4AF37',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  question: {
    color: '#EAEAEA',
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 24,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  option: {
    width: OPTION_SIZE,
    minHeight: 90,
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
  optionSelected: {
    backgroundColor: '#3a3a5c',
    borderColor: '#E8C97A',
  },
  optionCorrect: {
    backgroundColor: '#1a4a2a',
    borderColor: '#2ecc71',
  },
  optionWrong: {
    backgroundColor: '#4a1a1a',
    borderColor: '#e74c3c',
  },
  optionLetter: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  optionText: {
    color: '#EAEAEA',
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 18,
  },
  optionTextSelected: {
    color: '#FFF',
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 18,
    fontWeight: '600',
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
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 4,
  },
  resultIconWrong: {
    color: '#e74c3c',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 4,
  },
});
