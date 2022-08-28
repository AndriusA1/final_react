import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import FilterPage from "./pages/FilterPage"
import OwnProfilePage from "./pages/OwnProfilePage";
import LikesDislikesPage from "./pages/LikesDislikesPage";
import HistoryLikesDislikesPage from "./pages/HistoryLikesDislikes";


import Toolbar from "./components/Toolbar";
import { useRef, useState, useEffect } from "react";
import "./App.css";

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
      <Toolbar />

        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/filter" element={<FilterPage />} />
          <Route path="/own" element={<OwnProfilePage />} />
          <Route path="/like" element={<LikesDislikesPage />} />
          <Route path="/history" element={<HistoryLikesDislikesPage />} />
          
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
// import "./App.css";
// import { useRef } from "react";

// function App() {
//   const photoRef = useRef();
//   const titleRef = useRef();
//   const userNameRef = useRef();
//   const locationRef = useRef();
//   const yearsOldRef = useRef();
//   function auth() {
//     const user = {
//       photo: photoRef.current.value,
//       title: titleRef.current.value,
//       username: userNameRef.current.value,
//       location: locationRef.current.value,
//       yearsOld: yearsOldRef.current.value,
//     };

//     const options = {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(user),
//     };
//     fetch("http://localhost:4001/sendInfo", options)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       });
//   }

//   return (
//     <div className="App ">
//       <input ref={photoRef} type="text" placeholder="photo"></input>
//       <input ref={titleRef} type="text" placeholder="title"></input>
//       <input ref={userNameRef} type="text" placeholder="username"></input>
//       <input ref={locationRef} type="text" placeholder="location"></input>
//       <input ref={yearsOldRef} type="text" placeholder="years old"></input>
//       <button onClick={auth}>add item</button>
//     </div>
//   );
// }
// export default App;
