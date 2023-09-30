const envVariable = require('../../fixtures/envVariable.json');

describe('Phone Interview health check',()=>{
    it('User can check health of phone interview service',()=>{
        cy.request({
            method: 'GET',
            url: envVariable.baseUrl+'/interview',
            headers:{
                'authenticaiton':envVariable.admin_token
            }
        }).then((response)=>{
            expect(response.status).to.eq(200);
            cy.log(response.body);
            cy.writeFile('cypress/fixtures/user.json', response.body)
        })
    })
})


