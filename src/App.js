import {useEffect, useReducer} from "react";
import LoadingScreen from "./components/LoadingScreen";
import StartScreen from "./components/StartScreen";
import ErrorScreen from "./components/ErrorScreen";
import FinishedScreen from "./components/FinishedScreen";
import Main from "./components/Main";
import ActiveScreen from "./components/ActiveScreen";

const initialState = {
  question: [],

  //loading , error , ready, active , finished
  status: "loading",
  currentQuestion: 0,
  answer: null,
  points: 0,
};

//reducer function
const reducer = (state, action) => {
  const {type, payload} = action;

  switch (type) {
    case "dataReceived":
      return {
        ...state,
        question: payload,
        status: "ready",
      };

    case "dataFailed":
      return {
        ...state,
        status: "error",
      };

    case "start":
      return {
        ...state,
        status: "active",
      };

    case "answer":
      const isCorrectAnswer = state.question[state.currentQuestion];
      // console.log(isCorrectAnswer);
      return {
        ...state,
        answer: payload,
        points:
          isCorrectAnswer.correctOption === payload
            ? state.points + isCorrectAnswer.points
            : state.points,
      };

    case "nextQuestion":
      return {
        ...state,
        currentQuestion: state.currentQuestion++,
        answer: null,
      };

    case "finish":
      return {
        ...state,
        status: "finished",
      };

      case "reStart": 
      return{
        ...initialState,
        question : state.question,
        status : "ready"
      } 
    default:
      throw new Error("Unknown action");
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {status, question, currentQuestion, answer, points} = state;

  const numQuestions = question?.length;
  const maxPoints = question.reduce((prev, acc) => prev + acc.points, 0);

  //fetching data
  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({type: "dataReceived", payload: data}))
      .catch((error) => dispatch({type: "dataFailed"}));
  }, []);

  return (
    <>
      <Main>
        {status === "loading" && <LoadingScreen />}
        {status === "error" && <ErrorScreen />}
        {status === "ready" && <StartScreen dispatch={dispatch} />}
        {status === "active" && (
          <ActiveScreen
            answer={answer}
            dispatch={dispatch}
            questions={question[currentQuestion]}
            numQuestions={numQuestions}
            currentQuestion={currentQuestion}
            points={points}
            maxPoints={maxPoints}
          />
        )}
        {status === "finished" && (
          <FinishedScreen points={points} maxPoints={maxPoints} dispatch={dispatch} />
        )}
      </Main>
    </>
  );
}

export default App;
