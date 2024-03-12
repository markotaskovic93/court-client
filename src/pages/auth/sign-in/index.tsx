import { ChangeEvent, useState } from "react";
import Button from "../../../components/ui/Button";
import { useAuth } from "../../../providers/auth-provider";
import { Credentials } from "./constants";
import { useLoginMutation } from "./signInApi";

const SignIn = () => {  
  const [credentials, setCredentials] = useState<Credentials>({
    username: null,
    password: null
  });
  const { onSignIn } = useAuth(); 

  const [
    login, 
    { 
      data: userData, 
      isLoading, 
      isError 
    }
  ] = useLoginMutation();
  
  if (userData) {
    onSignIn(userData);
  }

  if (isError) {} //TODO: Show toast error

  const handleLogin = () => {
    // const isDataValidated = false;
    // if (!isDataValidated) return;

    login(credentials);
  }

  const onCredentialsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials(prevCredentials => ({
      ...prevCredentials,
      [name]: value
    }));
  }

  return (
    <div>
      <input 
        type='text' 
        name='username' 
        onChange={onCredentialsChange} 
      />

      <input 
        type='password' 
        name='password' 
        onChange={onCredentialsChange} 
      />

      <Button
        onClick={handleLogin}
        disabled={isLoading}
      >
        Sing In
      </Button>
    </div>
  )
}

export default SignIn;
