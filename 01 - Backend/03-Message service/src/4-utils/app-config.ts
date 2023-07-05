class AppConfig {
    
    // Message-App settings:
    public port = 4002;
    public serverUrl = "http://localhost:" + this.port;

    // Edge server settings
    public edgePort = 4000;
    public edgeUrl = "http://localhost:" + this.edgePort;
    
    // User DB address
    public usersDb = "mongodb://127.0.0.1:27017/Messenger_messages";
    
}

const appConfig = new AppConfig();

export default appConfig;
