import homePage from "../support/pages/HomePage";
import accountPage from "../support/pages/AccountPage";
import user from '../fixtures/userlogin.json'

describe('Authorithation', () => {
 beforeEach(() => {
  homePage.visit()
  homePage.closeBanner().click()
    homePage.closeCookiesPopUP().click()
    homePage.getAccountButton().click()
    homePage.getLoginButton().click()
})

 it('authorithation',() => {
  accountPage.submitLoginForm(user.email, user.password)
  cy.get('[class="mat-toolbar-row"]').should('contain', 'Your Basket' )
  })

  it('invalid authorithation',() => {
   cy.get('#email').type(user.password)
    cy.get('[id="password"]').type(user.email)
    cy.get('[id="loginButton"]').click()
    cy.get('[class="error ng-star-inserted"]').should('contain', 'Invalid email or password.' )
    })
})

