const envVariable = require('../../fixtures/envVariable.json');

describe('MCQ Update', () => {
  it('Admin can update mcq question', () => {
    cy.request({
      method: 'PUT',
      url:envVariable.baseUrl+'/mcq/question',
      headers: {
        'authentication': envVariable.admin_token
    },
    body:{
        "id": 15,
        "category": "PREPOSITIONS",
        "question": "The cat jumped __________ the table and knocked over a vase.",
        "options": [
            "Through",
            "Above",
            "Onto",
            "behind"
        ],
        "answer": "Onto"
    }
   
    
    }).then((response) => {
        expect(response.status).to.eq(200);
        cy.log(response.body);
        cy.writeFile('cypress/fixtures/user.json', response.body);
           
      });
  })


})


