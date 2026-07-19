export function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function shuffleQuestionAnswers(question) {
  const { options, correctIndex } = question;
  const paired = options.map((opt, idx) => ({ option: opt, wasCorrect: idx === correctIndex }));
  const shuffledPaired = shuffleArray(paired);
  const newOptions = shuffledPaired.map((p) => p.option);
  const newCorrectIndex = shuffledPaired.findIndex((p) => p.wasCorrect);
  return {
    question: question.question,
    options: newOptions,
    correctIndex: newCorrectIndex,
  };
}
