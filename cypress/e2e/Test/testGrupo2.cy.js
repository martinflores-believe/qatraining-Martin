import { deleteItem, ProceedCheckout } from "../../support/actions/cartAction";
import { proccedPayment } from "../../support/actions/checkoutAction";
import { goCartPage, goLoginPage, openSubCatDress, openWomanCategory, selectItem1Woman, selectItem2Woman, verifyOpenCatWoman } from "../../support/actions/homeAction";
import { userLogin } from "../../support/actions/loginAction";
import { confirmPayment, fillCardData } from "../../support/actions/paymentAction";
import { addItemToCart, closeModalMessage } from "../../support/actions/productAction";
import { idProduct } from "../../support/pages/cartPage";
import { userMail, userpassword } from "../../support/pages/loginPage";
import { cardCVC, cardMonth, cardName, cardNumber, cardYear } from "../../support/pages/paymentPage";

describe('TEST - GRUPO 1', {testIsolated: false}, () => {
    before(() => {
        cy.visit('https://automationexercise.com/')
    });

    it('TestGrupo1', () => {
        goLoginPage();
        userLogin(userMail, userpassword);
        openWomanCategory();
        verifyOpenCatWoman();
        openSubCatDress();
        selectItem1Woman();
        addItemToCart();
        closeModalMessage();
        openWomanCategory();
        verifyOpenCatWoman();
        openSubCatDress();
        selectItem2Woman();
        addItemToCart();
        closeModalMessage();
        goCartPage();
        //const firstProductId = idFirstItem();
        deleteItem(idProduct);
        //deleteItem('3');
        ProceedCheckout();
        proccedPayment();
        fillCardData(cardName, cardNumber, cardCVC, cardMonth, cardYear);
        confirmPayment();
    });
})