# Oldagram (Instagram Clone) solo project 

- This is my solution to a solo project in [Scrimba](https://scrimba.com).
- This webpage is a simple clone of the Instagram interface, with some added functionalities such as:
    - Like posts
    - The number of likes for the posts gets updated on click and saved to the localStorage 
    - Like button icon change on click
    - Animated gradient background
    - Disable the right-click save on images, just like Instagram

## Table of contents

- [Overview](#overview)
  - [Links](#links)
  - [Demo](#demo)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### Links

- Solution URL: [Link](https://github.com/amir-the6th/Oldagram)
- Live Site URL: [Link](https://amir-the6th.github.io/Oldagram/)

### Demo
https://user-images.githubusercontent.com/69528025/207675731-46bcb785-2486-4eab-b4c6-82640bd3d671.mp4

### Screenshot

![screenshot](./screenshot.png)

## My process

### Built with

- HTML5 markup
- Pure CSS
- Vanilla JavaScript

### What I learned

- My main missions for this project were as follows:
    1. Efficiently populate posts from the `posts` array of objects without extra HTML code:
        - Defined a template structure in my HTML and used it in the JavaScript code to populate the posts
        - Dynamically generated selectors with unique ids based on the number of posts. e.g. `this['likeBtn'+p.id] = document.querySelector('#like-btn-'+p.id);`
    2. Store the number of likes for the posts so they won't reset on page refresh
        - Benefited from localStorage to set key values for the number of likes and the liked state
    3. Implement a UI similar to Instagram's, plus:
        - Animated gradient background
        - `img { pointer-events: none; }`: Disable the right-click save on images, , just like Instagram
- I built this project from scratch and added more functionalities than what was asked. 
- Hope you like it! Feel free to suggest corrections to my code 🙌🏼 

## Author

- Website - [Amir Sabagh](https://arsenicolos.com)
- GitHub - [@amir-the6th](https://github.com/amir-the6th)
- LinkedIn - [Amir Sabagh](https://linkedin.com/in/arsenicolos)

## Acknowledgments

I want to give a shout-out to the [@Scrimba](https://github.com/scrimba) CEO and professor, Per Harald Borgen([@perborgen](https://github.com/perborgen)). I am currently pursuing [The Frontend Developer Career Path](https://scrimba.com/learn/frontend) at Scrimba.
