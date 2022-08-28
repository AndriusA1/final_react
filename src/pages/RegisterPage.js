import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const userRef = useRef();
  const passOneRef = useRef();
  const passTwoRef = useRef();
  const city = useRef();
  const gender = useRef();
  const yearsOld = useRef();

  const navigate = useNavigate();
  const dis = useDispatch();

  const [error, setError] = useState(null);

  function registerUser() {
    const user = {
      user: userRef.current.value,
      passOne: passOneRef.current.value,
      passTwo: passTwoRef.current.value,
      city: city.current.value,
      gender: gender.current.value,
      yearsOld: yearsOld.current.value
    };

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    };

    fetch('http://localhost:4001/createUser', requestOptions)
    .then((res) => res.json())
    .then((data) => {
       if (data.errors) {
        return setError(data.errors.join(", "));
       }

       navigate("/own");
    })
    .catch((err) => {
      return setError("Error. Please try again.");
    });
  }

  return (
    <div className="d-flex flex-column">
      {error && <h3>{error}</h3>}
      <div>
      <input className="input" ref={userRef} type="text" placeholder="username" />
      </div>
      
      <div>
      <input
        className="input"
        ref={passOneRef}
        type="password"
        placeholder="password one"
      />
      </div>

      <div>
      <input
        className="input"
        ref={passTwoRef}
        type="password"
        placeholder="password two"
      />
      </div>

      <div>
       <input
        className="input"
        ref={city}
        type="text"
        placeholder="city"
      />
      </div>

      <div>
       <input
        className="input"
        ref={gender}
        type="text"
        placeholder="gender"
      />
      </div>

      <div>
       <input
        className="input"
        ref={yearsOld}
        type="number"
        placeholder="years old"
      />
      </div>
      
      <button className="btnStyle" onClick={registerUser}>
        Register
      </button>
    </div>
  );
};

export default RegisterPage;
