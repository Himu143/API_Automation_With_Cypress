const envVariable = require('../../fixtures/envVariable.json');

describe('Health check up for video assessment', () => {
  it('Admin can health check up for video assessment', () => {
    cy.request({
      method: 'GET',
      url:envVariable.baseUrl+'/video',
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