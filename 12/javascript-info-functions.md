# JavaScript.info: Functions

https://javascript.info/function-basics

## Is "else" required?

The following function returns `true` if the parameter `age` is greater than `18`.

Otherwise it asks for a confirmation and returns its result:

```js
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}
```
Will the function work differently if `else` is removed?

```js
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}
```

Is there any difference in the behavior of these two variants?

No, there's no difference as to how the function will run w/o the `else`. Some people even recommend using multiple `if` statements for clarity instead of chaining `if...else` statements when possible.

## Rewrite the function using '?' or '||'

The following function returns true if the parameter age is greater than 18.

Otherwise it asks for a confirmation and returns its result.

```js
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
```

Rewrite it, to perform the same, but without if, in a single line.

Make two variants of checkAge:

1. Using a question mark operator ?
2. Using OR ||

```js
function checkAge(age) {
    return (age > 18) ? true : confirm("Did parents allow you?")
}
```

```js
function checkAge(age) {
    return (age > 18) || confirm("Did parents allow you?")
}
```

## Function min(a, b)

Write a function min(a,b) which returns the least of two numbers a and b.

For instance:

```js
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
```

```js
min(a, b) {
    return (a < b) ? a : b
}
```

## Function pow(x,n)

Write a function `pow(x,n)` that returns `x` in power `n`. Or, in other words, multiplies `x` by itself `n` times and returns the result.

```js
pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
```

Create a web-page that prompts for `x` and `n`, and then shows the result of `pow(x,n)`.

Run the demo

P.S. In this task the function should support only natural values of `n`: integers up from `1`.