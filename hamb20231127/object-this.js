const user = {
    name: "John Doe",
    email: "johndoe@gmail.com",
    phone: "+36706584512",

    greetings: function () {
        console.log(`Hello my name is ${this.name}`);
    }
}

user.greetings();