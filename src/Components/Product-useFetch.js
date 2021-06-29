import { useEffect, useState } from "react";
const useFetch = (url) => {
    const [items, setItems]=useState(null)
    const[Loading, setLoading]=useState(true)
    useEffect(()=>{
        const abortCon = new AbortController();
        setTimeout(()=>{
            fetch(url)
            .then(response=>{
                if(!response.ok){
                    throw Error("Couldn't Fetch Data")
                }
                return response.json()
            })
            .then(data=>{
                setItems(data)
                setLoading(false)
            }).catch(err=>{
                if(err.name === "AbortError"){
                    console.log("Fetch Aborted")
                }

                setLoading(false)
            })
        }, 1000)
        return ()=> abortCon.abort();
    },[url]);
    return {items, Loading};
}
 
export default useFetch;