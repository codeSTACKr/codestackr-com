---
title: "Deno: Node.js Killer? Introduction & Demo | Ryan Dahl"
excerpt: "Out with the old and in with the new! Will Deno replace Node?? Well, let's see. It's a secure runtime for JavaScript and TypeScript. A general-purpose JavaScript and TypeScript programming environment. A new way to write server-side JavaScript."
description: "Out with the old and in with the new! Will Deno replace Node?? Well, let's see. It's a secure runtime for JavaScript and TypeScript. A general-purpose JavaScript and TypeScript programming environment. A new way to write server-side JavaScript."
coverImage: "/assets/blog/deno-nodejs-killer/cover.png"
date: "2020-05-12T16:32:38.000Z"
tags: ""
subtitle: ""
canonical: "https://codestackr.com/blog/deno-nodejs-killer" 
author:
  name: "Jesse Hall"
  picture: "/assets/blog/authors/jesse.png"
---



# Deno: Node.js Killer? Introduction & Demo | Ryan Dahl

Out with the old and in with the new! Will Deno replace Node?? Well, let's see.

## What is Deno?

First off, it's pronounced De'no. Like Deno the dinosaur.

![Deno](https://raw.githubusercontent.com/codeSTACKr/codestackr-com/main/public/assets/blog/deno-nodejs-killer/1.gif)

It's a secure runtime for JavaScript and TypeScript. A general-purpose JavaScript and TypeScript programming environment. A new way to write server-side JavaScript.

It was created by Ryan Dahl, who also happens to be the creator of Node.js.

So, why would you create a product that directly competes with your previous product? Well here's a quote from Ryan Dahl.

> “\[node\] could have been much nicer” — 10 Things I Regret About Node.js

Deno was built using Rust and TypeScript and uses the Chrome v8 engine. And addresses several design flaws from Node.js.

## TypeScript

It has TypeScript built-in. So there is no need for a TypeScript config file. But that does not mean that you are forced to use TypeScript. Since TypeScript is a superset of JavaScript, you can simply use JavaScript if that is your preference.

## Security

One huge difference between Node and Deno is security. Deno is secure by default. Everything is locked down. You have to pass specific flags to enable access to only what is absolutely necessary to run your code. This prevents unintended security holes.

## Modules

Another difference is Deno uses ECMAScript modules. So instead of using `require`, you will use `import`. This is one thing that affects the use of NPM modules in Deno. It is possible to use NPM modules but they have to be converted if they use `require` or other unsupported features in Deno.

In Deno projects, there is no `node_modules` folder. Modules are cached and used globally for any project that requires them. This does not mean that Deno requires an always-on internet connection. When packages are referenced they are downloaded and cached, very similar to how NPM modules work. They are just not stored in each project directly. You can also point to a local directory that houses the module that you are importing. It doesn't have to come from the internet.

## Top Level Async

An awesome feature of Deno is that it has native `async` binding for top-level promises. That means that at the top level you do not have to declare `async` before a promise. You can just `await` it! If you are working within a function, then you will have to use the standard `async` / `await` syntax.

## Fetch Built-in

Also, `Fetch` is built-in. No modules needed.

## Window Object

Deno has a `window` object, which is awesome! This allows for interoperability between browser and server-side code. This is great for developers!

## Installation

There are several ways to install Deno. Here are two examples.

Using Shell:



```bash
`curl -fsSL <https://deno.land/x/install/install.sh> | sh`
```



Using PowerShell:



```bash
`iwr <https://deno.land/x/install/install.ps1> -useb | iex`
```



## Running Code

To run your code, use `deno run`. Here is a welcome script from Deno:



```bash
`deno run <https://deno.land/std/examples/welcome.ts>`
```



![Running Deno in the terminal.](https://raw.githubusercontent.com/codeSTACKr/codestackr-com/main/public/assets/blog/deno-nodejs-killer/2.jpg)

Let's look at a bit more complex example. Here we'll import an HTTP server from Deno and use it to host a basic website on localhost port 8000.



```js
import { serve } from "<https://deno.land/std@0.50.0/http/server.ts>";
const s = serve({ port: 8000 });
console.log("<http://localhost:8000/>");
for await (const req of s) {
  req.respond({ body: "Hello World\\n" });
}
```



In this example you can see the top level `async` in action. This simply creates a webpage with “Hello World”.

![Hello World Example](https://raw.githubusercontent.com/codeSTACKr/codestackr-com/main/public/assets/blog/deno-nodejs-killer/3.jpg)

## Final Thoughts

One issue that I see is the lack of module support. But Deno has not even officially released. So I'm sure we will see this grow quickly. Currently Deno has Standard Modules that do not have external dependencies and have been reviewed by the Deno core team. Here's a quote from their website:

> The intention is to have a standard set of high quality code that all Deno projects can use fearlessly.

They also have a link to “Third Party” modules. And you can also use [Pika.dev](https://pika.dev/) to find other modules.

So, we are still at the very beginning of [Deno.land](https://deno.land/). It's hard to say what will become of Node and Deno. Deno looks promising but we'll have to see what the adoption rate is for it when it officially releases. With so many developers already using and used to Node, I'm not sure how quickly they will want to move over to Deno. (If at all).

Currently, as of 5-09-2020, Deno is in RC2. An official release should be coming very soon.

---

Check out the full video with a live demo of Deno on my YouTube channel:

Help me out by liking this video and [subscribing](https://www.youtube.com/codeSTACKr/?,sub_confirmation=1) if you haven't already.

%[https://youtu.be/3Vt_cjgojDI]

## **Thanks for reading!**
