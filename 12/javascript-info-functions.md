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