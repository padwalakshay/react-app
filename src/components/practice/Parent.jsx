import { useState } from "react"
import { createContext } from "react";
import Child from './Child';
import Child2 from './Child2'
export const context = createContext();
function Parent () {
    const [data, setData] = useState('');
    const [tab, setTab] = useState(false);
    // const value = 
    return (
        <>
        <div className="container">
            <context.Provider>
            {tab ? <Child/> : <Child2/>}
            </context.Provider>
        </div>
        </>
    )
}

export default Parent;