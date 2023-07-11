class AppConfig{
  
    // localhost
    public backendUrl = "http://localhost:4000/";

    public loginUrl = this.backendUrl + "/api/login";

}

const appConfig = new AppConfig();

export default appConfig;