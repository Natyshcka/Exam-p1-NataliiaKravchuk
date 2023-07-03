import homePage from "../support/pages/HomePage";
import accountPage from "../support/pages/AccountPage";
import user from '../fixtures/userlogin.json'
import addressPage from "../support/pages/AddressPage";
import deliveryPage from "../support/pages/DeliveryPage";
import paymentoptionPage from "../support/pages/PaymentOptionPage";
import { faker } from "@faker-js/faker";

it('Order', () => {
 
  homePage.visit()
  homePage.closeBanner().click()
  homePage.closeCookiesPopUP().click()
  homePage.getAccountButton().click()
  homePage.getLoginButton().click()
  accountPage.submitLoginForm(user.email, user.password)
  cy.get('[aria-label= "Show the shopping cart"]').should('be.visible')

let product = 'Banana Juice (1000ml)'
cy.log(`Order ${product}`);

homePage.getSearchButton().click()
homePage.getAddtoCardBtn().click()
cy.get('.fa-layers-counter').should('contain','1')
homePage.getOpenBasketBtn().click()
addressPage.getCheckoutBTN().click()
addressPage.getAddNewAddressBtn().click()

user.country = faker.location.country();
user.name = faker.person.fullName();
user.mnumber = faker.phone.number('256 ####"-"#### ###');
user.zipcode = faker.location.zipCode('11111');
user.address = faker.location.streetAddress(true);
user.city = faker.location.city();

addressPage.typeCountry().type(user.country)
addressPage.typeName().type(user.name)
addressPage.typeMobilePhone().type(user.mnumber)
addressPage.typeZipeCode().type(user.zipcode)
addressPage.typeAddress().type(user.address)
addressPage.typeCity().type(user.city)
addressPage.getSubbmitBtn().click()
addressPage.getAddresfromthelist().contains(user.name).click()
addressPage.getContinueBtn().click()
deliveryPage.selectAddressfromList().click()
deliveryPage.getContinueBTN().click()

user.cc = faker.finance.creditCardNumber('6379############');

paymentoptionPage.selectPaymentOption().contains( 'Add a credit or debit card' ).click()
paymentoptionPage.typeName().type(user.name)
paymentoptionPage.addNewCC().type(user.cc)
paymentoptionPage.addMonth().select('1')
paymentoptionPage.addYear().select('2080')
paymentoptionPage.getSubbmitbtn().click()
paymentoptionPage.getCartoption().last().click()

 //it('Order',() => {
  
 //cy.get('.mat-expansion-panel-header.mat-focus-indicator.ng-star-inserted').contains( 'Add a credit or debit card' ).click();
// cy.get('.mat-form-field.ng-tns-c119-26 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(user.name);
 //cy.get('.mat-form-field.ng-tns-c119-27 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(user.cc);
 //cy.get('#mat-input-12').select('1');
 //cy.get('#mat-input-13').select('2080');
 //cy.get('#submitButton').click();
 //cy.get('.mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').last().click();
 cy.get('.nextButton').click();
 cy.get('#checkoutButton').click()
 cy.get ('h1.confirmation').should('contain', 'Thank you for your purchase!' )
 

  
  




})
