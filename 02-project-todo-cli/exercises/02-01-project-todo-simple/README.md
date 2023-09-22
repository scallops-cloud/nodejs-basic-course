# Create a todo app

## Specs:

1. Can use "add" to add a new todo item

Sample

```sh
$ node index.js add "Buy a pen"
Todo "Buy a pen" was added.
```

2. Can use "list" to list all todo items

Sample

```sh
$ node index.js list
Buy a pen
Study Express.js
Shopping for food
```

3. Can use "clear" to clear all todo items

Sample

```sh
$ node index.js clear
All todos are cleared.
```

4. Start all the result with title "== Todo App ==" with color

Sample

```sh
$ node index.js list
== Todo App ==

Buy a pen
Study Express.js
Shopping for food

$ node index.js add "Buy a chocolate"
== Todo App ==

Todo "Buy a chocolate" was added.
```

5. When listing, below title, display the total amount of the items (Hint: split)

Sample

```sh
$ node index.js list
== Todo App ==
Total todos: 3 items.

Buy a pen
Study Express.js
Shopping for food
```

6. For each item in list, add the number 1, 2, 3, 4,.. in front of them.

Sample

```sh
$ node index.js list
== Todo App ==
Total todos: 3 items.

1. Buy a pen
2. Study Express.js
3. Shopping for food
```

## Challenges:

1. Display the todo in reversed order (newer on top).

2. Decorate colors in other places to make it easier to understand.
