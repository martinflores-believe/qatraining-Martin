import { cartLink, categoriaDamas, categoriaWomanAbierto, ItemWomanDress1, ItemWomanDress2, ItemWomanDress3, loginLink, logoutLink, subCategoriaDress, subCategoriaDress2 } from "../pages/homePage";

/// Funciones para el MENU HEADER
export const goLoginPage = ( ) => {
    cy.get(loginLink).should('be.visible').click();
}

export const goLogoutPage = ( ) => {
    cy.get(logoutLink).should('be.visible').click();
}

export const goCartPage = ( ) => {
    cy.get(cartLink).eq(0).click();
    //cy.get('a[href="/view_cart"]').eq(1).click();
}


/// Funciones para el MENU LEFT

export const openWomanCategory = ( ) => {
    cy.get(categoriaDamas).should('be.visible').click();
}

export const openSubCatDress = ( ) => {
    //cy.get(subCategoriaDress).should('be.visible').click();
    cy.get(subCategoriaDress2).first().click();
}

export const verifyOpenCatWoman = ( ) => {
    cy.get(categoriaWomanAbierto).should('be.visible');

    cy.get('#Women ul li a')
      .should('have.length', 3) 
      .each(($el) => {
        cy.wrap($el).should('be.visible'); 
    });
}

export const selectItem1Woman = ( ) => {
    cy.get(ItemWomanDress1).should('be.visible').click();

}
export const selectItem2Woman = ( ) => {
    cy.get(ItemWomanDress2).should('be.visible').click();

}
export const selectItem3Woman = ( ) => {
    cy.get(ItemWomanDress3).should('be.visible').click();

}

/*
describe('Acordeón de un nivel', () => {
  it('Abre el menú y valida los links', () => {

    // 1. Abrir el primer nivel
    cy.get('a[href="#Women"]')
      .should('be.visible')
      .click();

    // 2. Validar que el contenedor esté visible
    cy.get('#Women')
      .should('be.visible');

    // 3. Validar que los links existan
    cy.get('#Women ul li a')
      .should('have.length', 3)       // Deben ser 3 links
      .each(($el) => {
        cy.wrap($el).should('be.visible'); // Cada link visible
      });

    // 4. (Opcional) Hacer click en el primer link
    cy.get('#Women ul li a').first().click();
  });
});
*/