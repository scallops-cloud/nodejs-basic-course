# Todo App: Mark as done

## Specs:

1. Can mark todo item as done using `done NUMBER`.
2. When the item is marked as done, it is removed from data.txt
3. The done item will be appended to done.txt

```sh
$ node index.js list
== Todo App ==

1. Buy a pen
2. Study Express.js
3. Shopping for food

$ node index.js done 2
== Todo App ==

Todo "Study Express.js" is done.

$ node index.js list
== Todo App ==

1. Buy a pen
2. Shopping for food
```

## Challenge:

1. If the number is invalid, return error
2. Add command option `showdone` to display the done items.
