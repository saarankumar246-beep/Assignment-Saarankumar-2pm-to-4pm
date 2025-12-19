const user = {
    username: "saaran",
    isLoggedIn: false,
    login: function(){
        this.isLoggedIn = true;
        console.log(this.username + " Logged in"); 
    },
    logout: function(){
        this.isLoggedIn = false;
        console.log(this.username + " Logged out");
    }
}

user.login();
user.logout();