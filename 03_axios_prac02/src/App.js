import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [todo, setTodo] = useState(null);
  const [todos, setTodos] = useState({
    title: "",
  });

  //patch 에서 사용할 id, 수정값의 state를 추가
  const [targetId, setTargetId] = useState(null);
  const [editTodo, setEditTodo] = useState({
    title: "",
  });
  const fetchTodos = async () => {
    const { data } = await axios.get("http://localhost:3001/todos");
    setTodos(data);
  };
  const onSubmitHandler = (todo) => {
    axios.post("http://localhost:3001/todos", todo);
  };
  const onClickDeleteButtonHandler = (todoId) => {
    axios.delete(`http://localhost:3001/todos/${todoId}`);
  };

  //수정버튼 이벤트 핸들러 추가
  const onClickEditButtonHandler = (todoId, edit) => {
    axios.patch(`http://localhost:3001/todos/${todoId}`, edit);
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitHandler(todo);
        }}
      >
        {/* 수정기능에 필요한 id, 수정값 input 2개와 수정하기 버튼을 추가 */}
        <div>
          <input
            type="text"
            placeholder="수정하고싶은 Todo ID"
            onChange={(e) => {
              setTargetId(ev.target.value);
            }}
          />
          <input
            type="text"
            placeholder="수정값 입력"
            onChange={(e) => {
              setEditTodo({
                ...editTodo,
                title: ev.target.value,
              });
            }}
          />
          <button
            //type=button'을 추가해야 form의 영향에서 벗어나.
            type="button"
            onClick={() => onClickEditButtonHandler(targetId, edit)}
          >
            수정하기
          </button>
        </div>
      </form>
    </>
  );
};
