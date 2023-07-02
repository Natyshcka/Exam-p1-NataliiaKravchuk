import homePage from "../support/pages/HomePage";
import accountPage from "../support/pages/AccountPage";
import user from '../fixtures/userlogin.json'
import { faker } from "@faker-js/faker";

function clickRadioAndIncrement() {
  cy.get('#mat-radio-118.mat-radio-label.mat-radio-container.mat-radio-outer-circle').then(($radio) => {
    
    const currentValue = parseInt($radio.attr('aria-checked'));
    cy.wrap($radio).click();

    const newValue = currentValue + 1;
    cy.wrap($radio).invoke('attr', 'aria-checked', newValue.toString());
  });

  cy.get('.nextButton').click();
}

describe('Order', () => {
  beforeEach(() => {
    homePage.visit();
  });

  it('Order', () => {
    user.country = faker.location.country();
    user.name = faker.person.fullName();
    user.mnumber = faker.phone.number('256 ####"-"#### ###');
    user.zipcode = faker.location.zipCode('11111');
    user.address = faker.location.streetAddress(true);
    user.city = faker.location.city();
    user.cc = faker.finance.creditCardNumber('6379############');

    accountPage.submitLoginForm(user.email, user.password);
    cy.get('[class="mat-toolbar-row"]').should('contain', 'Your Basket' );
    cy.get('[style="left: calc((25% - 22.5px + 30px) * 1); width: calc((25% - 22.5px) * 1 + 0px); margin-top: 0px; padding-top: calc((25% - 22.5px) * 1 + 0px);"] > .mat-grid-tile-content > .mat-card > [style="display: flex; justify-content: center;"] > .mat-focus-indicator').click();
    cy.get('[aria-label="Show the shopping cart"]').click();
    cy.wait(10000);
    cy.get('[id="checkoutButton"]').click();
    cy.wait(10000);
    cy.get('[aria-label="Add a new address"]').click();
    cy.get('[placeholder="Please provide a country."]').type(user.country);
    cy.get('[placeholder="Please provide a name."]').type(user.name);
    cy.get('[placeholder="Please provide a mobile number."]').type(user.mnumber);
    cy.get('[placeholder="Please provide a ZIP code."]').type(user.zipcode);
    cy.get('[placeholder="Please provide an address."]').type(user.address);
    cy.get('[placeholder="Please provide a city."]').type(user.city);
    cy.get('[id="submitButton"]').click();
    cy.wait(9000);
    cy.get('.mat-row.cdk-row.ng-star-inserted').contains(user.name).click();
    cy.get('[aria-label="Proceed to payment selection"]').click();
    cy.wait(5000);
    cy.get('[class="svg-inline--fa fa-rocket fa-w-16"]').click();
    cy.get('[aria-label="Proceed to delivery method selection"]').click();
    cy.get('.mat-expansion-panel-header.mat-focus-indicator.ng-star-inserted').contains('Add a credit or debit card').click();
    cy.get('.mat-form-field.ng-tns-c119-26 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(user.name);
    cy.get('.mat-form-field.ng-tns-c119-27 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(user.cc);
    cy.get('#mat-input-12').select('1');
    cy.get('#mat-input-13').select('2080');
    cy.get('#submitButton').click();

    // Виклик хелпер функції
    clickRadioAndIncrement();

    cy.get('#checkoutButton').click();
    cy.get('[class="confirmation"]').should('contain', 'Thank you for your order purchase!');
  });
});
