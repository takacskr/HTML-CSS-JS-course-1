const user = {
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    phone: '+36706584512',

    greetings: function () {
        console.log(`Hello my name is ${this.name}`);
    },
};

for (let entry of Object.entries(user)) {
    console.table(entry);
}

console.log(this);
