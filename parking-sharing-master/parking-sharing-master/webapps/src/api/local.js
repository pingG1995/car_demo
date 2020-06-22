import axios from 'axios';

export const request=()=>{
  axios.get('http://jsonplaceholder.typicode.com/users')
  .then(response=>{
     console.log(response);
     // this.offerData=response.data;
     // this.demandData=response.data;
   })
 .catch(error=>{
   console.log(error);
   alert('网络错误，不能访问');
 })
}
