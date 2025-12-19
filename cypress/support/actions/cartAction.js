import { itemsOfTable, btnCheckout } from "../pages/cartPage";

export const deleteItem = ( idProduct ) => {
    cy.get(`a.cart_quantity_delete[data-product-id="${idProduct}"]`).should('be.visible').click();
}

export const idFirstItem = ( ) => {
    cy.get(itemsOfTable).first().invoke('attr', 'id')
        .then((rowId) => {
            const productId = rowId.replace('product-', '');
            cy.log('Primer product ID: ' + productId);
            return productId;
    });
    /*
        cy.get('#cart_info_table tbody tr') → obtiene todas las filas del carrito
        .first() → selecciona la primera fila
        .invoke('attr', 'id') → lee el atributo id
        product-3 → se transforma a 3
    */
}

export const ProceedCheckout = ( ) => {
    cy.get(btnCheckout).should('be.visible').click();
}