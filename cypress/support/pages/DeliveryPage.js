class DeliveryPage{
    visit(){
        cy.log('Open website login page')
        cy.visit('/delivery-methods')
    }
   selectAddressfromList(){
    return cy.get(':nth-child(2) > .cdk-column-Selection')
   }
   getContinueBTN(){
    return cy.get('.nextButton')
   }
}
export default new DeliveryPage()
