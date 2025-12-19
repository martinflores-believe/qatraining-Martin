import { btnCartProduct } from "../pages/productPage";

export const addItemToCart = ( ) => {
    cy.get(btnCartProduct).should('be.visible').click();
}

export const closeModalMessage = ( ) => {
    if(cy.contains('h4', 'Added!').should('be.visible')){
        cy.get('button.close-modal').should('be.visible').click();
    }
}