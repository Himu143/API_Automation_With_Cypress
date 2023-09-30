const envVariable = require('../../fixtures/envVariable.json');

describe('Applicant List', () => {
  it('User can view applicant list', () => {
    cy.request({
      method: 'GET',
      url:envVariable.baseUrl+'/career/jobs',
  
    
    }).then((response) => {
        expect(response.status).to.eq(200);
        cy.log(response.body);
        cy.writeFile('cypress/fixtures/user.json', response.body);
        
        
      });
  })


})


