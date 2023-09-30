const envVariable = require('../../fixtures/envVariable.json');

describe('Selected for Interview', () => {
  it('Admin can view who selected for Interview', () => {
    cy.request({
      method: 'GET',
      url:envVariable.baseUrl+'/applicant/applicants/job/64883a026c35b54357c3f1c7',
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


