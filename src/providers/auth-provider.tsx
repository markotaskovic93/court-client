import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import localStorageService from "../services/storage/local-storage";

type UserType = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  token: string;
}

type CredsType = {
  username: string;
  password: string;
}

type AuthContextType = {
  user: UserType | undefined;
  isAuthenticated: boolean;
  onSignIn: (creds: CredsType) => void;
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
  const [user, setUser] = useState<UserType | undefined>(undefined);
  const [isAuthenticated, setAuthenticationStatus] = useState<boolean>(false);

  useEffect(() => {
    if (user) {
      setAuthenticationStatus(!isAuthenticated);
      localStorageService.setItem('access_token', user.token);
    }
  }, [user]);

  const onSignIn = async (creds: CredsType) => {
    console.log(creds);
    //setUser(); //TODO: Here we'll set user data from API
  };

  const onSignOut = () => {
    setUser(undefined);
    setAuthenticationStatus(!isAuthenticated);
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
