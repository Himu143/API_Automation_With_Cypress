const envVariable = require('../../fixtures/envVariable.json');

describe('MCQ Update', () => {
  it('Admin can update mcq question', () => {
    cy.request({
      method: 'DELETE',
      url:envVariable.baseUrl+'/mcq/question',
      headers: {
        'authentication': envVariable.admin_token
    },
    body:{
        "id": 270
      }
   
    
    }).then((response) => {
        expect(response.status).to.eq(200);
        cy.log(response.body);
        cy.writeFile('cypress/fixtures/user.json', response.body);
           
      });
  })


})


