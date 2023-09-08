/// <reference types= "cypress" />


Cypress.Commands.add("searchPart", (arrCity) => {
  let Options=["A","B"]
      let indexofSelect=Math.floor(Math.random() * Options.length)
      let indexofarrCity=Math.floor(Math.random()*arrCity.length)
      cy.get('[data-testid="AutoCompleteInput"]').type(arrCity[indexofarrCity])
      cy.get('[data-testid="AutoCompleteResultItem0"]').click()
      cy.get('[data-testid="HotelSearchBox__ReservationSelect_Select"]').select(indexofSelect)
      .invoke('val')
      .should('eq', Options[indexofSelect])
      cy.get('[data-testid="HotelSearchBox__SearchButton"]').click()
});

describe('search randomly', () => {
  it('Search based on language type', () => {
    let urls=["https://www.almosafer.com/ar","https://www.almosafer.com/en"]
    let indexofUrls=Math.floor(Math.random()*urls.length)
    cy.visit(urls[indexofUrls])
    cy.get('.cta__saudi').click()
    cy.get('#uncontrolled-tab-example-tab-hotels').click()
    

     if(indexofUrls==0){
      cy.searchPart(["دبي","جدة"])
    }
    
    if(indexofUrls==1){

      cy.searchPart(["Dubai", "Jeddah", "Riyadh"])      
    }
  })
})