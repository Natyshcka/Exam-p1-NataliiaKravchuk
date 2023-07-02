class HomePage{
    visit(){
        cy.log('Open website login page')
        cy.visit('https://juice-shop-sanitarskyi.herokuapp.com')
        cy.get('[aria-label="Close Welcome Banner"]').click()
        cy.get('[aria-label="dismiss cookie message"]').click()
        cy.get('[aria-label="Show/hide account menu"]').click()
        cy.get('[id="navbarLoginButton"]').click()
    }
   
}
export default new HomePage()