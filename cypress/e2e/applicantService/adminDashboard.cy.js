const envVariable = require('../../fixtures/envVariable.json');

describe('Admin Dashboard', () => {
  it('Admin can view user application', () => {
    cy.request({
      method: 'GET',
      url: envVariable.baseUrl + '/applicant/stats/job/64883a026c35b54357c3f1c7',
      headers: {
        'authentication': envVariable.admin_token
      },
    
    }).then((response) => {
      // Ensure the request was successful (status code 200)
      expect(response.status).to.eq(200);

      // Log the response body to the Cypress logs
      cy.log(JSON.stringify(response.body));

      // Write the response body to a JSON file in fixtures
      cy.writeFile('cypress/fixtures/user.json', response.body);
    });
  });
});
