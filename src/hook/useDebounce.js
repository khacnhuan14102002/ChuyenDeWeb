import {useMutation} from "react-query";

import {useEffect, useState} from "react";
export const useMutationHooks = (fnCallback) => {
    const mutation = useMutation({
        mutation: fnCallback,
    })
    return mutation;
}

export const useDebounce = (value,delay) =>{
    const  [valueDebounce, setValueDebounce] = useState('')
    useEffect(() => {
        const  handle = setTimeout(()=>{
         setValueDebounce(value)
        },[delay]
        )
        return () => {
            clearTimeout(handle)
        }
    }, [value]);
    return valueDebounce
}