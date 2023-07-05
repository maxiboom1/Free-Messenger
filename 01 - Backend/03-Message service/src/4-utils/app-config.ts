class AppConfig {
    
    // App settings:
    public port = 4001;
    public serverUrl = "http://localhost:" + this.port;

    // Edge server settings
    public edgePort = 4000;
    public edgeUrl = "http://localhost:" + this.edgePort;
    public profileImageUrl = this.edgeUrl + "/users/profileImage/";
    
    // User DB address
    public usersDb = "mongodb://127.0.0.1:27017/Messenger_users";

    public debug_mode = false;
    
}

const appConfig = new AppConfig();

export default appConfig;
