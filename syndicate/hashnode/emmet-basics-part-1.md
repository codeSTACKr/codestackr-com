---
title: "Emmet Part 1 - Basics"
excerpt: "Emmet is a FREE plugin for many popular code editors which helps you write HTML and CSS fast! Emmet has support for many editors, including Sublime Text, Atom, Visual Studio Code, and many others. VS Code comes with Emmet pre-installed."
description: "Emmet is a FREE plugin for many popular code editors which helps you write HTML and CSS fast! Emmet has support for many editors, including Sublime Text, Atom, Visual Studio Code, and many others. VS Code comes with Emmet pre-installed."
coverImage: "/assets/blog/emmet-basics-part-1/cover.png"
date: "2020-05-10T16:38:29.000Z"
tags: ""
subtitle: ""
canonical: "https://codestackr.com/blog/emmet-basics-part-1" 
author:
  name: "Jesse Hall"
  picture: "/assets/blog/authors/jesse.png"
---



# Emmet Part 1 - Basics

Emmet is a FREE plugin for many popular code editors which helps you write HTML and CSS fast! Emmet has support for many editors, including Sublime Text, Atom, Visual Studio Code, and many others. VS Code comes with Emmet pre-installed.

When you start typing an Emmet abbreviation, you will see the abbreviation displayed in the suggestion list.

![Emmet In Action](https://raw.githubusercontent.com/codeSTACKr/codestackr-com/main/public/assets/blog/emmet-basics-part-1/demo.gif)

In this post, we cover the following topics:  
📌 Tags  
📌 Siblings  
📌 Children  
📌 Class  
📌 Id  
📌 Id & Class  
📌 Content  
📌 Multiply

> Check out [Part 2](https://www.codestackr.com/blog/emmet-basics-part-2/)!

## Tags

Basic abbreviations can be used to quickly create HTML tags.

> `div`



```html
<div></div>
```



> `p`



```html
<p></p>
```



> `h1`



```html
<h1></h1>
```



## Siblings

To create a set of HTML tags as siblings just use `+` in between each abbreviation.

> `hdr+sect+ftr`



```html
<header></header> <section></section> <footer></footer>
```



## Children

Child elements can be created by using `>` in between each abbreviation.

> `sect>ul>li`



```html
<section> <ul> <li></li> </ul> </section>
```



## Class

In order to create elements with classes just append the class to the abbreviation using `.`

> `h1.center`



```
<h1 class="center"></h1>
```



## Id

To add an Id to an element, append the Id to the abbreviation using `#`

> `h1#header`



```html
<h1 id="header"></h1>
```



## Id & Class

You can include multiple attributes on an element abbreviation.

> `h1#header.center`



```html
<h1 id="header" class="center"></h1>
```



## Content

Text content of an element can be included by wrapping the content with `{ }`

> `p{This is a paragraph.}`



```html
<p>This is a paragraph.</p>
```



## Multiply

We can create multiple elements by multiplying them using `*`

> `ul>li\*4`



```html
<ul> <li></li> <li></li> <li></li> <li></li> </ul>
```



---

Check out the full video on my YouTube channel.

Help me out by liking this video and [subscribing](https://www.youtube.com/codeSTACKr/?,sub_confirmation=1) if you haven't already.

%[https://youtu.be/EzGWXTASWWo]

## **Thanks for reading!**
