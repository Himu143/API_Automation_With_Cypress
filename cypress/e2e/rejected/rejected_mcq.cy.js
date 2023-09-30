const envVariable = require('../../fixtures/envVariable.json');

describe("Rejected for MCQ", () => {
    it("Admin can view who rejected for mcq", () => {
        cy.request({
            method: 'GET',
            url: envVariable.baseUrl + '/applicant/applicants/job/64883a026c35b54357c3f1c7/rejected/mcq',
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