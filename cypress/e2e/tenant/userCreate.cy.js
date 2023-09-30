const envVariable = require('../../fixtures/envVariable.json');

describe("Health Check ", () => {
    it("Augmedix service Health check", () => {
        cy.request({
            method: 'POST',
            url: envVariable.baseUrl + '/tenant/create-user',
            headers: {
                'authentication': envVariable.admin_token
            },
            body:{
                "account_status": "ACTIVE",
                "role": "ADMIN",
                "company_id": 3,
                "first_name": "Kazi Tajul",
                "last_name": "Islam",
                "email": "tguqjv@pretreer.com",
                "mobile": "01774992060",
                "address": "Dhanmondi"
            }
        }).then((response) => {
            expect(response.status).eq(200);
            cy.log(response.body);
            cy.writeFile('cypress/fixtures/user.json', response.body);
        })
    })
})