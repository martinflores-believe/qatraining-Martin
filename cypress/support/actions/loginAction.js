import { inputPassword, inputUser, loginButton } from "../pages/loginPage";

export const userLogin = (user, password) => {
    cy.get(inputUser).should('be.visible').type(user);
    cy.get(inputPassword).should('be.visible').type(password);
    cy.get(loginButton).should('be.visible').click();
    //cy.getByRole('button', { name: 'Login' }).click();
    //cy.getByRole('input', { name: 'email' }).type(userName);

};
