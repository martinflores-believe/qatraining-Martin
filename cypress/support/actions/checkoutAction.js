import { btnPLaceOrder } from "../pages/checkoutPage";

export const proccedPayment = () => {
    cy.get(btnPLaceOrder).should('be.visible').click();
}