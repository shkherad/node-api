![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# An Introduction to node.js and npm

## Objectives

By the end of this lesson, students should be able to:

- Explain how node supports encapsulation
- Use npm to install modules
- Write code to use node modules
- Create and use a node module

## Required reading:

- [A simple intro to NodeJS modules](http://51elliot.blogspot.com/2011/07/simple-intro-to-nodejs-modules.html)
- [Node.JS Module Patterns (note the "down" navigation on the second to last slide)](http://darrenderidder.github.io/talks/ModulePatterns)
- [Understanding Node.js](https://www.codeschool.com/blog/2014/10/30/understanding-node-js/)


## Introduction

We'll use node's implementation of the module pattern to build games that demonstrate abstraction, encapsulation, and separation of concerns.

Why is this important?

These concepts allow us to create code that is more testable and reusable.  In other words, are code can be more reliable and can help us avoid reimplementing functionality.

## Instructions

Fork and clone this repository, then

```bash
$ cd wdi_7_node_intro
$ subl .
$ npm install
```

## npm

`npm` is similar in function/feature to `gem` and `bundler`.

### Using node modules

```bash
$ mkdir < directory name >
$ [ -f package.json ] || echo {} >package.json
$ npm install --save < module name >
```

### Creating a node module

```
$ mkdir < module name >
$ cd < module name >
$ npm init
```

Follow the prompts and fill in the module.

### Built in modules

We'll make use of `util` and `http`.

## Games

### Demonstration

```bash
$ cd demo
$ node tic-tac-toe-ui.js
```

---

### Code Along

```bash
$ cd ../code
$ node hangman-ui.js
```

---

### Lab

```bash
$ cd ../lab
$ node hangman-ui.js
```

---

## `http`

And a bit of async.

### Client

```bash
$ cd ../http
$ node request.js
```

### Server

```bash
$ node respond.js
```

---

## Additional Resources

- [NodeSchool](http://nodeschool.io/)


<!--

## Quiz

Please follow the instructions at https://github.com/ga-wdi-boston/wdi_1_js_functions_intro_quiz

-->
