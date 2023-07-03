import homePage from "../support/pages/HomePage"
describe('Captcha', () => {
  before(() => {
      homePage.visit();
      homePage.closeBanner().click()
      homePage.closeCookiesPopUP().click()
      homePage.getMainMenu().click()
      homePage.getContact().click()
      cy.get('[aria-label="Field for entering the comment or the feedback"]').type('bllavlskaslflaflksssflsfkal');
      cy.get('#rating').type('{rightArrow}{rightArrow}{leftArrow}');
    });
  
    it('Should solve the math CAPTCHA', () => {
      cy.get('#captcha').then((captchaText) => {
        const captchaExpression = captchaText.text();
        console.log("3=" + captchaExpression) 
        let result = eval(captchaExpression)
        console.log("4=" + result) 
  
        cy.get('.mat-form-field-hide-placeholder > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(result);
  
        
        cy.get('[id="submitButton"]').click();
  
        // Перевірити, чи відображається успішне повідомлення
        cy.contains('Thank you for your feedback').should('be.visible');
      });
    });
  });
  
  