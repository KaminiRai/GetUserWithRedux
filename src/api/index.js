import axios from 'axios';

const getUser=()=>{

    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((data)=>{
        return data;
    })
    .catch((err)=>{
        return err;
    })

  }

export {
    getUser
}