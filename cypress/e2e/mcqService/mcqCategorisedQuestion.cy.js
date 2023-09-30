const envVariable = require('../../fixtures/envVariable.json');

describe('MCQ Categorized Questions', () => {
  it('MCQ Categorized Questions view', () => {
    cy.request({
      method: 'GET',
      url:envVariable.baseUrl+'/mcq/exam/VERB_TENSES',
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


