describe('automate new window', function() {


  //the url is set as a variable
  const redirect_url = 'https://accounts.google.com'
  const url = "https://demo.spikerz.com/social-connect/"

const username = Cypress.env('username') //access the username from environment variable by creating a .env file 
const password = Cypress.env('password') //access the password from environment variable by creating a .env file 
// in the root folder/directory and create two variables "username" and "password" and set the value to the desired credentials you want to authenticate with
//Alternatively
//const username = //set the username value here
//const password = //set the password value here
// for security and best practices sake the login credentials are not included in this file



    it("handle new browser window", function () {
        
        cy.visit(url, 
            {
              failOnStatusCode: false,
              auth: {
                username: username,
                password: password
              },
            }
          )

          cy.window().then((win) => {
            cy.stub(win, 'open', url => {
                win.location.href = redirect_url;
            }).as("popup")
          })
          cy.get('.ant-card').contains('Youtube').click();
          cy.get('app-google-and-youtube-login button.ant-btn').should('be.visible').click();

          //cy.get('@popup').should('be.called')
          
          //cy.get('input[type="email"]').should('be.visible').type("youremail@gmail.com")


    })
})

// First, get the Window object and then replace 
// the window.open(url, target) function with an arrow function. 
// Then change the window location win.location.href to be the same as 
// the popup URL and then create an alias for the same as popup, so that 
// we can refer to it later using @popup. Then we click the ‘Youtube’ button, 
// which triggers javascript’s window.open() call. To make sure that the window.open 
// function call is triggered we are writing an assertion as cy.get(‘@popup’).should(“be.called”). 
// Then we are continuing the testing for the new “popup tab” inside the same tab and asserting that 
// the webpage has the text ‘Connect with Youtube’, but this could not be achieve end to end because
// google keep blocking it.

