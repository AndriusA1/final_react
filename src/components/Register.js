import React from "react";
import { useRef } from "react";

const Register = () => {
  const emailRef = useRef();
  const pass1Ref = useRef();
  const pass2Ref = useRef();
  function auth() {
    const user = {
      email: emailRef.current.value,
      pass1: pass1Ref.current.value,
      pass2: pass2Ref.current.value,
    };

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    };
    fetch("http://localhost:4001/sendInfo", options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <div>
      <input ref={emailRef} type="text" placeholder="email"></input>
      <input ref={pass1Ref} type="text" placeholder="pass 1"></input>
      <input ref={pass2Ref} type="text" placeholder="pass 2"></input>
      <button onClick={auth}>register</button>
    </div>
  );
};

export default Register;
