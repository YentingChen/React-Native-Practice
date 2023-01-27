import { createContext, useState } from "react";
import { Props } from "../../SignIn/contexts/UserContext";

interface ShpoppingContextProps {
    items: Array<ShoppingItem>
    setItems(item: ShoppingItem): void
}

type ShoppingItem = {
    name: string,
    quantity: string
}

const ShoppingContext = createContext<ShpoppingContextProps>({
    items: Array<ShoppingItem>(),
    setItems: () => {}
});

export const ShoppingProvider: React.FC<Props> = ({children}) => {
    const [items, setItems] = useState(Array<ShoppingItem>())

    function updateItems(item: ShoppingItem) {
        
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