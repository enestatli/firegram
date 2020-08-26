import React, { Component, createContext } from "react";
import { generateUserDocument, auth } from "../firebase/config";

export const UserContext = createContext({ user: null });

class UserProvider extends Component {
  state = {
    user: null,
  };

  componentDidMount = async () => {
    auth.onAuthStateChanged(async (userAuth) => {
      const user = await generateUserDocument(userAuth);
      this.setState({ user });
    });
  };

  render() {
    const { user } = this.state;

    return (
      <UserContext.Provider value={user}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;

// import React, { useState, useEffect, createContext } from "react";
// import { generateUserDocument, auth } from "../firebase/config";

// export const UserContext = createContext({ user: null });

// const UserProvider = ({ children }) => {
//   const [user, setuser] = useState(null);

//   useEffect(() => {
//     auth.onAuthStateChanged(async (userAuth) => {
//       const user = await generateUserDocument(userAuth);
//       setuser({ user });
//       console.log(user);
//     });
//   }, []);

//   return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
// };

// export default UserProvider;
