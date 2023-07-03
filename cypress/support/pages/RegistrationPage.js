class RegistrationPage{
    visit(){
        cy.log('Open website login page')
        cy.visit('/register')
    }
   getLoginPage(){
        return cy.get('[routerlink="/register"]')
         }
   typeEmail(){
   return cy.get('.mat-form-field.ng-tns-c119-13 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
    }
   typePassword(){
   return cy.get('[aria-label="Field for the password"]')
   }
   repeatTypePassword(){
    return cy.get('[id=repeatPasswordControl]')
   }
   showPasswordAdvice(){
    return cy.get('[class="mat-slide-toggle-bar"]')
   }
   getSecurityQuestionList(){
    return cy.get('[class="mat-form-field-infix ng-tns-c119-16"]')
   }
   selectSecurityQuestionList(){
    return cy.get('[id="mat-option-6"]')
   }
   typeUserAnswer(){
    return cy.get('[class="mat-form-field-infix ng-tns-c119-18"]')
   }
  getRegistrationButton(){
    return cy.get('[id="registerButton"]')
   }
}
export default new RegistrationPage()

