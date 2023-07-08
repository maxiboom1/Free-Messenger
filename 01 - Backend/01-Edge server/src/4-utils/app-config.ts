class AppConfig {

    // Server Port:
    public port = 4000;
    
    // Auth && Users Service routes:
    public login = "http://localhost:4001/api/login";
    public register = "http://localhost:4001/api/register";
    public users = "http://localhost:4001/users";
    public profileImageUrl = "http://localhost:4001/profileImage/";

    // Messages Service:
    public messageServiceWs = "http://localhost:8999"; // Message socket url

}

const appConfig = new AppConfig();

export default appConfig;
