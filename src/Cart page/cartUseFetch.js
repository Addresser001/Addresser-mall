import { useEffect, useState } from "react";
const useFetch = (url) => {
    const[products, setProducts]=useState([])
    const[Loading, setLoading]=useState(true)
    
    useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
            .then(response=>{
                return response.json()
            })
            .then(data=>{
                setProducts(data)
                setLoading(false)
            })
        }, 1000)
    },[url]);
    return {products, Loading};
}
 
export default useFetch;