import axios from "axios";

class AuthenticationService {



    executeJwtAuthenticationService(username, password){
        
        return axios.post('http://localhost:8080/authenticate',
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
        sessionStorage.setItem("USER_TOKEN", "Bearer " + token)
        return 'Bearer ' + token
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')
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
                    config.headers.authorization = token
                }
                return config
            }
        )
    }

    componentWillMount(){
      
        this.setupAxiosInterceptors()
    }



}

export default new AuthenticationService()