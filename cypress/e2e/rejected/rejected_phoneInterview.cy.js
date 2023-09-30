const envVariable = require('../../fixtures/envVariable.json');

describe("Rejected Phone Interview", () => {
    it("Admin can view who rejected for Phone Interview", () => {
        cy.request({
            method: 'GET',
            url: envVariable.baseUrl + '/applicant/applicants/job/64883a026c35b54357c3f1c7/rejected/phone-interview',
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