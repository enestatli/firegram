// import React, { useContext } from "react";
// import { Router } from "@reach/router";
// import SignIn from "./SignIn";
// import SignUp from "./SignUp";
// import ProfilePage from "./ProfilePage";
// import { UserContext } from "../providers/UserProvider";
// import PasswordReset from "./PasswordReset";

// function Application() {
//   const user = useContext(UserContext);
//   return user ? (
//     <ProfilePage />
//   ) : (
//     <Router>
//       <SignUp path="signUp" />
//       <SignIn path="/" />
//       <PasswordReset path="passwordReset" />
//     </Router>
//   );
// }

// export default Application;

import React, { useContext } from "react";
import { Router } from "@reach/router";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";
import { UserContext } from "../providers/UserProvider";
import PasswordReset from "./PasswordReset";

const Application = () => {
  const user = useContext(UserContext);
  console.log(user);

  return user ? (
    <ProfilePage />
  ) : (
    <Router>
      <SignUp path="signUp" />
      <SignIn path="/" />
      <PasswordReset path="passwordReset" />
    </Router>
  );
};

export default Application;
