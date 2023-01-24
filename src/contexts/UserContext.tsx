import { createContext, useState } from "react";

interface ContextProps {
    name: string;
    setUsername(user: string): void;
}
const Context = createContext<ContextProps>({
    name: " ",
    setUsername: () => {},
});


interface Props {
     children?: React.ReactNode;
}

export const Provider: React.FC<Props> = ({ children }) => {
    const [user, setUser] = useState<string>("");
    const setUserName = (name: string) => {
        setUser(name)
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