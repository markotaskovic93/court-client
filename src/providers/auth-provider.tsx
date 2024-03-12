import { createContext, PropsWithChildren, useContext, useState } from "react";
import localStorageService from "../services/storage/local-storage";

export type UserType = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  token: string;
}

type AuthContextType = {
  user: UserType | null;
  isAuthenticated: boolean;
  onSignIn: (user: UserType) => void;
  onSignOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [isAuthenticated, setAuthenticationStatus] = useState<boolean>(false);

  const onSignIn = (user: UserType) => {
    setUser(user);
    setAuthenticationStatus(!isAuthenticated);
    localStorageService.setItem('access_token', user.token);
  };

  const onSignOut = () => {
    setUser(null);
    setAuthenticationStatus(!isAuthenticated);
    localStorageService.setItem('access_token', null);
  }

  const value: AuthContextType = {
    user,
    isAuthenticated,
    onSignIn,
    onSignOut
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
