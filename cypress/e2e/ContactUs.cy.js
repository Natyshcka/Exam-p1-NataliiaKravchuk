describe('Captcha', () => {
    before(() => {
      cy.visit('http://juice-shop-sanitarskyi.herokuapp.com/#/contact');
      cy.get('[aria-label="Close Welcome Banner"]').click();
      cy.wait(5000);
      cy.get('[aria-label="Field for entering the comment or the feedback"]').type('bllavlskaslflaflksssflsfkal');
      cy.get('#rating').type('{rightArrow}{rightArrow}{leftArrow}');
    });
  
    it('Should solve the math CAPTCHA', () => {
      // Отримати текст капчі з веб-сторінки
      cy.get('#captcha').then((captchaText) => {
        const captchaExpression = captchaText.text();
        const [operand1, operand2, operand3, operatorin] = captchaExpression.split(' ');
  
        let result;
        switch (operatorin) {
          case '+':
            result = parseInt(operand1) + parseInt(operand2) + parseInt(operand3);
            break;
          case '-':
            result = parseInt(operand1) - parseInt(operand2) - parseInt(operand3);
            break;
          case '*':
            result = parseInt(operand1) * parseInt(operand2) * parseInt(operand3);
            break;
          case '/':
            result = parseInt(operand1) / parseInt(operand2) / parseInt(operand3);
            break;
          case '+-':
            result = parseInt(operand1) + parseInt(operand2) - parseInt(operand3);
            break;
          case '-+':
            result = parseInt(operand1) - parseInt(operand2) + parseInt(operand3);
            break;
          case '+*':
            result = parseInt(operand1) + parseInt(operand2) * parseInt(operand3);
            break;
          case '+/':
            result = parseInt(operand1) + parseInt(operand2) / parseInt(operand3);
            break;
          case '-*':
            result = parseInt(operand1) - parseInt(operand2) * parseInt(operand3);
            break;
          case '-/':
            result = parseInt(operand1) - parseInt(operand2) / parseInt(operand3);
            break;
          default:
            throw new Error('Unsupported operator');
        }
  
        // Ввести результат в поле введення капчі
        cy.get('[id="captcha-control"]').type(result);
  
        // Натиснути кнопку надсилання
        cy.get('[id="submitButton"]').click();
  
        // Перевірити, чи відображається успішне повідомлення
        cy.contains('Your message has been sent successfully').should('be.visible');
      });
    });
  });
  
  