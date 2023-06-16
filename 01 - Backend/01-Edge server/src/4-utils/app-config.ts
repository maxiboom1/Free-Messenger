class AppConfig {

    // Server Port:
    public port = 4000;
    
    // Auth service routes
    public login = "http://localhost:4001/api/login";
    public register = "http://localhost:4001/api/register";

}

const appConfig = new AppConfig();

export default appConfig;
