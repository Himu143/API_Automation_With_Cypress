const envVariable = require('../../fixtures/envVariable.json');

describe("Force to forward ", () => {
    it("Admin can force applicant to go forward", () => {
        cy.request({
            method: 'GET',
            url: envVariable.baseUrl + '/applicant/force-accept',
            headers: {
                'authentication': envVariable.admin_token
            },
            body: {
                "applicant_id": "64d865cbc996d383e070f404"
            }
        }).then((response) => {
            expect(response.status).eq(200);
            cy.log(response.body);
            cy.writeFile('cypress/fixtures/user.json', response.body);
        })
    })
})