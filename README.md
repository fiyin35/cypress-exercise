# cypress-exercise
# A cypress automation script to authenticate using a provided credentials and navigate to the instructed page

# SETUP GUIDE
# create a new folder/directory, open an IDE/text editor preferably Visual Studio Code
# navigate to the newly created folder from Vscode, open a terminal from within VScode
# type this command to clone the repository to your local machine "git clone https://github.com/fiyin35/cypress-exercise.git", run command "npm install" it's assumed there is a node js installed on the machine.
# after successfully running the previous commands, run "npx cypress open" this will open Cypress GUI (Graphical User Interface) click on "E2E Testing" click on any of the browser option, click on  "Start E2E Testing in Chrome"
# and finally click on "cypress-exercise.cy.js" or "test.cy.js"
git clone https://github.com/fiyin35/cypress-exercise.git
npm install
npx cypress open


# cypress-exercise.cy.js
# the goal is to navigate to the youtube button and click it but instead of the google login to 
# open a new browser window it was forced to open in this same tab and type in the gmail and click next
# but google security keep blocking it, "this browser or app may not be secure"

# test.cy.js
# First, get the Window object and then replace 
# the window.open(url, target) function with an arrow function. 
# Then change the window location win.location.href to be the same as 
# the popup URL and then create an alias for the same as popup, so that 
# we can refer to it later using @popup. Then we click the ‘Youtube’ button, 
# which triggers javascript’s window.open() call. To make sure that the window.open 
# function call is triggered we are writing an assertion as cy.get(‘@popup’).should(“be.called”). 
# Then we are continuing the testing for the new “popup tab” inside the same tab and asserting that 
# the webpage has the text ‘Connect with Youtube’, but this could not be achieve end to end because
# google keep blocking it.


