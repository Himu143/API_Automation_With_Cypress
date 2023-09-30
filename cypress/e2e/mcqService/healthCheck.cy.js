const envVariable = require('../../fixtures/envVariable.json');

describe('MCQ Health check', () => {
  it('User can check health of mcq service', () => {
    cy.request({
      method: 'GET',
      url:envVariable.baseUrl+'/mcq',
      headers: {
        'authentication': envVariable.admin_token
    },
   
    
    }).then((response) => {
        expect(response.status).to.eq(200);
        cy.log(response.body);
        cy.writeFile('cypress/fixtures/user.json', response.body);
           
      });
  })


})


