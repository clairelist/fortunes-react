//fetch takes an argument:: a callback func to the state-setter function ! 
//it then returns setting the result of an axios promise call to said setter.

import axios from 'axios';

export const fetch=(setter)=>{
    axios.get('data')
    .then(res=>{
        return setter(res);
    }).catch(err=>{
        console.log(err);
    })
}

//invoke as : fetch(setter);