import "./App.css";
import { useSelector } from "react-redux";

const App = () => {
  //Store에 있는 todos 모듈 state 조회하기
  const todos = useSelector((state) => state.todos);

  //Store에 있는 counter 모듈 state 조회하기
  const counter = useSelector((state) => state.counter);

  return <div>App</div>;
};

export default App;
