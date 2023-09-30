const envVariable = require('../../fixtures/envVariable.json');

describe('MCQ Create', () => {
  it('Admin can create mcq question', () => {
    cy.request({
      method: 'POST',
      url:envVariable.baseUrl+'/mcq/question',
      headers: {
        'authentication': envVariable.admin_token
    },
    body:{
        "category": "PREPOSITIONS",
        "question": "This is ______ apple",
        "options": [
            "a",
            "an",
            "the"
        ],
        "answer": "an"
    }
   
    
    }).then((response) => {
        expect(response.status).to.eq(200);
        cy.log(response.body);
        cy.writeFile('cypress/fixtures/user.json', response.body);
           
      });
  })


})


