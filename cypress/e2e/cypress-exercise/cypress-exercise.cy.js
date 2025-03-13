
describe('login popup test', () => {
  const username = "type your username here"
  const password = "type your password here"

  //the url is set as a variable
  const first_url = 'https://demo.spikerz.com/'
  const second_url = "https://demo.spikerz.com/social-connect/"


  it('login to the dev ui', () => {

    cy.visit(first_url, {
      failOnStatusCode: false,
      auth: {
        username: username,
        password: password
      },
    })
  })



  it('navigate to social demo connect', () => {
    cy.visit(second_url, 
      {
        failOnStatusCode: false,
        auth: {
          username: username,
          password: password
        },
      }
    )

    cy.get('.ant-card').contains('Youtube').click();


    cy.get('app-google-and-youtube-login button.ant-btn').should('be.visible').click();


     // Force Cypress to open the gmail window poppup in the same tab
     cy.window().then((win) => {
      cy.stub(win, 'open').callsFake((url) => {
          win.location.href = url; // Redirect to popup URL in same tab
      });
  });

    // cy.get('input[type="email"]').should('be.visible').type("three@gmail.com")
    // cy.get('input[type="password"]').should('be.visible').type("Password123")
  })
})


describe('interact with the new window', () => {

    it('it opens a new window', function() {
      cy.visit("https://accounts.google.com/")

      cy.get('input[type="email"]').type('youremailaccount@gmail.com');
      cy.contains('button', 'Next').should('be.visible').click();


      //google keep blocking the page from going through even after clicking 
      //this browser or app may not be secure 
      //cy.contains('div > span', 'Try again').should('be.visible').click({force: true});


      // cy.contains('button', 'Continue').should('be.visible').click();

      // cy.contains('label', 'Select all').should('be.visible').click();


      // cy.get('input[type="password"]').type('your-password');

    })

})

// the goal is to navigate to the youtube button and click it but instead of the google login to 
// open a new browser window it was forced to open in this same tab and type in the gmail and click next
// but google security keep blocking it, "this browser or app may not be secure"




