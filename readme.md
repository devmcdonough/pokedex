# Pokédex App

## Objective
To build a small web application with HTML, CSS, and JavaScript that loads data from an external API and enables the viewing of data points in detail.

## Context
The best way to learn about programming is to complete a project using that programming language. This project aims to do just that—have you build a complete, fully functioning JavaScript web application. Since you haven’t yet learned how to build your own API, you’ll be relying on an external data source for this project.

## User Goals
Your users should be able to view a list of data and see more details for a given data item on demand. It’s up to you to come up with a type of data you want to display; however, if you don’t have any special preferences, you can write a small Pokédex app to display a list of Pokémon.

## Key Features
- Load data from an external source (API)
- View a list of items
- On user action (e.g., by clicking on a list item), view details for that item

## Technical Requirements
- The app must load data from an external API (e.g., the Pokémon API).
- The app must display a list of items loaded from that API after the page is loaded.
- The app must enable the viewing of more details for a given list item on demand.
- The app must have CSS styling.
- The JavaScript code must be formatted according to ESLint rules.
- The JavaScript code may be formatted via Prettier.
- The JavaScript code may be manually formatted.
- The app must use at least one additional complex UI pattern, such as a modal, for details or touch interactions.
- The app may allow searching for items (e.g., searching for Pokémon).
- The app must not throw any errors when being used.
- The app should be deployed to a publicly accessible platform like GitHub Pages.
- The app must work in Chrome, Firefox, Safari, Edge, and Internet Explorer 11.
### Nice to Have:
- The app should show loading indicators while loading data.
- The app should handle errors (such as trying to load data while offline) and show user-friendly error messages.

## Project Deliverables
### Exercise 1: What is JavaScript?
- Set up the general outline of your app.
### Exercises 2 and 3: JavaScript Basics Part 1 & 2
- Learn coding practices focusing on the core principles of JavaScript: objects, arrays, conditionals, and loops.
- Set up a general dataset for your application and display it in a very basic way to the user.
### Exercises 4 and 5: JavaScript Functions Part 1 & 2
- Learn about JavaScript functions.
- Learn about the core principles of functional programming (FP) and its comparison with object-oriented programming (OOP).
- Implement a forEach loop to print details on each item in your app’s repository.
- Wrap your app’s repository in an IIFE to avoid accidentally accessing the global state.
- Update your forEach loops to work within the IIFE.
### Exercise 6: DOM Interaction
- Render static data from your data repository on the page.
- Add basic styling to your app.
- Make sure your application is accessible.
### Exercise 7: APIs, Ajax & Asynchronous Behavior
- Load data from an external API via fetch.
### Exercise 8: Complex UI Elements with JavaScript
- Add one or multiple complex UI patterns to your app (e.g., show data details in a modal).
### Exercise 9: Introduction to jQuery
- Learn about the popular JavaScript library, jQuery.
- Build a basic To-Do-List app using jQuery.
### Exercise 10: Bootstrap & UI Libraries
- Use Bootstrap to create a clean and usable design for your app.
### Exercise 11: Performance & Debugging
- Ensure your app works in all necessary browsers.
- Add ESLint rules and ensure your code passes the validation test.
- Make final adjustments to your app such as styling or usability improvements.
### Optional: Advanced Deliverables
- Touch interactions (pointer events), e.g., swiping between items
- Adding a loading indicator
- Making the app more aesthetically pleasing or including more features, such as an item search

## Installation
1. **Clone the repository**: git clone https://github.com/yourusername/pokedex-app.git
2. **Navigate to the project directory**: cd pokedex-app
3. **Install dependencies**:npm install
4. **Start the development server**: npm start

## Usage
1. **Running on a Local Server**:
Ensure you have a local server setup.
Open index.html in your browser to view the app.
2. **Running on a Deployed Server**:
Ensure the app is deployed to a platform like GitHub Pages.
Access the URL where the app is deployed to view and use it.

## Contributing
1. **Fork the repository**
2. **Create a new branch**:
git checkout -b feature/new-feature
3. **Make your changes and commit them**:
git commit -m "Add new feature"
4. **Push to the branch**:
git push origin feature/new-feature
5. **Create a pull request**

## License
This project is licensed under the MIT License

## Acknowledgements
PokéAPI
Bootstrap
jQuery
ESLint