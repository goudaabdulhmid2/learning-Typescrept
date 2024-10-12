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
