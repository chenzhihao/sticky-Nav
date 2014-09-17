#stickyNav.js
stickyNavbar.js: A jQuery plugin make the navbar sticky, smart anchor link highlighting, smooth scrolling. Simple and powerful.

##1. Setup
Include jQuery library and stickyNav.js itself:

install by bower:
```js
bower install sticky-nav
```

```html
<!-- all these references goes before the closing body tag-->
<script src="//code.jquery.com/jquery-1.10.2.min.js"></script>
<script src="/script/stickyNav.js"></script>
```

##2. HTML Markup

Navigation:
```html
<div class="header">header</div>
<div class="banner">banner</div>
<div class="nav">
    <ul>
        <li>
            <div><a href="#we">we</a></div>
        </li>
        <li>
            <div><a href="#should">should</a></div>
        </li>
        <li>
            <div><a href="#make">make</a></div>
        </li>
        <li>
            <div><a href="#life">life</a></div>
        </li>
        <li>
            <div><a href="#easier">easier</a></div>
        </li>
    </ul>
</div>
```

Body markup, not require any addtional class name:

```html
<div id="we">
		<!-- Your content goes here -->
</div>
<div id="should">
		<!-- Your content goes here -->
</div>
<div id="make">
		<!-- Your content goes here -->
</div>
<div id="life">
		<!-- Your content goes here -->
</div>
<div id="easier">
		<!-- Your content goes here -->
</div>
```

##3. CSS:
Add `active` class into your `style.css` and style it as you like, eg.:
```css
ul.active a {
  color: #fff !important;
}
```
*Note: You can attch `active` class to li in navbar or the a in navbar directly, check the `options` object usage below.*

##4. jQuery:
Call stickyNavbar function on the navigation wrapper (`.header`), nav tag or ul tag either without options object:
```javascript

$('.nav').stickyNavbar();
```

or with the options object:

```javascript
var options = {
  header: '.header', //the header selector
  activeClass: "active", // the class you want to attach
  attachActiveClassTo: "li", // the element you want to attach active class "li"/"a"
  animationDuration: 500, // the animation duration for smooth scroll
  easing: "swing", // the animation easing for smooth scroll
  disableOnMobile: true, // if disable sticky nav on mobile
  mobileWidth: 480 // default break point for mobile width
};

$('.nav').stickyNavbar(options);
```

##5. Demo
<http://chenzhihao.github.io/sticky-Nav/>

##Contact
Copyright (C) 2014 Zhihao Chen<br>
[@Linkedin](http://www.linkedin.com/pub/zhihao-chen/54/11a/438)<br>
<cabtravis@gmail.com><br>