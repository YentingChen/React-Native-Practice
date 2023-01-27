import { createContext, useState } from "react";

interface ContextProps {
    name: User | null;
    setUsername(user: User | null): void;
}
const Context = createContext<ContextProps>({
    name: null,
    setUsername: () => {},
});

export type User = {
    name: string, 
    id: string
}

export interface Props {
     children?: React.ReactNode;
}

export const Provider: React.FC<Props> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const setUserName = (user: User | null) => {
        setUser(user)
    }
    
    return (
      <Context.Provider
        value={{
          name: user,
          setUsername: setUserName,
        }}
      >
      {children}
    </Context.Provider>
   );
  };
  
export default Context;

//reference: https://javascript.plainenglish.io/using-typescript-in-react-context-3912472b933