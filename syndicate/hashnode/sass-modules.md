---
title: "The Sass Module System"
excerpt: "Today we are going to talk about a feature of Sass that no one else seems to be talking about. The deprecation of the @import rule and implementation of the new Module System including the new @use rule. I recently came across this in the Sass documentation."
description: "Today we are going to talk about a feature of Sass that no one else seems to be talking about. The deprecation of the @import rule and implementation of the new Module System including the new @use rule. I recently came across this in the Sass documentation."
coverImage: "/assets/blog/sass-modules/cover.png"
date: "2020-04-29T16:48:11.000Z"
tags: ""
subtitle: ""
canonical: "https://codestackr.com/blog/sass-modules" 
author:
  name: "Jesse Hall"
  picture: "/assets/blog/authors/jesse.png"
---



# The Sass Module System

Today we are going to talk about a feature of Sass that no one else seems to be talking about. The deprecation of the `@import` rule and implementation of the new Module System including the new `@use` rule. I recently came across this in the Sass documentation.

![Sass News](https://raw.githubusercontent.com/codeSTACKr/codestackr-com/main/public/assets/blog/sass-modules/1.png)

%[https://youtu.be/tLqqi5gyxQg]

> If you are interested in more content like this, feel free to [subscribe](https://www.youtube.com/codeSTACKr/?sub_confirmation=1) to my YouTube channel.

## What is the Module System and @use?

In October of 2019, the Module System became available. The heart of the Module System is the `@use` rule. This rule makes CSS, variables, mixins, and functions from another stylesheet accessible in the current stylesheet. By default, variables, mixins, and functions are available in a namespace based on the basename of the URL.



```scss
@use "colors";

.element {
    background-color: colors.$body-bg;
}
```



In addition to namespacing, there are a few important differences between `@use` and `@import`:

-   `@use` only executes a stylesheet and includes its CSS once, no matter how many times that stylesheet is used.
-   `@use` only makes names available in the current stylesheet, as opposed to globally.
-   Members whose names begin with `-` or `_` are private to the current stylesheet with `@use`.

## Namespaces

Let's take a closer look at namespaces and why this is a really awesome feature.

So, here we have two component files. One for our hero component and one for our card component. Generally we would have to uniquely name our variables to avoid any conflicts. But let's just say we "accidentally" named two variables the same.



```scss _hero-component.scss
$width: 100vw;
```

---

```scss _card-component.scss
$width: 80%;
```



If we used `@import` to bring these in, we'll run into some issues. `@import` will always evaluate the member that has been imported last. So this will always evaluate to the card width since it was the last to load.



```scss
@import 'hero-component';
@import 'card-component';

.hero {
    width: $width; // 80%
}

.card {
    width: $width; // 80%
}
```



This is where the `@use` rule comes in.



```scss
@use 'hero-component';
@use 'card-component';

.hero {
    width: hero-component.$width; // 100vw
}

.card {
    width: card-component.$width; // 80%
}
```



So now we no longer have to get creative with our variable names.

## Controlling Namespaces

Now, you might think that's more work having to type the namespaces. Well, we can actually control the namespace of a module. It can be set explicitly using `as`.



```scss
@use 'hero-component' as hero;
@use 'card-component' as card;

.hero {
    width: hero.$width;
}

.card {
    width: card.$width;
}
```



We can even promote modules to the top-level namespace using `as *`.



```scss
@use 'colors' as *;

.element {
    background-color: $bgColor;
}
```



But we have to be careful with this and ensure that we do not introduce any conflicts. If conflicts are found, the compiler with throw an error.

## Configuring Modules

Another great feature of the Module System is the ability to configure the default values of a module. A stylesheet can define variables with the `!default` flag to make them configurable. Here we have a library that defines a default `$border-radius`:



```scss _library.scss
$border-radius: 0.25rem !default;

.card {
    border-radius: $border-radius;
}
```



We can modify the default value like this:



```scss style.scss
@use 'library' with (
    $border-radius: 0.1rem
);
```



And here is the resulting CSS:



```css
.card {
    border-radius: 0.1rem;
}
```



## Private Members

There's never been a way to have private members in a Sass stylesheet before the Module System. Now we can define private members by starting its name with either `-` or `_`. These members will work just like normal within the stylesheet that defines them, but they won't be part of a module's public API. That means stylesheets that load your module can't see them!

In this example, we define a private variable, `$-radius`. We can `@include` the mixin but we cannot use the variable. That will result in an error during compilation.



```scss _corners.scss
$-radius: 3px;

@mixin rounded {
    border-radius: $-radius;
}
```

---

```scss style.scss
@use "corners";

.button {
    @include corners.rounded;

    // This is an error! $-radius isn't visible outside of `_corners.scss`.
    padding: 5px + corners.$-radius;
}
```



## What Now??

So what do these changes mean for developers? As mentioned before, Sass has provided a migration tool that will aid in converting your existing `@import` based code to `@use` based.

Fortunately we have some time before `@import` gets removed from Sass. The deprecation is set for October 2021 and support will end October 2022.

But I would recommend that you start using `@use` and try to forget about `@import`.

One downside is the current compiler support for the Module System. Currently only Dart Sass supports the compilation of the `@use` rule. Support within LibSass is not available yet. The worst part about this is that the VS Code extension "Live Sass Compiler" uses LibSass. So if you want to use these new features you will have to ditch that extension and start using the CLI Sass compiler. This is very easy to use but it's just annoying that we cannot use a tool that a lot of us are used to. Hopefully LibSass will be updated with the new features soon, but there is no current ETA that I could find.

### References

-   [@use Documentation](https://sass-lang.com/documentation/at-rules/use)
-   [Sass Migration Tool](https://sass-lang.com/documentation/cli/migrator)
-   [@import Depreciation Timeline](https://github.com/sass/sass/blob/master/accepted/module-system.md#timeline)