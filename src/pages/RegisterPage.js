import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../features/user";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const userRef = useRef();
  const passOneRef = useRef();
  const passTwoRef = useRef();
  const city = useRef();
  const gender = useRef();
  const yearsOld = useRef();

  const nav = useNavigate();
  const dis = useDispatch();

  const [error, setError] = useState(null);

  const validateUser = (user) => {
    return String(user).toLowerCase();
  };

  function registerUser() {
    let invalid = false;

    const user = {
      user: userRef.current.value,
      passOne: passOneRef.current.value,
      passTwo: passTwoRef.current.value,
    };

    if (!validateUser(user.user)) invalid = "incorrect user entered";
    if (user.passOne.length < 5 || user.passOne.length > 20)
      invalid = "incorrect password entered";
    if (user.passOne !== user.passTwo) invalid = "both passwords should match";

    if (invalid) return setError(invalid);

    dis(addUser(user));
    nav("/");
  }

  return (
    <div className="d-flex flex-column">
      <input className="input" ref={userRef} type="text" placeholder="username" />

      <input
        className="input"
        ref={passOneRef}
        type="text"
        placeholder="password one"
      />
      <input
        className="input"
        ref={passTwoRef}
        type="text"
        placeholder="password two"
      />
       <input
        className="input"
        ref={city}
        type="text"
        placeholder="city"
      />
       <input
        className="input"
        ref={gender}
        type="text"
        placeholder="gender"
      />
       <input
        className="input"
        ref={yearsOld}
        type="text"
        placeholder="years old"
      />
      

      {error && <h3>{error}</h3>}
      <button className="btnStyle" onClick={registerUser}>
        Register
      </button>
    </div>
  );
};

export default RegisterPage;
