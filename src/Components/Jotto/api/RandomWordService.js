
import axios from 'axios'
import {randomWordApi} from './constant'


class RandomWordService{
    
    
    retrieveRandomWord(){
        const options = {
            method: 'GET',
            headers: {
                "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
                "x-rapidapi-key": "28380bcdd5msh3ad2fcb60023f3cp134b71jsn8565f9326fcd"
            },
            url: randomWordApi
        }
        
        return axios(options)
    }
}

export default new RandomWordService();