const envVariable = require('../../fixtures/envVariable.json');

describe('User login', () => {
  it('login with valid username and password', () => {
    cy.request({
      method: 'POST',
      url:envVariable.baseUrl+'/authentication/login',
      body: {
        "email": "yhdswtfzagdgj@internetkeno.com",
        "password": "lYJCseLFVE"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      
      
    });
  })


  it('login with invalid username and password', () => {
    cy.request({
      method: 'POST',
      url: envVariable.baseUrl + '/authentication/login',
      body: {
        "email": "invaliduser@example.com",
        "password": "wrongpassword"
      },
      failOnStatusCode: false // Prevent Cypress from failing the test on non-200 responses
    }).then((response) => {
      expect(response.status).to.eq(401); // Expecting Unauthorized status code
    });
  });

})


