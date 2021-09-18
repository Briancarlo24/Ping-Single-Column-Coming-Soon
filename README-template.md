# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty. The message for this error should say _"Whoops! It looks like you forgot to add your email"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Please provide a valid email address"_

### Links

- Solution URL: [Add solution URL here](https://github.com/Briancarlo24/Ping-Single-Column-Coming-Soon.git)
- Live Site URL: [Add live site URL here](https://briancarlo24.github.io/Ping-Single-Column-Coming-Soon/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- SCSS
- Javascript
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

Learned about validating email

```html
<h1>Some HTML code I'm proud of</h1>
```

```css

}
```

```js
function validate() {
  let email = document.getElementById("email").value;
  if (validateEmail(email) && email !== "") {
    alert("email " + email + " is valid");
    inputField.value = "";
    window.location.reload();

    return true;
  } else {
    inputField.classList.add("borderChange");
    errorMessage.classList.remove("hidden");
    inputField.setAttribute("placeholder", "example@email/com");
    return false;
  }
}

// To Check the validiy of the email Address
function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

};
```

### Continued development

I will use this newly acquired knowledge to pursue my dream career as a web developer.

### Useful resources

- www.google.com - main search engine I used to search specific questions regarding the challenge
- stackoverflow - helped me with the validation of email inputs.
- w3cschools.com - help me with javascript and designs overall.

## Author

- Website - [Brian Carlo Birondo](https://github.com/Briancarlo24)
- Frontend Mentor - [@Briancarlo24](https://www.frontendmentor.io/profile/Briancarlo24)

## Acknowledgments

This is the final challenge for the newbie level free version. I am very proud of myself for completing this level of challenge. I am ready to proceed to the next difficulty and I might consider buying premium sometime in the future.
