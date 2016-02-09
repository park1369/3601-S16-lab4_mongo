#Lab Tasks

## Part 1: Exploring the project

- Set up this project to use Travis CI, and add your build status icon to the README.

##### What are the differences between the folder structure of this project and the previous one? Note that api/pets is server-side routing specific to the database, and the client folder contains the client-side portion of the project.

The bower_components folder is now located in the client folder, as opposed to its previous location in node_modules.

##### How is app.js (at the project root) different from the ones in the previous two labs? Give examples of the kinds of urls that app.js handles, and describe where each case will be routed.

app.js is now connecting to the mongo database via mongoose.

##### The project is connected to the database via mongoose. Where is this connection set?

In app.js in the line "mongoose.connect('mongodb://127.0.0.1:27017/pets');"

##### Explain how api/pets/pets.controller.js gets added to app.js (remember this is all server-side).

api/pets/pets.controller.js gets added to the app.js using an API route with the line, "app.use('/api/pets', require('./api/pets'));"

##### Study the file api/pets/pets.controller.js, answer the following questions:
-  What kind of documents would the database contain? What is the field in the model?
The database would contain pets. The field in the model is a string called 'text.'
-  What functions are defined in the controller? How do they change the database data?
index - if there's an error, returns an error message. Otherwise returns the information about the pet.
create - if there's an error, returns an error message. Otherwise returns the actual pet.
destroy - if there's an error, returns an error message. Otherwise removes the pet.
-  How does one get or delete elements in the database?

You get elements in the database with create, and you delete elements in the database with destroy.

##### What is the purpose of index.js in the api/pets? Where is it referenced?

******The purpose of index.js is to call the pets.controller.js and route the information to the web page.

##### What views are used in the project?

404, about, main and index

##### We've seen a few different ways to display HTML in the last couple labs (straight, individual HTML pages and components being added to HTML). How are HTML files combined and displayed in this lab?

main.html is calling main.js to be displayed. index.html is calling client/app.js. Main and about are calling the navbar.html to be displayed.

>Protip: main.html isn't a full HTML document, so how does it get displayed?

##### Where is the code for the navigation bar located? How is it connected to the pages of the project?

The code for the navigation bar is located in client/components/navbar/navbar.html and client/components/navbar/navbar.controller.js. It is connected to the pages of the project when it is called in main and about.

##### client/app.js performs client-side routing. How do you think it works?

It takes in the different provides and returns the location provider.

## Part 2: Add another field to pet data.

- Add a numeric field to the pet model (say, for example, weight). Add a field to enter weight when a new pet document is created. Add a field in the main page to show the heaviest of all pets and its weight. Remember to practice TDD and perform frequent commits.

>Protip: Make sure to separate business logic functions from functions that make http calls. That is, don't have a function that performs both. This alows for optimal testing conditions.

## Part 3: Add a GPA calculator

- Add a view to enter courses and display the GPA. Add a link on the navigation bar that leads to it; add the corresponding route. Entered courses (name, credits, letter grade) must be stored in the database. Practice TDD and perform frequent commits. Don't forget to add new files to git before committing. Use the refactoring menu when renaming files (this will rename then in the git repo as well). Remember to check out you test coverage, and watch your build history on Travis-CI.
