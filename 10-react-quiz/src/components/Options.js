import { useQuiz } from "../contexts/QuizContext";

function Options() {
  const { questions, dispatch, answer, index } = useQuiz();
  const question = questions.at(index)

  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button className={`btn btn-option ${index === answer ? "answer" : ""}  ${hasAnswered ? (index === question.correctOption ? "correct" : "wrong") : ""}`} key={option} disabled={answer !== null} onClick={() => dispatch({ type: "newAnswer", payload: index })}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
