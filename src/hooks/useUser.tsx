import React, { useState, createContext } from "react";
import { User, UserContextType, UserProviderProps } from "../@types/User";

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>();
  const signIn = () => {
    setUser({
      uid: "second-user",
      name: "First added user",
      email: "cld.rojasz@gmail.com", // TODO: has to be unique and valid
      password: "123456", // TODO: more than 8 characters
    });
  };
  const signOut = () => {
    setUser(undefined);
  };

  return (
    <UserContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
