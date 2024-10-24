/* #03
    - Create Configuration And Watch Files.
    - tsc --init => create config file.
    - change "rootDir" to src & "outDir" to dist & "removeComments": true /* Disable emitting comments.
    - tse =>  to create dist folder 
    - tse -w => auto save change and update dist folder

    - code:
    console.log(Math.floor(10.5));
*/

// ==========================================================================

/* #04
    * Statically typed
        - Have batter performance at run time due to not check types dynmic
        - Error detected earlier
    
    * Dynmically typed 
        - Type checked at ececution time
        - Error can be detected After exrcution 

 */

// ===================================================================

/* #05
    - Type Annotations And Any Data Type
    - Indicate the data type of variables:
            let theName: string = "Abdulhmaid";
            let age: number = 40;
            let hire: boolean = true;
            let all: any = "welcome";
            let allVars; // Any

            theName = "Mido";
            all = 10;

    - Indicate the data type of function:
            function add(n1: number, n2: number) {
            return n1 + n2;}
            console.log(add(10, 30));
            console.log(typeof add(10, 30));

    
    - why we use it? To enforce the type inspection process
    - is it mandatory? no we can remove it
    - what happen if we didn't use it? 


*/
// ==================================================================

/* #06
    - Type Annotations with Arrays:
        let all; Any
        all = 's';
        all = 100;
        all = true;

        let all: string | number = "hello"; string or number
        all = "s";
        all = 100;
        
        let arr: (string | number)[] = [1, 3, 4, 5, "e", "s"];
        let numbers = [1, 3, 4, 5, 6, "ss"]; // number | string
        let nums: number[] = [1, 4, 3]; // numbers

        for (let i = 0; i < nums.length; i++) {
        console.log(nums[i]);
        }


*/

/* #07 
    - Type Annotations With Multidimensional Arrays.
      let arr: (string | number | string[] | boolean[]) [] = ['w','we','we',3,4,5,['34','dsf'],[true,false]];
            
    let arr = ["w", "we", "we", 3, 4, 5, ["34", "dsf", ["ds", "D"]], [true, false]]; //  (string | number | boolean[] | (string | string[])[])[]

*/
// =====================================================================================

/* #08
    - Type Annotations With Function.
    - noImplicitAny => config file => false => if show "any" don't reporting as problem
    - noImplicitReturns => config file => true => if not find a "return" in any path of function reporting as problem
    - noUnusedLocal => config file => true => if there local variables aren't read. reporting as problem
    - noUnusedParameters => config file => true => Raise an error when a function parameter isn't read.

        let showMsg = true;

        function showDetails(name: string, age: number, salary: number): string {
        let test = 10;
        if (showMsg) {
        return `Hello ${name}, Age Is ${age}, Salary Is ${salary}, Test variables ${test}`;
        }
        return "no data to show";
        }

        console.log(showDetails("abdul", 22, 5000));



*/
// =========================================================================

/* #09 
    - Function Optional and Default Parameters
    - In js, Every parm is optional => "undefind" if you didn't use it.

        function showData(name: string = "Un", age: number, country: string) {
        return `${name} - ${age} - ${country}`;
        }

        console.log(showData(undefined, 22, "Egypt"));

    - "?" optional parameter
            function showData(name: string = "Un", age: number, country?: string) {
            return `${name} - ${age} - ${country}`;
            }

            console.log(showData("hamid", 22));

    - required param can't be after optional param, required first optional second 
            function showData(name?: string, age: number, country?: string) { // error
            return `${name} - ${age} - ${country}`;
            }

    - 
            function showData(name?: string, age?: number, country?: string) {
            return `${name} - ${age} - ${country}`;
            }

            console.log(showData());

*/
// ==========================================================================

/* #10
    - Function Rest Parameter
    - What about float => All under type number
        function addAll(...nums: number[]) {
        return nums.reduce((sum, acc) => sum + acc, 0);
        }

        console.log(addAll(1, 3, 4, 56, 7, 754, 3, 10.5));
        console.log(addAll(1, 3, 4, 56, 7, 754, 3, 10.5, +true));




*/
// ===========================================================

