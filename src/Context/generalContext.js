import React, {createContext, useState} from "react";

export const GeneralContext = createContext();

const GeneralConstextProvider = props =>{
    const [ allProduct, setAllProduct ] = useState([ ]);

    return(
        <GeneralContext.Provider value={{allProduct, setAllProduct}}>
            {props.children}
        </GeneralContext.Provider>
    )
};

export default GeneralConstextProvider;