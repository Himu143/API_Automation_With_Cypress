const envVariable = require('../../fixtures/envVariable.json');

describe('Question List', () => {
  it('User can view question list', () => {
    cy.request({
      method: 'GET',
      url:envVariable.baseUrl+'/mcq/categories',
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


