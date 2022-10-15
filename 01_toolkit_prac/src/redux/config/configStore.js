//src/redux/modules/config/configStore.js

import { configureStore } from "@reduxjs/toolkit";

/* import 해온 것은 slice.reducer */
import counter from "../modules/counterSlice";
import todos from "../modules/todosSlice";

/* 모듈(slice)이 여러개인 경우
추가할 때마다 reducer 안에 각 모듈의 slice.reducer를 추가해줘야 해.

아래 예시는 하나의 프로젝트 안에서 counter 기능과 todos기능이 모두 있고,
이것을 각각 모듈로 구현한 다음에 아래 코드로 2개의 모듈을 스토어에 연결해준 것.
*/
const store = configureStore({
  reducer: { counter: counter, todos: todos },
});

export default store;

// class Animal {
//     constructor(name) {
//         this.name = name;

//     changeMyn=N

//     }
// }

// const dog = new Animal("heasung")

// arr.
