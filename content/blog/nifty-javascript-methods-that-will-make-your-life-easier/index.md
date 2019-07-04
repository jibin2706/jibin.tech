---
title: 'Nifty Javascript methods that will make your life easier'
date: 2019-07-02
info: 'Ten javascript methods discussed'
---

![Javascipt Logo](featured-image.png)

The methods discussed here are of *ES6+ specification*, you must check if they are compatible with older versions of browsers if you want to support them or using a transpiler like Babel will be sufficient.

---

### String.prototype.includes() / Array.prototype.includes()
includes() method checks whether a substring is present in a string, and returns true if a substring is present else it returns false. It is case-sensitive. Even array has include() method which works the same way.

```js
const str = 'hello world'
str.includes('hello') // returns true
str.includes('Hello') // returns false

const array = [1, 2, 3, 4]
array.includes(3) // returns true
```

### Array.prototype.every()
This method accepts a callback function as an argument. It returns true if the callback function returns a truthy value for every array element. Otherwise, false.

```js
const array = [1, 2, 3, 4, 5]

// checks whether an element is even
function isEven(element) {
  return element % 2 === 0
}

array.every(isEven) // false
```

### Array.prototype.some()
This method is similar to every() method, where it accepts a callback function as an argument, but returns true when the callback function returns a truthy value for any one of the array elements. Otherwise, false.

```js
var array = [1, 2, 3, 4, 5]

// checks whether an element is even
function isEven(element) {
  return element % 2 === 0
}

array.some(isEven) // true
```

### String.prototype.trim()
It returns a new string with whitespaces removed from both ends. Similarly, we have trimStart() and trimEnd() methods which only remove whitespaces from the start and end of the string.

```js
var greeting = '   hello world   '
greeting.trim()       // "hello world"
greeting.trimStart()  // "hello world   "
greeting.trimEnd()    //"   hello world"
```

### Array.from()
The Array.from() method creates a new array from array-like objects which contain length property or iterable objects like map and set.

```js
Array.from('hello') // [ "h", "e", "l", "l", "o" ]

const set = new Set(['foo', 'bar', 'baz', 'foo'])
Array.from(set) // [ "foo", "bar", "baz" ]

const map = new Map([[1, 2], [2, 4], [4, 8]])
Array.from(map) // [[1, 2], [2, 4], [4, 8]]
```

### Object.keys()
Returns an array of all the properties of the object

```js
const human = {
  name: 'ABC',
  age: 30,
}

Object.keys(human) // ["name", "age"]
```

## Object.values()
Returns an array of all the values of the object

```js
const human = {
  name: 'ABC',
  age: 30,
}

Object.values(human) // ["ABC", 30]
```

## Object.entries()
Returns an array with key and its value in array pair

```js
const human = {
  name: 'ABC',
  age: 30,
}

Object.keys(human) // [["name", "ABC"], ["age", 30]]
```

## Object.freeze()
freeze() method disables the object's properties to be modified or added or deleted.

**Note: In strict mode, this results in an error if you try to modify, add or delete properties/values.**

```js
const human = {
  name: 'ABC',
  age: 30,
}

Object.freeze(human)

human.name = 'XYZ'
human.occupation = 'Developer'

console.log(human) // { name: "ABC", age: 30 }
```

## Object.seal()
Unlike Object.freeze() method,  Object.seal() allow existing properties to modified but you cannot delete or add new properties.

```js
const human = {
  name: 'ABC',
  age: 30,
}

Object.seal(human);

human.name = 'XYZ';
human.occupation = 'Developer';

console.log(human) // { name: "XYZ", age: 30 }
```
