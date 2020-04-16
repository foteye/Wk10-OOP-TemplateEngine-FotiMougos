# OOP Homework: Template Engine - Employee Summary
Homework Week 10 - Template Engine - Employee Summary<br>
Author: Foti Mougos<br>
[Deployed At Github](https://foteye.github.io/Wk10-OOP-TemplateEngine-FotiMougos/ "Deployed at Github")

### Brief:
I have created a command-line application that dynamically generates a README.md from a user's input. The application will be invoked with the following command:

```sh
node index.js
```
The user will be prompted for their GitHub username, which will be used to make a call to the GitHub API to retrieve their email and profile image. They will then be prompted with questions about their project.

The README will be populated with the following:

* Project title
* Description
* Table of Contents
* Installation
* Usage
* License
* Contributing
* Tests
* Questions
  * User GitHub profile picture
  * User GitHub email


### Lessons Learned:

  * You would probably never do this in real world. I think github support templates already.
  * Good chance to experiment with async and awaits etc. ES6 has some awesome functionality that I've never had an opportunity to use.
  * Node is a bit of a different beast, different way of thinking when you don't have to worry about the DOM
  * Not a single 'var' in sight. Life is good.
  * Template literals will take the whitespace on each line
