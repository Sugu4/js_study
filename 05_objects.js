let person = {
    name: "klaus",
    age: 24,
    bio(){
        console.log(`My Name is ${this.name} and I'm ${this.age} years old.`);
    }
}

person.bio();

class Person{
    name;
    age;
    #profession;

    constructor(name, years){
        this.name = name;
        this.age = years;
    }

    bio (){
        console.log(`My Name is ${this.name}, I'm ${this.age} years old and Profession: ${this.#profession}`);
    }

    setProfession(prof){
        this.#profession = prof;
    }
}

let klaus = new Person("Karl-Heinz", 45);
// klaus.nam = "Karl-Heinz";
// klaus.#profession
klaus.setProfession("Engineer");
console.log(klaus);

klaus.bio();


class User{
    userName;
    #password;
    email;

    constructor(userName, password, email){
        this.userName = userName;
        this.#password = btoa(password);
        this.email = email;
    }

    getPassword(){
        return this.#password;
    }
    #setPassword(pwd){
        this.#password = pwd;
    }
    validateNewPwd(oldPwd, newPwd1, newPwd2){
        if (btoa(oldPwd) == this.#password){
            if (newPwd1 == newPwd2){
                this.#setPassword(btoa(newPwd1));
            }
        }
    }    


}

let user = new User("geilerpeter", "12345", "g_punkt@hotmail.su");
user.validateNewPwd("12345", "dies ist kein gültiges passwort", "dies ist kein gültiges passwort");
console.log(user.getPassword());

class Admin extends User{
    role;
    rights;

    constructor(userName, password, email, role, rights){
        super (userName, password, email);
        this.role = role;
        this.rights = rights;
    }

    deleteUser(user){return user = null;
        return user;}
    getPassword(){this.console.log("Das pwd vom admin kann nicht ausgegeben werden");
    }

}

const admin = new Admin("admin", "admin", "admin@firma.de", "admin", "all");
admin.validateNewPwd("admin", "admin+", "admin+");
user = admin.deleteUser(user);
console.log(user);
admin.getPassword();