const envVariable = require('../../fixtures/envVariable.json');

describe('Admin login', () => {
  it('login with valid username and password', () => {
    cy.request({
      method: 'POST',
      url:envVariable.baseUrl+'/authentication/login',
      body: {
        "email": "hpdtrdc@exelica.com",
        "password": "rIupXlcGQT"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      var access_token = response.body.access_token;
      envVariable.admin_token = access_token;
      cy.writeFile('cypress/fixtures/envVariable.json', JSON.stringify(envVariable));
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


