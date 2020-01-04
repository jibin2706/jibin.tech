---
title: 'Difference between forEach and map in javascript'
date: 2019-08-24
info: 'When you should use forEach/map array methods'
image: 'featured-image.jpg'
tags: ['web', 'javascript']
---

![Javascipt book](featured-image.jpg)

In javascript, we can iterate through an array by using the map and forEach method (Yes, you can use a for loop also!). There are some differences between the map and forEach methods.

You might in a situation where you don't know which method (Array.prototype.forEach() / Array.prototype.map()) to use on the array. It depends on whether you need to create a new array or want to use the existing array.

There are a couple of similarities between these two methods like they do not mutate/modify the existing array, also they cannot be stoped during execution.

The syntax of forEach and map methods are quite similar. They both take a callback function with three parameters -

- current value
- index of the array
- the array itself

Let's understand it with some examples -

Below an array of objects are given representing currency with their exchange rates.

```js
// Array.map()
const currunciesWithExchangeRate = [
  { currencyName: 'Indian Rupee', exchangeRate: 68 },
  { currencyName: 'Japanese Yen', exchangeRate: 111.55 },
  { currencyName: 'Russian Ruble', exchangeRate: 65.45 },
]
```

We will try to create a new array of all the currencies names from the variable using the map method.

```js
const currencies = currenciesWithExchangeRate.map(function(currency) {
  return currency.currencyName
})

console.log(currencies)
// output
// ["Indian Rupee", "Japanese Yen", "Russian Ruble"]
```

The callback function adds the return values to the new array.

When doing the same with the forEach method, we have to create a variable beforehand and manually add the currency name to the new array.

```js
const currencies = []
currenciesWithExchangeRate.forEach(function(currency) {
  currencies.push(currency.name)
})

console.log(currencies)
// output
// ["Indian Rupee", "Japanese Yen", "Russian Ruble"]
```

Yes, we can sometimes achieve the same result from both the functions. But when you want to generate a new array, you should use the map function which makes the code much cleaner and more readable.

The forEach method should be used when you want to execute some function on each element in the array, and don't expect anything to return.

### Some Other Differences

1. You cannot chain methods in forEach unlikely map method, where to can chain other methods like the filter, reduce, etc.

```js
// Error
array
  .forEach(function() {
    // code
  })
  .map()

//Works
array
  .map(function() {
    // code
  })
  .filter()
```

2. The return value in the forEach method is undefined, whereas the map method returns a new array

### References

- **[Array.prototype.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)**
- **[Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)**
