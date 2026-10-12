import { useRef } from "react";

export default function Answers({
  shuffledAnswer,
  onCLickAnswer,
  selectedAnswer,
  answerState,
}) {
  const answersShuffled = useRef();

  if (!answersShuffled.current) {
    answersShuffled.current = [...shuffledAnswer];
    answersShuffled.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {answersShuffled.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = "";

        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState;
        }

        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onCLickAnswer(answer)}
              className={cssClass}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