/* #11
    - Type Annotations With Anonymous And Arrow Function
            const addAnony = function (num1: number, num2: number): number {
            return num1 + num2;
            };

            const add = (n1: number, n2: number): number => n1 + n2;

            console.log(add(44, 33));
            console.log(addAnony(44, 33));


*/
// =================================================================

/* #12
    - Data Types 
    - Type Alias => nick name
        type st = string;
        let nameF: st = "hamid";

        type standnum = string | number;
        let c: standnum = "ssss";
        c = 14;

*/
// ========================================================

/* #13 
    - Data Types Type Alias Advanced
            type Buttons = {
            up: string;
            down: string;
            left: string;
            right: string;
            };

            function getActions(btns: Buttons) {
            console.log(`Action for Button Is ${btns.up}`);
            console.log(`Action for Button Is ${btns.down}`);
            console.log(`Action for Button Is ${btns.left}`);
            console.log(`Action for Button Is ${btns.right}`);
            }

            getActions({ up: "jump", right: "Go right", left: "Go left", down: "down" });


            type Last = Buttons & {
            x: boolean;
            };

            function getActions(btns: Last) {
            console.log(`Action for Button Is ${btns.up}`);
            console.log(`Action for Button Is ${btns.down}`);
            console.log(`Action for Button Is ${btns.left}`);
            console.log(`Action for Button Is ${btns.right}`);
            }

            getActions({
            up: "jump",
            right: "Go right",
            left: "Go left",
            down: "down",
            x: true,
            });

            type Last = Buttons & {
            x(): boolean;
            };
            function getActions(btns: Last) {
            console.log(`Action for Button Is ${btns.up}`);
            console.log(`Action for Button Is ${btns.down}`);
            console.log(`Action for Button Is ${btns.left}`);
            console.log(`Action for Button Is ${btns.right}`);
            console.log(`Action for Button Is ${btns.x()}`);
            }

            getActions({
            up: "jump",
            right: "Go right",
            left: "Go left",
            down: "down",
            x() {
            return true;
            },
            });


*/
// ===============================================================================

/* #14 
    -  Data Types - Literal Types
        type nums = 0 | 1 | -1;

        function compere(num1: number, num2: number): nums {
        if (num1 === num2) {
            return 0;
        } else if (num1 > num2) {
            return 1;
        } else {
            return -1;
        }
        }

        console.log(compere(1, 1));
        console.log(compere(3, 1));
        console.log(compere(1, 3));


*/
// ================================================================

/* #15
    - Data Types - Tuple
    - Is another sort of array type 
    - We know Exactly How many ele it contains
    - We know which types it contain at specific positions

            let artical: [number, string, boolean] = [11, "Title one", true];
            artical = [13, "Title two", false];
            artical.push(100);
            console.log(artical); // [ 13, 'Title two', false, 100 ]

            let artical: readonly [number, string, boolean] = [11, "Title one", true];
            artical = [13, "Title two", false];
            artical.push(100); // error

            let artical: readonly [number, string, boolean] = [11, "Title one", true];
            artical = [13, "Title two", false];

            const [id, title, publish] = [...artical];
            console.log(id, title, publish);

*/
// ==================================================================

/* #16
    - Data Types - Void And Never

    - Void func that will return nothing 
    - Func in js that not return a value will show undefind, undefind is not void

            function logging(msg: string): void {
            console.log(msg);
            return;
            }

            console.log(logging("I am hamid"));
            console.log("s");

    - Nver, Return Type Never Returns
    - The func dosen't have a normal completion
    - It throws an error or never finshes runing at all "infinit loop"

        const fail = (msg: string) => {
        throw new Error(msg);
        };

        function alwysLog(name: string): never {
        while (true) {
        console.log(name);
        }
        }

*/
// ====================================================

