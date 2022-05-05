import { useEffect, useState } from "react";

const useServices =()=>{
    const[services,setServices] = useState([]);
    useEffect(()=>{
        fetch('https://immense-sea-82529.herokuapp.com')
            .then(response => response.json())
            .then(data => setServices(data))
    }, []);
    return[services,setServices]
   
}
export default useServices;
