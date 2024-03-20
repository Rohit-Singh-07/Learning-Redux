import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./reducers/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div className="w-screen bg-orange-300 flex justify-center h-32 items-center text-4xl">
        <h1>Counter: {count}</h1>
      </div>
      <br />
      <div className="w-screen text-2xl font-semibold flex justify-evenly">
        <button className="h-11 w-28 bg-slate-200 rounded-full" onClick={() => dispatch(increment())}>+1</button>
        <button className="h-11 w-28 bg-slate-200 rounded-full" onClick={() => dispatch(decrement())}>-1</button>
        <button className="h-11 w-28 bg-slate-200 rounded-full" onClick={() => dispatch(incrementByAmount(5))}>+5</button>
      </div>
    </>
  );
}

export default App;