/* 17 
    - Data Types - Enums Part 1
    - Enums => Enumerations
    - Used for logical groping collection of constants "Collection of related values".
    - It organize ur code.
    - By default Rnu are number-based, frist element is 0
    - There is a numric enum
    - There is a string-based enums
    - There is heterogeneous enums [string , number]

    
                enum Level {
                Kids = 15,
                Easy = 9,
                Medium = 6,
                Hard = 3,
                }

                let lvl: string = "Easy";

                if (lvl === "Easy") {
                console.log(`The level is ${lvl} And number of seconds is ${Level.Easy}`);
                }

*/
// ======================================================================
/* #18 
    - Data Types - Enums Part 2
    - "preserveConstEnums": true,  Disable erasing 'const enum'. "Look to index.js withe const and without it if this config is commant "

            const enum Level {
            Kids = 15,
            Easy = 9,
            Medium = 6,
            Hard = 3,
            }

    - 
            enum Kids {
            Five = 25,
            Saven = 20,
            Ten = 15,
            }

            enum Level {
            Kid = Kids.Ten,
            Easy = 9,
            Medium = Easy,
            Hard = Medium - 3,
            }

            let lvl: string = "Easy";

            if (lvl === "Easy") {
            console.log(`The level is ${lvl} And number of seconds is ${Level.Hard}`);
            }

    - 

            function getHardSeconds(): number {
            return 3;
            }

            enum Kids {
            Five = 25,
            Saven = 20,
            Ten = 15,
            }

            enum Level {
            Insane, // give it default intilaiz 0
            Kid = Kids.Ten,
            Easy = 9,
            Medium = Easy,
            Hard = getHardSeconds(),
            // Insane2, // error must give it value
            }

            let lvl: string = "Easy";

            if (lvl === "Easy") {
            console.log(`The level is ${lvl} And number of seconds is ${Level.Hard}`);
            }

*/
// ================================================================

/* #19
    -Data Types - Type Assertions
    - Sometime Compiler Dosn't know the info we do
            let myImg = document.getElementById("my-img") as HTMLImageElement;
            let myImg = <HTMLImageElement>document.getElementById("my-img");
            console.log(myImg.src);

    - Ts is not perfoeming any check to make sure type assertion "as .... " is valid.

            let data: any = 100;
            console.log((data as string).repeat(3));

            let data: any = "100";
            console.log((data as string).repeat(3));

*/
// =======================================================

/* #20
    - Data Types - Union And Intersection Types
    - The | symbol is used to create the unoin => "or"
            let all: number | string = 100;

    - Intersection is a type thet combines several types into one 
    - The & symbol is used to create an intersection => "And"

            type A = {
            one: string;
            two: number;
            three: number;
            };

            type B = A & {
            four: number;
            };

            type C = {
            five: number;
            };

            type mix = A & C;

*/
// =================================================================

/* #21
    - Type Annotations With Object
            let myObj: {
            readonly username: string;
            id: number;
            hire?: boolean;
            skills: {
            one: string;
            two: string;
            };
            } = {
            username: "HAmid",
            id: 1,
            skills: {
            one: "HTML",
            two: "CSS",
            },
            };

            myObj.username = "Fs"; ERROR

            console.log(myObj);

*/
// ===============================================================

/* #22 
    - Interface Declaration
    - Serve like types.
    - The interface describe the shape of an oblect.
    - It defines the syntax to follow.
    - Use read only and optional opreator.

            interface User {
            id?: number;
            readonly username: string;
            country: string;
            }

    - Use with object.
    

            let user: User = {
            id: 100,
            username: "hamid",
            country: "KSA",
            };

            // user.username = "ss";  ERROR

    - Use with func.

            function getData(data: User) {
            console.log(`Id is ${data.id}`);
            console.log(`Username is ${data.username}`);
            console.log(`Country is ${data.country}`);
            }

            getData({
            id: 100,
            username: "hamid",
            country: "KSA",
            });

*/
// =================================================================================

/* #23
    - Interface Method And Parameters.
    
            interface User {
            id: number;
            username: string;
            country: string;
            sayHello(): string;
            sayWelcome: () => string;
            getDouble(num: number): number;
            }

            let user: User = {
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

*/
// ================================================================

/* #24
    - Interface Reopen And Use Cases.

        // What we are do here not extend we open interface and add another thing

        // Homepage
            interface Settings {
            theme: boolean;
            readonly font: string;
            }

        // Artical page
            interface Settings {
            sidebar: boolean;
            }

        // Contact page
            interface Settings {
            external?: boolean;
            }

            let userInterface: Settings = {
            theme: true,
            font: "open",
            sidebar: false,
            external: true,
            };

       


*/
// ===========================================================================

