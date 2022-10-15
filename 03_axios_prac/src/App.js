import React, { useEffect, useState } from "react";
import axios from "axios"; //axios import하기

const App = () => {
  //새롭게 생성하는 todo를 관리하는 state
  const [todo, setTodo] = useState({
    title: "",
  });

  const [todos, setTodos] = useState(null);

  //axios를 통해서 get 요청을 하는 함수를 생성해.
  //비동기처리를 해야하니까 async/await 구문을 통해 처리해.
  const fetchTodos = async () => {
    const { data } = await axios.get("http://localhost:3001/todos");
    setTodos(data); // 서버로부터 fetching한 데이터를 useState의 state로 set해.
  };

  const onSubmitHandler = (todo) => {
    axios.post("http://localhost:3001/todos", todo);
  };
  //새롭게 추가한 삭제 버튼 이벤트 핸들러
  const onClickDeleteButtonHandler = (todoId) => {
    axios.delete(`http://localhost:3001/todos/${todoId}`);
  };
  //생성한 함수를 컴포넌트가 mount됐을 때 실행하기 위해 useEffect를 사용해.
  useEffect(() => {
    fetchTodos();
  }, []);
  //data fetching 이 정상적으로 되었는지 콘솔을 통해 확인해.
  console.log(todos);
  return (
    <>
      <form
        onSubmit={(e) => {
          //submit했을 때 브라우저의 새로고침 방지해.
          e.preventDefault();
          onSubmitHandler(todo);
        }}
      >
        <input
          type="text"
          onChange={(e) => {
            const { value } = e.target;
            setTodo({
              ...todo,
              title: value,
            });
          }}
        />
        <button>추가하기</button>
      </form>
      <div>
        {todos?.map((todo) => (
          <div key={todo.id}>
            {todo.title}
            {/* 디자인이 요상하기 하지만, 삭제버튼추가 */}
            <button
              type="button"
              onClick={() => onClickDeleteButtonHandler(todo.id)}
            >
              삭제하기
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
export default App;
