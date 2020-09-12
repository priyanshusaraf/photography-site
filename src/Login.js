import React from "react";
import { auth } from "./firebase";
function Login() {
  const history = useHistory();
  const login = (event) => {
    //stoping the refesh
    event.preventDefault();
    //do the login logic here
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in successfully, redirect ...
        history.push("/");
      })
      .catch((e) => {
        alert(e.message);
      });
  };
  const register = (event) => {
    //stoping the refesh
    event.preventDefault();
    //do the register logic here
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //created user and logged in, redirect to home page
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  return <div></div>;
}

export default Login;
