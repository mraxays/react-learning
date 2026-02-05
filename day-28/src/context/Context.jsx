import { createContext, useState } from "react";

export const UserContext = createContext();

const Context = (props) => {
  // console.log(props);
  const [user, setUser] = useState([
    {
      id: 1,
      name: "Axay",
      email: "akshay@axay.com",
    },
    {
      id: 2,
      name: "John Doe",
      email: "john@doe.com",
    },
    {
      id: 3,
      name: "Manu Doe",
      email: "monu@doe.com",
    },
  ]);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default Context;
