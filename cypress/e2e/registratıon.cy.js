import homePage from "../support/pages/HomePage"
import accountPage from "../support/pages/AccountPage"
import {faker} from '@faker-js/faker'
import user from "../fixtures/user.json"

describe('Registration min password', () => {
  beforeEach(() => {
    homePage.visit()
    
  })

  user.email = faker.internet.email();
  user.password = faker.internet.password({ length: 5 });

 it('registration min sign in password', () => {
    cy.get('[routerlink="/register"]').click()
    cy.get('[id="emailControl"]').type(user.email)
    cy.get('[aria-label="Field for the password"]').type(user.password)
    cy.get('[id=repeatPasswordControl]').type(user.password)
    cy.get('[class="mat-slide-toggle-bar"]').click()
    cy.get('[class="mat-form-field-infix ng-tns-c119-16"]').click()
    cy.get('[id="mat-option-6"]').click()
    cy.get('[class="mat-form-field-infix ng-tns-c119-18"]').type(user.answer)
    cy.get('[id="registerButton"]').click()

  })

   it('authorithation min sign password',() => {
      accountPage.submitLoginForm(user.email, user.password)
      cy.get('[class="mat-toolbar-row"]').should('contain', 'Your Basket' )
    
  })
})

  describe('Registration random password', () => {
    beforeEach(() => {
      homePage.visit()
      
    })
  
  user.email = faker.internet.email();
  user.password = faker.internet.password();

   it('registration random password', () => {
      cy.get('[routerlink="/register"]').click()
      cy.get('[id="emailControl"]').type(user.email)
      cy.get('[aria-label="Field for the password"]').type(user.password)
      cy.get('[id=repeatPasswordControl]').type(user.password)
      cy.get('[class="mat-slide-toggle-bar"]').click()
      cy.get('[class="mat-form-field-infix ng-tns-c119-16"]').click()
      cy.get('[id="mat-option-6"]').click()
      cy.get('[class="mat-form-field-infix ng-tns-c119-18"]').type(user.answer)
      cy.get('[id="registerButton"]').click()
})

 it('authorithation random password',() => {
      accountPage.submitLoginForm(user.email, user.password)
      cy.get('[class="mat-toolbar-row"]').should('contain', 'Your Basket' )
    

  })
})

  describe('Registration witout key question', () => {
    beforeEach(() => {
      homePage.visit()
      
    })
  
  user.email = faker.internet.email({ firstName: 'Jeanne', lastName: 'Doe', provider: 'example.fakerjs.dev' });
  user.password = faker.internet.password();
  
  it('registration witout key question', () => {
    cy.get('[routerlink="/register"]').click()
    cy.get('[id="emailControl"]').type(user.email)
    cy.get('[aria-label="Field for the password"]').type(user.password)
    cy.get('[id=repeatPasswordControl]').type(user.password)
    cy.get('[class="mat-slide-toggle-bar"]').click()
    cy.get('[class="mat-form-field-infix ng-tns-c119-18"]').type(user.answer)
    cy.get('[id="registerButton"]').should('be.disabled')
    
})



})