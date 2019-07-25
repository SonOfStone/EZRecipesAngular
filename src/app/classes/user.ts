export class User {
    private username:String;
    private password:String;

    constructor(username:String, password: String) {
        this.username = username;
        this.password = password;
    }

    stringify(){
        return '{"username": ' + this.username + ', "password": "' + this.password + '"}';
    }
}
