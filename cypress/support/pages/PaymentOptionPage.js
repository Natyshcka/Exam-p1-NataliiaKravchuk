class PaymentOptionPage{
    visit(){
        cy.log('Open website login page')
        cy.visit('/payment/shop')
    }
   selectPaymentOption(){
        return cy.get('.mat-expansion-panel-header.mat-focus-indicator.ng-star-inserted')
         }
         
   typeName(){
            return cy.get('.mat-form-field.ng-tns-c119-26 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
         }
   addNewCC(){
   return cy.get('.mat-form-field.ng-tns-c119-27 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
    }
    addMonth(){
        return cy.get('#mat-input-12')
         }
         addYear(){
            return cy.get('#mat-input-13')
             }
             getSubbmitbtn(){
                return cy.get('#submitButton')
                 }
    getCartoption(){
        return  cy.get('[class="mat-radio-inner-circle"]')
    }
   }

export default new PaymentOptionPage()

