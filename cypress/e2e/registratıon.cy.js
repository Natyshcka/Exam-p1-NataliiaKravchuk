import homePage from "../support/pages/HomePage"
import accountPage from "../support/pages/AccountPage"
import {faker} from '@faker-js/faker'
import user from "../fixtures/user.json"
import RegistrationPage from "../support/pages/RegistrationPage"


describe('Registration min password', () => {
  beforeEach(() => {
    homePage.visit();
    homePage.closeBanner().click()
    homePage.closeCookiesPopUP().click()
    homePage.getAccountButton().click()
    homePage.getLoginButton().click()
  })

  user.email = faker.internet.email();
  user.password = faker.internet.password('#####');

 it('registration min sign in password', () => {
   RegistrationPage.getLoginPage().click()
   RegistrationPage.typeEmail().type(user.email)
   RegistrationPage.typePassword().type(user.password)
   RegistrationPage.repeatTypePassword().type(user.password)
   RegistrationPage.showPasswordAdvice().click()
   RegistrationPage.getSecurityQuestionList().click()
   RegistrationPage.selectSecurityQuestionList().click()
   RegistrationPage.typeUserAnswer().type(user.answer)
   RegistrationPage.getRegistrationButton().click()
   cy.get('.mat-simple-snack-bar-content')
   .should('have.text', 'Registration completed successfully. You can now log in.')

  })

   it('authorithation min sign password',() => {
      accountPage.submitLoginForm(user.email, user.password)
      cy.get('[class="mat-toolbar-row"]').should('contain', 'Your Basket' )
    
  })
})

  describe('Registration random password', () => {
    beforeEach(() => {
    homePage.visit();
    homePage.closeBanner().click()
    homePage.closeCookiesPopUP().click()
    homePage.getAccountButton().click()
    homePage.getLoginButton().click()
    })
  
  user.email = faker.internet.email();
  user.password = faker.internet.password();

   it('registration random password', () => {
    RegistrationPage.getLoginPage().click()
    RegistrationPage.typeEmail().type(user.email)
    RegistrationPage.typePassword().type(user.password)
    RegistrationPage.repeatTypePassword().type(user.password)
    RegistrationPage.showPasswordAdvice().click()
    RegistrationPage.getSecurityQuestionList().click()
    RegistrationPage.selectSecurityQuestionList().click()
    RegistrationPage.typeUserAnswer().type(user.answer)
    RegistrationPage.getRegistrationButton().click()
    cy.get('.error').should('have.text', 'Email must be unique')

})

 it('authorithation random password',() => {
      accountPage.submitLoginForm(user.email, user.password)
      cy.get('[class="mat-toolbar-row"]').should('contain', 'Your Basket' )
    

  })
})

  describe('Registration witout key question', () => {
    beforeEach(() => {
    homePage.visit();
    homePage.closeBanner().click()
    homePage.closeCookiesPopUP().click()
    homePage.getAccountButton().click()
    homePage.getLoginButton().click()
      
    })
  
  user.email = faker.internet.email({ firstName: 'Jeanne', lastName: 'Doe', provider: 'example.fakerjs.dev' });
  user.password = faker.internet.password();
  
  it('registration witout key question', () => {
   RegistrationPage.getLoginPage().click()
   RegistrationPage.typeEmail().type(user.email)
   RegistrationPage.typePassword().type(user.password)
   RegistrationPage.repeatTypePassword().type(user.password)
   RegistrationPage.showPasswordAdvice().click()
   RegistrationPage.typeUserAnswer().type(user.answer)
    cy.get('[id="registerButton"]').should('be.disabled')
    
})



})