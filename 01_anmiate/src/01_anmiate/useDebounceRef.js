import {customRef} from "vue"
export  function debounceref(value,delay=1000){
return customRef((track,trigger)=>{
    let timer
    return{
        get(){
            track();
            return value
        },
        set(newvalue){
            clearTimeout(timer)
            timer=setTimeout(() => {
            value=newvalue
            trigger();

            }, delay);
            
        }



    }
})



}