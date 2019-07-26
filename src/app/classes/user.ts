export class User {
    private userid:number;
    private username:String;
    private password:String;

    constructor(userid:number, username:String, password: String) {
        this.userid = userid;
        this.username = username;
        this.password = password;
    }

    getUserid(){
        return this.userid;
    }

    stringify(){
        return '{"username": ' + this.username + ', "password": "' + this.password + '"}';
    }
}
