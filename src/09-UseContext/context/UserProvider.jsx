import { useState } from "react";
import { UserContext } from "./UserContext";
// const user = {
//   id:1023,
//   name: 'Lucas F',
//   email:'lf@example.com'
// }

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    
  )
  return (
    <UserContext.Provider value={{user, setUser}}>
    {/* <UserContext.Provider value={{ hola: "mundi" , user:user}}> */}
      {children}
    </UserContext.Provider>
  );
};
