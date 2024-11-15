document.addEventListener("DOMContentLoaded", () => {
  const bookmarkButton = document.querySelector(
    '[data-js="question-bookmark"]'
  );

  bookmarkButton.addEventListener("click", () => {
    bookmarkButton.classList.toggle("question__bookmark--active");
  });

  const showAnswerButton = document.querySelector(
    '[data-js="show-answer-button"]'
  );
  const answerText = document.querySelector('[data-js="answer-hidden-text"]');

  showAnswerButton.addEventListener("click", () => {
    answerText.classList.toggle("hidden");
    showAnswerButton.textContent = answerText.classList.contains("hidden")
      ? "show answer"
      : "hide answer";
  });
});
