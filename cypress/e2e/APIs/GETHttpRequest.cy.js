describe('GET HTTP Request', () => {
    it('GET HTTP Request', () => {

        cy.fixture('apiData/GETdata.json').then((data) => {
            const email = data.email;
            cy.request({
            method: 'GET',
            url: 'https://automationexercise.com/api/getUserDetailByEmail',
            qs: {
                email: email
            }
            }).then((response) => {
                const body = typeof response.body === "string" ? JSON.parse(response.body) : response.body
                expect(response.status).to.eq(200);
                expect(body.responseCode).to.eq(200);
                cy.log("Response Code: " + body.responseCode);
                cy.log(JSON.stringify(body.user, null, 2));
                expect(body.user.email).to.eq(email);
            })
        })
        
    })
})