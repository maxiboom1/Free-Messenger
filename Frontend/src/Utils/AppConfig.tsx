class AppConfig{
    public socketPort = "3601";
    public restApiPort = "3600";
    
    // Our public server 
    public backendUrl = "http://62.90.145.124:";
    
    // localhost
    //public backendUrl = "http://localhost:";

    public registerUrl = "/api/register";
    public usersUrl = "/api/home";

    public loginUrl = this.backendUrl + this.restApiPort + "/api/login";
    
    public getAllUsersUrl = this.backendUrl + this.restApiPort + "/api/home";
    
    //http://localhost:4000/api/message/:userId1:userId2
    public get2UsersHistory = this.backendUrl + this.restApiPort + "/api/chat/"; // + :userId1:userId2

}

const appConfig = new AppConfig();

export default appConfig;