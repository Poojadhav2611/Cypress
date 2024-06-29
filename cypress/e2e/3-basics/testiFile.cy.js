describe('Drag and drop', () => {
    it('Simulates a drag-and-drop interaction', () => {
      cy.visit('https://the-internet.herokuapp.com/upload'); // Replace 'https://example.com' with the URL of your webpage
  
      // Locate the draggable element
      cy.get('#drag-drop-upload')
        .trigger('dragstart', { dataTransfer: {} });
  
      // Locate the droppable element
      cy.get('#drag-drop-upload')
        .trigger('drop', { dataTransfer: {} })
        .trigger('dragover');
    });
  });
  