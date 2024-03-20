import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser, updateUser } from "./reducers/UserReducer.jsx";

function App() {
  const {users} = useSelector((state) => state.UserReducer);
  console.log(users);

  return (
    <>
    <div className="flex justify-center items-center gap-[10vw] bg-orange-300">
      <h1 className="flex justify-center items-center h-11 w-32 m-5 rounded-lg">id</h1>
      <h1 className="flex justify-center items-center h-11 w-32 m-5 rounded-lg">Name</h1>
      <h1 className="flex justify-center items-center h-11 w-32 m-5 rounded-lg">Username</h1>
      <h1 className="flex justify-center items-center h-11 w-52 m-5 rounded-lg">Email</h1>
      <h1 className="flex justify-center items-center h-11 w-32 m-5 rounded-lg">Action</h1>
    </div>
      {users.map((value, idx) => {
        return <div key={value.id} className="flex justify-center items-center gap-[10vw]">
          <h1 className="bg-blue-200 flex justify-center items-center h-11 w-32 m-5 rounded-lg">{value.id}</h1>
          <h1 className="bg-blue-200 flex justify-center items-center h-11 w-32 m-5 rounded-lg">{value.name}</h1>
          <h1 className="bg-blue-200 flex justify-center items-center h-11 w-32 m-5 rounded-lg">{value.username}</h1>
          <h2 className="bg-blue-200 flex justify-center items-center h-11 w-52 m-5 rounded-lg">{value.email}</h2>
          <button className="bg-red-200 flex justify-center items-center h-11 w-32 m-5 rounded-lg">Remove</button>
        </div>
      })}
    </>
  );
}

export default App;
