function clickRadioAndIncrement() {
    cy.get('#mat-radio-103 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').then(($radio) => {
      
      const currentValue = parseInt($radio.attr('aria-checked'));
      cy.wrap($radio).click();
      const newValue = currentValue + 1;
      cy.wrap($radio).invoke('attr', 'aria-checked', newValue.toString());
    });
  
    cy.get('.nextButton').click();
  }
  
  clickRadioAndIncrement();
  
