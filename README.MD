#stickyNav.js
stickyNavbar.js: A jQuery plugin make the navbar sticky, smart anchor link highlighting, smooth scrolling. Simple and powerful.

##1. Setup
Include jQuery library and stickyNav.js itself:

```html
<!-- all these references goes before the closing body tag-->
<script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
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
<div id="lie">
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
*Note: You can attch `active` class to li in navbar or the a in navbar directly, check the `options` object below*

##4. jQuery:
Call stickyNavbar function on the navigation wrapper (`.header`), nav tag or ul tag either without options object:
```javascript

$('.nav').stickyNavbar();
```

or with the options object:
var options = {

}
$('.nav').stickyNavbar(options);
```

##5. Demo

##Contact
Copyright (C) 2014 Zhihao Chen<br>
[@Linkedin](http://www.linkedin.com/pub/zhihao-chen/54/11a/438)<br>
[@Gmail](cabtravis@gmail.com)<br>