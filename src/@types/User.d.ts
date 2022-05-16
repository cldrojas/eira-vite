export interface User {
  uid: string;
  name: string;
  email: string;
  password: string;
}

export interface UserProviderProps {
  children: React.ReactNode;
}

export type UserContextType = {
  user: User | undefined;
  signIn: (user: User) => void;
  signOut: () => void;
};
