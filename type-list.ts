// Primitive types ///
const userName: string = 'Bob';
const userAge: number = 33;
const userActive: boolean = true;

// Functions: Parameter type annotation ///
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}

// Functions: Return Type Annotations
function getFavoriteNumber(): number {
  return 26;
}

// Functions: Anonymous Functions
const names = ["Alice", "Bob", "Eve"];

// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
  console.log(s.toUpperCase());
});

// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUpperCase());
});

// Arrays ///
const lottery: number[] = [1, 5, 44, 22, 31];
const lottery2: Array<number> = [1, 5, 44, 22, 31];
const lottery3: Array<number | string> = ['hello', 42];

// Objects ///
// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

// Optional properties ///
function printName(obj: { first: string; last?: string }) {
  // ...
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });

function printName2(obj: { first: string; last?: string }) {
  // Error - might crash if 'obj.last' wasn't provided!
  console.log(obj.last.toUpperCase());
  // 'obj.last' is possibly 'undefined'.
  if (obj.last !== undefined) {
    // OK
    console.log(obj.last.toUpperCase());
  }

  // A safe alternative using modern JavaScript syntax:
  console.log(obj.last?.toUpperCase());
}

// Union Types ///
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error
// printId({ myID: 22342 });
// Argument of type '{ myID: number; }' is not assignable to parameter of type 'string | number'.

// Working with Union Types ///
function printId2(id: number | string) {
  // console.log(id.toUpperCase());
  // ERROR: Property 'toUpperCase' does not exist on type 'string | number'.
  // ERROR: Property 'toUpperCase' does not exist on type 'number'.
}

// Solution: check the type
function printId3(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}

// Check Array type
function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Here: 'x' is 'string[]'
    console.log("Hello, " + x.join(" and "));
  } else {
    // Here: 'x' is 'string'
    console.log("Welcome lone traveler " + x);
  }
}

// Type Aliases ///
type Point = {
  x: number;
  y: number;
};

// Exactly the same as the earlier example
function printCoord2(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord2({ x: 100, y: 100 });

// Type Assertions ///
const mainCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
const mainCanvas2 = <HTMLCanvasElement>document.getElementById("main_canvas");

/**
 * Conversion of type 'string' to type 'number' may be a mistake 
 * because neither type sufficiently overlaps with the other. 
 * If this was intentional, convert the expression to 'unknown' first.
 * ts(2352)
 */
// const x2 = "hello" as number;
// const a2 = (expr as any) as T;
const x2 = ('hello' as any) as string;

// Literal Types ///
let x: "hello" = "hello";
// OK
x = "hello";
// Incorrect
// x = "howdy";
// ERROR: Type '"howdy"' is not assignable to type '"hello"'.

function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
printText("Hello, world", "left");
// printText("Hola Mundo", "centre");
// ERROR: Argument of type '"centre"' is not assignable to parameter of type '"left" | "right" | "center"'.

// Numeric literal types
function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}
