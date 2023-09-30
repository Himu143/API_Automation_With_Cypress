const envVariable = require('../../fixtures/envVariable.json');

describe('Question List', () => {
  it('User can view question list', () => {
    cy.request({
      method: 'POST',
      url:envVariable.baseUrl+'/interview/create-answer',
      headers: {
        'authentication': envVariable.admin_token
    },
    body:{
        

    }
    
    }).then((response) => {
        expect(response.status).to.eq(200);
        cy.log(response.body);
        cy.writeFile('cypress/fixtures/user.json', response.body);
        
        
      });
  })


})


