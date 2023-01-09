---
title: "Simple Dark/Light Mode Theme Toggle (CSS ONLY) | UI Design"
excerpt: "There are several ways that we can implement themes. Generally, these only choose between light and dark mode, but any color scheme could be a choice. In the next several articles I'm going to show you the different ways that you can accomplish this. There will also be some extra cool things thrown in throughout each article. So be sure to read to the end."
description: "There are several ways that we can implement themes. Generally, these only choose between light and dark mode, but any color scheme could be a choice. In the next several articles I'm going to show you the different ways that you can accomplish this. There will also be some extra cool things thrown in throughout each article. So be sure to read to the end."
coverImage: "/assets/blog/dark-light-mode-theme-toggle-simple/cover.jpg"
date: "2020-07-03T05:35:07.322Z"
tags: ""
subtitle: ""
canonical: "https://codestackr.com/blog/dark-light-mode-theme-toggle-simple" 
author:
  name: "Jesse Hall"
  picture: "/assets/blog/authors/jesse.png"
---



# Simple Dark/Light Mode Theme Toggle (CSS ONLY) | UI Design

There are several ways that we can implement themes. Generally, these only choose between light and dark mode, but any color scheme could be a choice.

In the next several articles I'm going to show you the different ways that you can accomplish this. There will also be some extra cool things thrown in throughout each article. So be sure to read to the end.

The example that we'll build today is probably the easiest way to implement a mode picker.

## HTML

We'll start with the HTML:



```html index.html
<input type="checkbox" class="checkbox" id="check" />
<div class="content">
  <label class="label" for="check">
    <i class="fab fa-galactic-republic"></i>
    <i class="fab fa-rebel"></i>
    <div class="ball"></div>
  </label>
  <span class="image">
    <i class="fab fa-galactic-republic"></i>
    <i class="fab fa-rebel"></i>
  </span>
</div>
```



The HTML is very simple, but pay attention to the way in which it is layed out. We start with the input so that we can use CSS selectors to target all of the elements after it. This is very important.

This example uses FontAwesome, so be sure to include the \`.css\` CDN.

## CSS

We'll start with some custom properties and resets:



```css global.css
:root {
  --white: #f0f0f0;
  --light-grey: #e4e4e4;
  --black: #111111;
  --dark-grey: #272727;
  --bg: var(--white);
  --txt: var(--black);
  --dark-opacity: 0;
  --light-opacity: 1;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```



We'll be manipulating the custom properties later on by using the checkbox.

The content class will be our main "wrapper" for everything.



```css global.css
.content {
  background-color: var(--bg);
  color: var(--txt);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  transition: background 0.3s ease;
}
```



Next, we'll hide the checkbox. Since we linked the \`label\` to the checkbox, we will be able to toggle it by clicking on the label.



```css global.css
.checkbox {
  display: none;
}
```



Now we'll style the label:



```css global.css
.label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  background: var(--txt);
  border-radius: 5rem;
  padding: 0.5rem;
  height: 2.5rem;
  width: 5rem;
  font-size: 1.5rem;
  transition: background 0.5s ease;
  cursor: pointer;
  z-index: 1;
}

.label .ball {
  position: absolute;
  background-color: var(--bg);
  border-radius: 50%;
  top: 0.25rem;
  left: 0.25rem;
  height: 2rem;
  width: 2rem;
  transform: translateX(0);
  transition: transform 0.3s ease, background-color 0.5s ease;
}

.fa-galactic-republic {
  color: var(--black);
}

.fa-rebel {
  color: var(--white);
}
```



We are setting up transitions for the colors and position of the ball because we will be changing those later on. We want these to have smooth animations.

Next, the background image will change dependent on the theme. Here are the styles for the images:



```css global.css
.image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.image .fab {
  position: absolute;
  font-size: clamp(10rem, 80vw, 80vh);
  transition: opacity 0.3s ease-in-out 0.5s;
}
.image .fa-galactic-republic {
  color: var(--dark-grey);
  opacity: var(--dark-opacity);
}
.image .fa-rebel {
  color: var(--light-grey);
  opacity: var(--light-opacity);
}
```



And lastly, we'll set the actions that will occur when the checkbox is checked:



```css global.css
.checkbox:checked + .content .label .ball {
  transform: translateX(2.5rem);
}

.checkbox:checked + .content {
  --bg: var(--black);
  --txt: var(--white);
  --dark-opacity: 1;
  --light-opacity: 0;
}
```



## That's it!

Again, this is the first in a series of four articles that will show you different methods that you can implement to achieve theming in your project.

### Reference

- [Codepen with full code example](https://codepen.io/codeSTACKr/pen/JjGOWvJ)

---

Check out the full video on my YouTube channel.

Help me out by liking this video and [subscribing](https://www.youtube.com/codeSTACKr/?sub_confirmation=1) if you haven’t already.

%[https://youtu.be/b4FBTr5pSgw]

## **Thanks for reading!**
