describe('POST HTTP Request', () => {
    it('POST HTTP Request', () => {
        cy.request({
            method: 'POST',
            url: 'https://automationexercise.com/api/searchProduct',
        }).then((response) => {
            const body = typeof response.body === "string" ? JSON.parse(response.body) : response.body
            expect(response.status).to.eq(200);
            cy.log("Response Code: " + body.responseCode);
            cy.log("Response Message: " + body.message);
        });
    });
});