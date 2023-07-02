class AccountPage{
    visit(){
        cy.log('Open website login page')
        cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/login')
    }
    getEmailfield(){
        return cy.get('[id="email"]')
    }
    getPassworfield(){
        return cy.get('[id="password"]')
    }
    getLoginBTN(){
        return cy.get('[id="loginButton"]')
    }
    submitLoginForm(email, password){
        cy.log(`Auth user with user email: ${email} and password: ${password}`)

        this.getEmailfield().type(email)
        this.getPassworfield().type(password)
        this.getLoginBTN().click()
    }
    
}
export default new AccountPage();

