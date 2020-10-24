---
title: 'Indexable object in typescript'
date: 2020-10-25
info: 'Using dynamic object key without typescript giving "No index signature with a parameter of type string was found on type"  error'
image: 'featured-image.png'
tags: ['web', 'typescript']
featured: true
---

![Indexable object in typescript](featured-image.png)

One of the first obstacles I faced when starting with typescript was that I was unable to dynamically accessing the object key. It is a regular pattern in javascript, and one of the things I found myself searching for a solution to this problem in typescript. So I decided to write about it.

For example, the below code snippet won't work on typescript directly.

```ts{13-15}
type User = {
    name: string,
    age: number,
    hobbies: string[]
}

const person = {
    name: 'Jibin',
    age: 22,
    hobbies: ['games', 'chess', 'reading']
}

Object.keys(person).map(key => {
    console.log(person[key]) // No index signature with a parameter of type 'string' was found on type 'User'
})
```

You will need to add an indexable key signature on the type declaring that you can access value based on the object key.  The index signature should contain the Type of the key and Type of the value it can return. 

```ts
console.log(person['name']) // works !!!

let keyName = 'name'
console.log(person[keyName]) // error !!!
```

Syntax for index signature
```ts
type Type = {
    [key: key_type]: return_type
}
```

So converting our example to accept index access it would be something like this:

```ts{5, 15}
type User = {
    name: string,
    age: number,
    hobbies: string[]
    [key: string]: string | number | string[]
}

const person:User = {
    name: 'Jibin',
    age: 22,
    hobbies: ['games', 'chess', 'reading']
}

Object.keys(person).map(key => {
    console.log(person[key]) // works now !!!
})
```