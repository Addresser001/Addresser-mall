import React, {Component,createContext} from 'react';

export const LengthContext =createContext();
class LengthContextProvider extends Component {
    state = { 
        theLength:0,  
    }
   
     toggleLength=()=>{
         this.setState({ theLength:this.state.theLength+1 })
     }

     
    
    render() { 
        return (  
            <LengthContext.Provider value={{...this.state, toggleLength:this.toggleLength}}>
                {this.props.children}
            </LengthContext.Provider>
        );
    }
}
 
export default LengthContextProvider;