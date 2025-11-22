---
title: "TypeScript vs JSDoc: A Shift in the Development Landscape"
excerpt: "In the realm of web development, TypeScript has been a popular choice among developers for its ability to provide static typing to JavaScript, enhancing code quality and maintainability. But, a recent shift in the development landscape has seen some developers and teams moving away from TypeScript and towards JavaScript with JSDoc. This shift has been notably championed by the Svelte team, who have decided to migrate from TypeScript to JavaScript in the Svelte 4 codebase."
description: "In the realm of web development, TypeScript has been a popular choice among developers for its ability to provide static typing to JavaScript, enhancing code quality and maintainability. But, a recent shift in the development landscape has seen some developers and teams moving away from TypeScript and towards JavaScript with JSDoc. This shift has been notably championed by the Svelte team, who have decided to migrate from TypeScript to JavaScript in the Svelte 4 codebase."
coverImage: "/assets/blog/typescript-vs-jsdoc-a-shift-in-the-development-landscape/cover.jpg"
date: "2023-05-14T15:00:28.000Z"
tags: ""
subtitle: ""
canonical: "https://codestackr.com/blog/typescript-vs-jsdoc-a-shift-in-the-development-landscape" 
author:
  name: "Jesse Hall"
  picture: "/assets/blog/authors/jesse.png"
---



# TypeScript vs JSDoc: A Shift in the Development Landscape

In the realm of web development, TypeScript has been a popular choice among developers for its ability to provide static typing to JavaScript, enhancing code quality and maintainability. But, a recent shift in the development landscape has seen some developers and teams moving away from TypeScript and towards JavaScript with JSDoc. This shift has been notably championed by the Svelte team, who have decided to migrate from TypeScript to JavaScript in the Svelte 4 codebase.

## Svelte's Shift from TypeScript to JavaScript

In a recent [interview](https://www.youtube.com/live/MJHO6FSioPI?feature=share&t=99), Svelte creator Rich Harris talked about the teams plans to migrate from TypeScript to JavaScript for the Svelte 4 codebase. This decision was met with surprise and skepticism from the development community when this [pull request](https://github.com/sveltejs/svelte/pull/8569) was discovered. TypeScript has been widely adopted for its benefits such as type checking, IntelliSense, and inline documentation. So why the switch?

The Svelte team believes that while types are fantastic, TypeScript as a language can be “a bit of a pain” to quote Rich Harris. The main issue lies in the additional tooling and points of friction that come with using TypeScript. For instance, if you're building a *library* in TypeScript and using that library in a separate project, you can't just modify the codebase and expect it to run. You would have to rebuild the code, which adds unnecessary complexity.

To circumvent these issues, the Svelte team has decided to use JavaScript with JSDoc annotations for type safety. This approach provides all the benefits of type safety without those drawbacks associated with TypeScript. The SvelteKit codebase has already adopted this approach, and the team plans to do the same for Svelte 4.

To be clear, this is about building Svelte, the library, and has nothing to do with how you will use Svelte as a developer. You will still be able to use Svelte with TypeScript.

## The Benefits of Using JSDoc

Using JSDoc with JavaScript offers several advantages. For one, it allows developers to write code that can run anywhere JavaScript runs, without the need for additional setup or tooling. This means that developers can easily copy and paste code, test it in different environments like REPL or Chrome DevTools, and we don't worry about loading or converting TypeScript.

And using JSDoc annotations for type safety in JavaScript is simpler than it might seem. Since TypeScript supports [JSDoc annotations](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html) natively (for the most part), developers only need to have TypeScript installed as a dev dependency and add the `allowJS` and `checkJS` properties set to `true` in their `tsconfig.json`. 

Let me know in the comments below if you want to learn how to use JSDoc annotations in JavaScript. If I get enough comments, I'll make a video.

## The Community's Response

The Svelte team's decision to switch from TypeScript to JavaScript has sparked a lively discussion in the development community. Some developers are skeptical of the move, while others are intrigued and open to trying out the JSDoc approach. On platforms like [Hacker News](https://news.ycombinator.com/item?id=35892250), developers have been sharing their thoughts and experiences on the topic, as they love to do on Hacker News 😅. 

In the end, will JSDoc replace TypeScript for type checking? Absolutely not! And if that's the question you're asking, you've missed the point.

TypeScript is great for application development, and it's getting better all the time. But for library development, JSDoc annotations in plain JavaScript seems like the way to go. 

The vast majority of developers are not building libraries, they're building applications.  So TypeScript will remain the main way to type check.. until JavaScript implements native type checking that is 💀. 

## The Decision is Yours!

In the end, the choice between TypeScript and JavaScript with JSDoc comes down to the specific needs and preferences of the development team or individual developer. For library authors, the simplicity and flexibility of JavaScript with JSDoc is particularly appealing. For application developers who already have a build step, TypeScript may still be the preferred choice.

Regardless of the choice, the ongoing discussion and exploration of these technologies contribute to the continuous evolution and improvement of web development practices. As developers, staying informed and open to new approaches is key to adapting and thriving in this ever-changing landscape.

Never stop learning, and never give up!

---

Check out the full video on my YouTube channel.

Help me out by liking this video and [subscribing](https://www.youtube.com/codeSTACKr/?,sub_confirmation=1) if you haven't already.

{% youtube JTYhDiJiiFI %}

## **Thanks for reading!**

Say Hello! [YouTube](https://youtube.com/codeSTACKr) | [Twitter](https://twitter.com/codeSTACKr) | [Instagram](https://www.instagram.com/codeSTACKr) | [TikTok](https://www.tiktok.com/@codestackr)
