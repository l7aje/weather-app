const axios=require('axios');


const forcast= async(address) => {
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${address}&appid=a1502c60d8e7f5aceef52db58f35048a`;
    try{
        const response= await axios.get(url);
        const data= response.data.weather[0].description;
        return `The weather in ${address} is ${data}`
    }catch(error){
        return 'query non valid try again';
    }
    
    
}

module.exports=forcast;


