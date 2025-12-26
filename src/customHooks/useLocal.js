import { useEffect,useState } from "react";

function useLocalStorage(key,initialValue){
    const[value,setValue]=useState(()=>{
        const localState=localStorage.getItem(key);
        return localState ? JSON.parse(localState):initialValue;
    });
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value));
    },[value]);
    return[value,setValue];
}

export {useLocalStorage}