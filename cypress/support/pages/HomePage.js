class HomePage{
    visit(){
        cy.log('Open website login page')
        cy.visit('https://juice-shop-sanitarskyi.herokuapp.com')
    }
    closeBanner(){
   return cy.get('[aria-label="Close Welcome Banner"]')
    }
   closeCookiesPopUP(){
   return cy.get('[aria-label="dismiss cookie message"]')
   }
   getAccountButton(){
    return cy.get('[id="navbarAccount"]')
   }
   getLoginButton(){
    return cy.get('[id="navbarLoginButton"]')
   }
   getSearchButton(){
    return cy.get('.mat-search_icon-search')
   }
   getAddtoCardBtn(){
    return cy.get('[style="left: calc((25% - 22.5px + 30px) * 2); width: calc((25% - 22.5px) * 1 + 0px); margin-top: 0px; padding-top: calc((25% - 22.5px) * 1 + 0px);"] > .mat-grid-tile-content > .mat-card > [style="display: flex; justify-content: center;"] > .mat-focus-indicator > .mat-button-wrapper > span')
   }
   getOpenBasketBtn(){
    return cy.get('.mat-toolbar-row > .mat-focus-indicator.ng-star-inserted')
   }
   getMainMenu(){
    return cy.get('[aria-label="Open Sidenav"]')
   }
   getContact(){
    return cy.get('[routerlink="/contact"] > .mat-list-item-content')
   }
}
export default new HomePage()