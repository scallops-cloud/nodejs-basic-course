# Todo Filter

## Objective:

Understand how to use request query to filter data

### JavaScript function

In JavaScript, functions are considered "first-class citizens". This means they
can be assigned to variables, stored in data structures, passed as arguments to
other functions, and returned as values from other functions.

This feature allows for powerful programming techniques like higher-order
functions and closures. For example, a function can be assigned to a variable
like this:

```js
const greet = function() { console.log('Hello!') }
```

And a function can be passed as an argument to another function like this:

```js
function callFunction(func) { func() }
callFunction(greet);
// "Hello!"
```

where `callFunction` is a higher-order function that accepts another function as
an argument.

## Exercise:

1. Update Postman to have "List By isDone" API
2. Update route to be able to List by isDone
3. Test List by isDone

Request:

```
GET /todos?isDone=true
```

Response:
List only Todo which `isDone` is `true`

```json
{
  "data": [
    {
      "id": 2,
      "title": "Go to school",
      "description": "",
      "isDone": true
    }
  ]
}
```
