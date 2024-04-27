export class contactUser{
    constructor(public name: string, public lastName : string, public email: string, public message: string){
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.message = message;
    }
}