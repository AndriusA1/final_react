import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../features/user";

const LoginPage = () => {
  const userRef = useRef();
  const passRef = useRef();

  const nav = useNavigate();
  const dis = useDispatch();

  const allUsers = useSelector((state) => state.user.value.allUsers);
  const [error, setError] = useState(null);

  function loginUser() {
    const user = {
      email: userRef.current.value,
      password: passRef.current.value,
    };

    const userLoggedIn = allUsers.find(
      (x) => x.user === user.user && x.password === user.password
    );
    if (!userLoggedIn) return setError("incorrect, please try again");

    dis(setCurrentUser(userLoggedIn));

    nav("/profile");
  }

  return (
    <div className="d-flex flex-column">
      <input className="input" ref={userRef} type="text" placeholder="user" />
      <input
        className="input"
        ref={passRef}
        type="text"
        placeholder="password"
      />
      {error && <h3>{error}</h3>}
      <button className="btnStyle" onClick={loginUser}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;
