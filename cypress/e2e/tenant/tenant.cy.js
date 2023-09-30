const envVariable = require('../../fixtures/envVariable.json');

describe("Health Check ", () => {
    it("Augmedix service Health check", () => {
        cy.request({
            method: 'GET',
            url: envVariable.baseUrl + '/tenant/',
            headers: {
                'authentication': envVariable.admin_token
            }
        }).then((response) => {
            expect(response.status).eq(200);
            cy.log(response.body);
            cy.writeFile('cypress/fixtures/user.json', response.body);
        })
    })
})