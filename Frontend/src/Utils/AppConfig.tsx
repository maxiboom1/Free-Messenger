class AppConfig{
    public socketPort = "3601";
    public restApiPort = "3600";
    public backendUrl = "http://localhost:";
    public loginUrl = this.backendUrl + this.restApiPort + "/api/login";
    public registerUrl = "/api/register";
    public usersUrl = "/api/home";
}

const appConfig = new AppConfig();

export default appConfig;