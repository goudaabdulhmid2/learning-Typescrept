"use strict";
class Collection {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
}
let itemOne = new Collection();
itemOne.add({
    itemType: "Book",
    title: "one",
    isbn: 131314,
});
itemOne.add({
    itemType: "Game",
    title: "Fifa",
    isbn: 131314,
    price: 100,
});
console.log(itemOne);
//# sourceMappingURL=index.js.map