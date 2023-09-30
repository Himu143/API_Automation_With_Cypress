const envVariable = require('../../fixtures/envVariable.json');

describe('Applicant List', () => {
  it('User can view applicant list', () => {
    cy.request({
      method: 'GET',
      url:envVariable.baseUrl+'/applicant/applicants',
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