/* #25
    - Interface Extend

        interface User {
        id: number;
        username: string;
        country: string;
        }

        // interface Modarators extends User {
        //   role: string | number;
        // }

        interface Modarators {
        role: string | number;
        }

        interface Admin extends User, Modarators {
        protect?: boolean;
        }

        let user: Admin = {
        id: 100,
        username: "hamid",
        country: "KSA",
        role: "mod",
        protect: true,
        };



*/
// ======================================================

/* #26
    - Interface Final Discussion
    - Interface vs Type aliases
    - Tack A look on HTMLElement Interface

    - Type aliases we can't do like we do in #24 and #25

*/
// ===============================================================

/* #27 
    - Class Type Annotations

            class User {
            u: string;
            s: number;
            msg: () => string;
            constructor(username: string, salary: number) {
            this.u = username;
            this.s = salary;
            this.msg = () => `Hello ${this.u} Your Salary Is ${this.s}`;
            }

            sayHello() {
            return "Hello";
            }
            }

            let userOne = new User("Hamid", 300000);
            console.log(userOne.msg());
            console.log(userOne.sayHello());


*/
// =======================================================================

/* #28
    - Class Access Modifiers And Parameters Properties
    - Public
    - All Members of a class in TS are public
    - All public members can be accessed anywhere without any restriction

    - Private
    - Members are visable only to class and not accessable out the class

    - Protected 
    - same like private but can be accessed using the deriving class

    - TS is a layer on top of JS 
    - It Should remove all annotations and although access modifiers "private for ex"

            class User {
            msg: () => string;
            constructor(
            private username: string,
            protected salary: number,
            public readonly address: string
            ) {
            this.msg = () => `Hello ${this.username} Your Salary Is ${this.salary}`;
            }

            sayHello() {
            return "Hello";
            }
            }

            let userOne = new User("Hamid", 300000, "cairo");
            console.log(userOne.address);
            console.log(userOne.msg());
            console.log(userOne.sayHello());


*/
// ============================================
/* #29
    - Class Get And Set Accessors
            class User {
            msg: () => string;
            constructor(
            private _username: string,
            protected salary: number,
            public readonly address: string
            ) {
            this.msg = () => `Hello ${this._username} Your Salary Is ${this.salary}`;
            }

            sayHello() {
            return "Hello";
            }

            get username(): string {
            return this._username;
            }

            set username(val: string) {
            this._username = val;
            }
            }

            let userOne = new User("Hamid", 300000, "cairo");
            console.log(userOne.username);
            userOne.username = "mido";
            console.log(userOne.username);

            console.log(userOne.msg());
            console.log(userOne.sayHello());



*/
// ===========================================================

/* #30
    - Class Static Members
    - Don't use "name, length, call"

            class User {
            private static _created: number = 0;
            public static get created(): number {
            return User._created;
            }
            public static set created(value: number) {
            User._created = value;
            }
            //   static getCount(): void {
            //     console.log(`${this.created} Object Created`);
            //   }
            constructor(public username: string) {
            User.created += 1;
            }
            }

            let u1 = new User("hamid");
            let u3 = new User("hamid");
            let u4 = new User("hamid");
            let u5 = new User("hamid");
            let u6 = new User("hamid");
            console.log(User.created);

 */
// ================================================================

/* #31
    -  Class Implements Interface

            interface Settings {
            theme: boolean;
            font: string;
            save?(): void;
            }

            // Class must belong at least property inside interface
            class User implements Settings {
            constructor(
            public username: string,
            public theme: boolean,
            public font: string
            ) {}
            save(): void {
            console.log("Saved");
            }

            update(): void {
            console.log("Updated");
            }
            }
            let userOne = new User("hamid", false, "Open Sans");

            userOne.save();
            userOne.update();



*/
// =================================================================

