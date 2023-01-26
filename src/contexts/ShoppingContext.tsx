import { createContext, useState } from "react";
import { Props } from "./UserContext";

interface ShpoppingContextProps {
    items: Array<string>
    setItems(item: string): void
}

const ShoppingContext = createContext<ShpoppingContextProps>({
    items: Array<string>(),
    setItems: () => {}
});

export const ShoppingProvider: React.FC<Props> = ({children}) => {
    const [items, setItems] = useState(Array<string>())

    function updateItems(item: string) {
        
        setItems([...items, item])
    }

    return (
        <ShoppingContext.Provider 
        value={{
            items: items,
            setItems: updateItems
        }}>
            {children}
        </ShoppingContext.Provider>
    )
}

export default ShoppingContext