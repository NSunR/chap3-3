//src/redux/modules/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addNumber: (state, action) => {
      state.number = state.number + action.payload;
    },

    minusNumber: (state, action) => {
      state.number = state.number = action.payload;
    },
  },
});
//액션 크리에이터는 컴포넌트에서 사용하기 위해 export하고
export const { addNumber, minusNumber } = counterSlice.actions;
//reducer는 configStore에 등록하기 위해 export default해
export default counterSlice.reducer;

// //src/redux/modules/counterSlice.js
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   number: 0,
// };

// const counterSlice = createSlice({
//   name: "counter",
//   initialState,
//   reducers: {
//     addNumber: (state, action) => {
//       state.number = state.number + action.payload;
//     },
//     minusNumber: (state, action) => {
//       state.number = state.number - action.payload;
//     },
//   },
// });

// //액션크리에이터는 컴포넌트에서 사용하기 위해 export하고
// export const { addNumber, minusNumber } = counterSlice.actions;
// //reducer는 configStore에 등록하기 위해 export default 해.
// export default counterSlice.reducer;
