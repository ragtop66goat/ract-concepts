import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: "1",
    firstName: "Jason",
    lastName: "Gionfriddo",
  });

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserContext;
