document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('[data-js="new-card-form"]');
  const questionInput = document.querySelector("#your-question");
  const answerInput = document.querySelector("#your-answer");
  const tagInput = document.querySelector("#your-question-tag");
  const questionList = document.querySelector(".questions__list");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const questionContent = questionInput.value.trim();
    const answerText = answerInput.value.trim();
    const tagText = tagInput.value.trim();

    const card = document.createElement("li");
    card.classList.add("question");

    const questionText = document.createElement("p");
    questionText.classList.add("question__text");
    questionText.textContent = questionContent;

    const bookmarkButton = document.createElement("button");
    bookmarkButton.classList.add("question__bookmark");
    bookmarkButton.innerHTML = `<svg width="24" height="24" class="icon"><use xlink:href="#icon-bookmark"></use></svg>`;

    bookmarkButton.addEventListener("click", () => {
      bookmarkButton.classList.toggle("question__bookmark--active");
    });

    const showAnswerButton = document.createElement("button");
    showAnswerButton.classList.add("show-answer");
    showAnswerButton.textContent = "show answer";

    const answerHidden = document.createElement("p");
    answerHidden.classList.add("answer-hidden", "hidden");
    answerHidden.textContent = answerText;

    showAnswerButton.addEventListener("click", () => {
      answerHidden.classList.toggle("hidden");
      showAnswerButton.textContent = answerHidden.classList.contains("hidden")
        ? "show answer"
        : "hide answer";
    });

    const tags = document.createElement("div");
    tags.classList.add("tags");
    const tag = document.createElement("button");
    tag.classList.add("answer__option");
    tag.textContent = `#${tagText}`;
    tags.append(tag);

    card.appendChild(questionText);
    card.appendChild(bookmarkButton);
    card.appendChild(showAnswerButton);
    card.appendChild(answerHidden);
    card.appendChild(tags);

    questionList.appendChild(card);

    questionInput.value = "";
    answerInput.value = "";
    tagInput.value = "";
  });
});
