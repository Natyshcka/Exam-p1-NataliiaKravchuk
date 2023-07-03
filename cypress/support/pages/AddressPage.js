class AddressPage{
    visit(){
        cy.log('Open website login page')
        cy.visit('/basket')
    }
   getCheckoutBTN(){
        return cy.get('[id="checkoutButton"]')
         }
   getAddNewAddressBtn(){
   return cy.get('[aria-label="Add a new address"]')
    }
   typeCountry(){
   return cy.get('[placeholder="Please provide a country."]')
   }
   typeName(){
    return cy.get('[placeholder="Please provide a name."]')
   }
   typeMobilePhone(){
    return cy.get('[placeholder="Please provide a mobile number."]')
   }
   typeZipeCode(){
    return cy.get('[placeholder="Please provide a ZIP code."')
   }
   typeAddress(){
    return cy.get('[placeholder="Please provide an address."]')
   }
   typeCity(){
    return cy.get('[placeholder="Please provide a city."]')
   }
  getSubbmitBtn(){
    return cy.get('[id="submitButton"]')
   }
   getAddresfromthelist(){
   return cy.get('.mat-row.cdk-row.ng-star-inserted')
   }
   getContinueBtn(){
    return cy.get('.btn-next')
   }
   selectAddressfromList(){
    return cy.get('[class="svg-inline--fa fa-rocket fa-w-16"]')
   }
}
export default new AddressPage()
//cy.get('[id="checkoutButton"]').click();
  //cy.get('[aria-label="Add a new address"]').click();
  //cy.get('[placeholder="Please provide a country."]').type(user.country);
  //cy.get('[placeholder="Please provide a name."]').type(user.name);
  //cy.get('[placeholder="Please provide a mobile number."]').type(user.mnumber);
  //cy.get('[placeholder="Please provide a ZIP code."]').type(user.zipcode);
 // cy.get('[placeholder="Please provide an address."]').type(user.address);
  //cy.get('[placeholder="Please provide a city."]').type(user.city);
 // cy.get('[id="submitButton"]').click();
  //cy.get('.mat-row.cdk-row.ng-star-inserted').contains(user.name).click();