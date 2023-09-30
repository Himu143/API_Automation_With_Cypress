const envVariable = require('../../fixtures/envVariable.json');

describe('View Application', () => {
  it('User can view application', () => {
    cy.request({
      method: 'GET',
      url:envVariable.baseUrl+'/applicant/applicants/64bcdb98f9e21e3a4ed3d451',
      headers: {
        'authentication': envVariable.admin_token
    }
    
    }).then((response) => {
        expect(response.status).to.eq(200);
        cy.log(response.body);
        cy.writeFile('cypress/fixtures/user.json', response.body);
        
        
      });
  })


})


