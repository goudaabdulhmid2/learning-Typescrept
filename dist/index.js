"use strict";
let user = {
    id: 100,
    username: "hamid",
    country: "KSA",
    sayHello() {
        return `Hello ${this.username}`;
    },
    sayWelcome: () => {
        return `Welcome ${user.username}`;
    },
    getDouble(n) {
        return n * 2;
    },
};
console.log(user.sayHello());
console.log(user.sayWelcome());
console.log(user.getDouble(4));
//# sourceMappingURL=index.js.map