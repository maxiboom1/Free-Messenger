class AppConfig {

    // Server Port:
    public port = 4000;

    // Database Host (on which computer the database exists):
    public mySqlHost = "localhost";

    // Database User
    public mySqlUser = "root";

    // Database Password: 
    public mySqlPassword = "";

    // Database Name: 
    public mySqlDatabase = "messenger";
}

const appConfig = new AppConfig();

export default appConfig;
