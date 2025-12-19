import { btnPayConfirm, inputCardCVC, inputCardExpiryMonth, inputCardExpiryYear, inputCardName, inputCardNumber } from "../pages/paymentPage";

export const fillCardData = ( name, card, cvc, month, year) => {
    cy.get(inputCardName).should('be.visible').type(name);
    cy.get(inputCardNumber).should('be.visible').type(card);
    cy.get(inputCardCVC).should('be.visible').type(cvc);
    cy.get(inputCardExpiryMonth).should('be.visible').type(month);
    cy.get(inputCardExpiryYear).should('be.visible').type(year);
}

export const confirmPayment = () => {
    cy.get(btnPayConfirm).should('be.visible').click();
}