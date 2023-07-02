import homePage from "../support/pages/HomePage";
import accountPage from "../support/pages/AccountPage";
import user from '../fixtures/userlogin.json'
import { faker } from "@faker-js/faker";

describe('Order', () => {
 beforeEach(() => {
  homePage.visit()
})
user.country = faker.location.country();
user.name = faker.person.fullName();
user.mnumber = faker.phone.number('256 ####"-"#### ###');
user.zipcode = faker.location.zipCode('11111');
user.address = faker.location.streetAddress(true);
user.city = faker.location.city();
user.cc = faker.finance.creditCardNumber('6379############');





 it('Order',() => {
  accountPage.submitLoginForm(user.email, user.password);
  cy.get('[class="mat-toolbar-row"]').should('contain', 'Your Basket' );
  cy.get('.mat-icon notranslate mat-ripple mat-search_icon-search ng-tns-c254-1 material-icons mat-ligature-font mat-icon-no-color').click()