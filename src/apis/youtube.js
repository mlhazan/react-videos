import axios from 'axios';


const KEY = 'AIzaSyBW7Jaqn4TYtCPB12XDGbyJiinE18LLELk';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{

        part: 'snippet',
        // max: 5,
        key: KEY,

    }
})

//
//
// GET https://www.googleapis.com/youtube/v3/search?part=snippet&q=buildings&key=[YOUR_API_KEY] HTTP/1.1
//
// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json


//https://www.googleapis.com/youtube/v3/search?part=snippet&q=buildings&key=AIzaSyBW7Jaqn4TYtCPB12XDGbyJiinE18LLELk