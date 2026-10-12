import { useCallback, useState } from "react";

import questions from "../questions";
import Question from "./Question";
import Summary from "./Summary";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionInd = userAnswers.length;

  const quizCompleted = activeQuestionInd === questions.length;

  const handleClickAnswer = useCallback((selectedAnswer) => {
    setUserAnswers((preval) => [...preval, selectedAnswer]);
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleClickAnswer(null),
    [handleClickAnswer],
  );

  if (quizCompleted) {
    return <Summary userAnswers={userAnswers}/>;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionInd}
        index={activeQuestionInd}
        onSkipAnswer={handleSkipAnswer}
        onClickAnswer={handleClickAnswer}
      />
    </div>
  );
}
