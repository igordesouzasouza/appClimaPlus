import axios from "axios";

import { apiKey } from "../constants";

const previsaoTemp =  params => `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityName}&days=${params.days}1&aqi=no&alerts=no`
const locationAtually =  params => `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${params.cityName}`


const apiCall = async (endpoint) =>{
    const options = {
        method: 'GET',
        url: endpoint,
    }
    try{
        const response = await axios.request(options)
        return response.data
    }catch(err){
        console.log(err)
        return null
    }
}

export const fetchPrevisaoTemp = params => {
    return apiCall(previsaoTemp(params))   
}
export const fetchLocationTemp = params => {
    return apiCall(locationAtually(params))   
}