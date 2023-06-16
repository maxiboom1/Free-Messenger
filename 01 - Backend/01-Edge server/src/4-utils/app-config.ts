class AppConfig {

    // Server Port:
    public port = 4000;
    
    // Auth && Users service routes
    public login = "http://localhost:4001/api/login";
    public register = "http://localhost:4001/api/register";
    public users = "http://localhost:4001/api/users";

}

const appConfig = new AppConfig();

export default appConfig;
