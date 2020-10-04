import axios from "axios";
import { API } from "../../../ApiConfig";

class AuthenticationService {



    executeJwtAuthenticationService(username, password){
        
        return axios.post(`${API}/authenticate`,
        {
           username,
           password 
        })
    }

    registerSuccessfulLoginForJwt(username,token){
        sessionStorage.setItem('authenticatedUser', username)
        this.setupAxiosInterceptors(this.createJWTToken(token))
    }


    registerSuccessfulLogin(username, password) {
        
        sessionStorage.setItem('authenticatedUser', username)
    }

    logout() {
        
        sessionStorage.clear();
    }

    createJWTToken(token){
        console.log('creating token');
        sessionStorage.setItem("USER_TOKEN", "Bearer " + token)
        return 'Bearer ' + token
    }

    isUserLoggedIn() {
        console.log('setting token');
        let user = sessionStorage.getItem('authenticatedUser')
        console.log('current loggedin user = > ' , user);

        if (user === null) {
            return false
        } else {
            return true;
        }
    }

    setupAxiosInterceptors(token){
        
        axios.interceptors.request.use(
            (config)=>{
                if(this.isUserLoggedIn()){
                    console.log('if here ', config);
                    config.headers.authorization = token
                }
                return config
            },
            error=>{
                console.log(error);
            }
        )
    }

    componentWillMount(){
      
        this.setupAxiosInterceptors()
    }



}

export default new AuthenticationService()