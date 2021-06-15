import { useEffect, useState } from "react";
const useFetch = (url) => {
    const [items, setItems]=useState(null)
    const[Loading, setLoading]=useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
            .then(response=>{
                return response.json()
            })
            .then(data=>{
                setItems(data)
                setLoading(false)
            })
        }, 1000)
    },[url]);
    return {items, Loading};
}
 
export default useFetch;