
import axios from 'axios'
import { getHintApi } from './constant'


class GetHintService {



    getHint(word) {

        const options = {
            method: 'GET',
            headers: {
                "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
                "x-rapidapi-key": "28380bcdd5msh3ad2fcb60023f3cp134b71jsn8565f9326fcd"
            },
            url: getHintApi(word)
        }

        return axios(options)



    }
}

export default new GetHintService();