/* #32
    - Abstract Classes And Members
    - We Cannot create an instance of Abstract Class 

            abstract class Food {
            constructor(public title: string) {}

            abstract getCookingTime(): void;
            }

            class Pizaa extends Food {
            constructor(title: string, public price: number) {
            super(title);
            }
            getCookingTime(): void {
            console.log("Cooking Time for Pizaa");
            }
            }

            class Burger extends Food {
            constructor(title: string, public price: number) {
            super(title);
            }
            getCookingTime(): void {
            console.log("Cooking Time for Burger");
            }
            }

            let pizzaOne = new Pizaa("Awsso", 100);
            console.log(pizzaOne.price);
            console.log(pizzaOne.title);
            pizzaOne.getCookingTime();

*/
// ======================================================================

/* #33 
    - Polymorphism And Method Override

    - Polymorphism classes have the same methods but different implementaions 
    

    - Method Override
    - Allowing child class to provide implementation of a method in parent class
    - A method in child class must have same name as parant class.

    - "noImplicitOverride" Ensure overriding members in derivedclasses are marked with an override modifier. 


            class Player {
            constructor(public name: string) {}

            attack(): void {
            console.log("Attacking Now.");
            }
            }

            class Amazon extends Player {
            constructor(name: string, public spears: number) {
            super(name);
            }

            override attack(): void {
            console.log("Attacking With Spears");
            this.spears -= 1;
            }
            }

            class Barbarian extends Player {
            constructor(name: string, public axeDurability: number) {
            super(name);
            }

            override attack(): void {
            console.log("Attacking With Axe");
            this.axeDurability -= 1;
            }
            }

            let barOne = new Barbarian("Hamid", 100);
            console.log(barOne.name);
            barOne.attack();
            console.log(barOne.axeDurability);



*/
// ============================================================================
/* #34
    - Generics Introduction
    - Help Write A Reusable Code 
    - Allow To pass type as a param to another type 
    - You will be able to deal with multiple type without using ":any Type"
    - We can Create:
        Generic Class
        Generic  function 
        Generic Methods
        Generic Interface

                function returnNumber(val: number): number {
                return val;
                }

                function returnString(val: string): string {
                return val;
                }

                function returnBoolean(val: boolean): boolean {
                return val;
                }

                // function returnType<GenericType>(val: GenericType): GenericType {
                //   return val;
                // }
                function returnType<T>(val: T): T {
                return val;
                }

                console.log(returnType<number>(100));
                console.log(returnType<string>("100"));
                console.log(returnType<boolean>(true));
                console.log(returnType<number[]>([1, 4, 6, 7]));

*/
// ========================================================

/* #35 
    - Generics Multiple Types
    - Arrow function
    - Multiple Types
    
            const returnType = <T>(val: T): T => val;

            console.log(returnType<number>(100));
            console.log(returnType<string>("100"));

            const testType = <T>(val: T): string =>
            `The value is ${val} and type is ${typeof val}`;

            console.log(testType<number>(100));
            console.log(testType<string>("100"));

            const multipleTypes = <T, S>(valOne: T, valTwo: S): string =>
            `The First value is ${valOne} and type is ${typeof valOne}, second is ${valTwo} and type is ${typeof valTwo}`;

            console.log(multipleTypes<string, number>("hamid", 100));
            console.log(multipleTypes<string, boolean>("100", true));

*/
// ==========================================================================

/* #36 
    - Generics Classes

            class User<T = string> {
            constructor(public value: T) {}

            show(msg: T): void {
            console.log(`${msg}  ${this.value}`);
            }
            }

            let userOne = new User<string>("hamid");
            console.log(userOne.value);
            userOne.show("hello");

            // let userTwo = new User(100);
            // console.log(userTwo.value);
            // userTwo.show("hello"); error

            let userTwo = new User<number | string>(100);
            console.log(userTwo.value);
            userTwo.show("hello");

*/
// =========================================================================
/* #37
    - Generics And Interfaces
            interface Book {
            itemType: string;
            title: string;
            isbn: number;
            }
            interface Game extends Book {
            price: number;
            }

            class Collection<T> {
            public data: T[] = [];
            add(item: T): void {
            this.data.push(item);
            }
            }

            let itemOne = new Collection<Book | Game>();

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
*/
// ====================================================

/* # 38
    - The End And How To Master Typescrip
    - How to continue
    - Practice 
    - Topics not in the course
        - JSDocs
        - TsConfig
        
*/
