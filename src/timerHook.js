import { useRef, useState } from "react";

export function useTimer(val){
    const[timer,setTimer] = useState(val);
    const count = useRef();

    function play(){
        count.current = setInterval(() => {
            setTimer(prev => prev - 1);
        },1000);
    };

    function pause(){
        clearInterval(count.current);
    };

    function stop(){
        clearInterval(count.current);
        setTimer(val)
    };
    
    return[timer,play,pause,stop];
}