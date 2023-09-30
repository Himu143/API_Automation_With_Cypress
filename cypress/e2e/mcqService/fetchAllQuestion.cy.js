const envVariable = require('../../fixtures/envVariable.json');

describe('Fetch all questions', () => {
  it('Admin can fetch all questions', () => {
    cy.request({
      method: 'GET',
      url:envVariable.baseUrl+'/mcq/questions',
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


