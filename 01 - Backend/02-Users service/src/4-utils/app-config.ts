class AppConfig {

    // Server Port:
    public port = 4001;

    // User DB address
    public usersDb = "mongodb://127.0.0.1:27017/Messenger_users";

    
}

const appConfig = new AppConfig();

export default appConfig;
