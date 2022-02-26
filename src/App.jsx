import { useEffect, useState } from "react";
import "./app.css";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";
import Start from "./components/Start";
import Navbar from "./components/Navbar";
import _ from "lodash";
import { Routes, Route, useNavigate } from "react-router-dom";

const moneyPyramid = [
  { id: 1, amount: "$ 100.000" },
  { id: 2, amount: "$ 200.000" },
  { id: 3, amount: "$ 300.000" },
  { id: 4, amount: "$ 400.000" },
  { id: 5, amount: "$ 500.000" },
  { id: 6, amount: "$ 600.000" },
  { id: 7, amount: "$ 700.000" },
  { id: 8, amount: "$ 800.000" },
  { id: 9, amount: "$ 900.000" },
  { id: 10, amount: "$ 1.000.000" },
].reverse();

function App() {
  const [username, setUsername] = useState(null);
  const [category, setCategory] = useState(null);
  const [difficulty, setDifficulty] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");
  const [data, setData] = useState([]);


  useEffect(() => {
    const getQuestionsAction = async () => {
      try {
        const response = await fetch(
          `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
        );
        if (response.status === 200) {
          const data = await response.json();

          if (data.results.length > 0) {
            const mappedResults = data.results.map((pregunta) => {
              const answers = _.shuffle([
                ...pregunta.incorrect_answers.map((text) => ({
                  text,
                  correct: false,
                })),
                { text: pregunta.correct_answer, correct: true },
              ]);

              return { answers, question: pregunta.question };
            });

            setData(mappedResults);
          }
        }
      } catch (error) {
        console.log("hay un error", error);
      }
    };

    getQuestionsAction();
  }, [category, difficulty]);

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber]);

  const navigate = useNavigate();

  return (
    <>
      <Navbar username={username} difficulty={difficulty} earned={earned} />
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <Start
                setUsername={(user) => {
                  setUsername(user);
                  navigate("/juego");
                }}
                setCategory={setCategory}
                setDifficulty={setDifficulty}
              />
            }
          />
          <Route
            path="/juego"
            element={
              <>
                <div className="main">
                  {stop ? (
                    <h1 className="endText">Usted ganó: {earned}</h1>
                  ) : (
                    <>
                      <div className="top">
                        <button
                          className="boton-salir"
                          onClick={() => {window.location.replace("/")}}
                        >
                          Salir
                        </button>
                        <div className="timer">
                          <Timer
                            setStop={setStop}
                            questionNumber={questionNumber}
                          />
                        </div>
                      </div>
                      <div className="bottom">
                        <Trivia
                          data={data}
                          setStop={setStop}
                          questionNumber={questionNumber}
                          setQuestionNumber={setQuestionNumber}
                        />
                      </div>
                    </>
                  )}
                </div>

                <div className="pyramid">
                  <ul className="moneyList">
                    {moneyPyramid.map((m) => (
                      <li
                        className={
                          questionNumber === m.id
                            ? "moneyListItem active"
                            : "moneyListItem"
                        }
                      >
                        <span className="moneyListItemNumber">{m.id}</span>
                        <span className="moneyListItemAmount">{m.amount}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
