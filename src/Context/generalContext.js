import React, {createContext, useState} from "react";

export const GeneralContext = createContext();

const GeneralConstextProvider = props =>{
    const [ allProduct, setAllProduct ] = useState([]);

    const [ renderProduct, setRenderProduct] = useState( 0 )

    return(
        <GeneralContext.Provider value={{allProduct, setAllProduct, renderProduct, setRenderProduct}}>
            {props.children}
        </GeneralContext.Provider>
    )
};

export default GeneralConstextProvider;