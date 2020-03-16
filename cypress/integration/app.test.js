import { createYield } from "typescript";

describe('Mortgage App', () =>{

  it('should display text Mortgage Loan Application',() =>{
    cy.visit('/');
    cy.contains("Mortgage Loan Application");
  });

  it('should display loan calculation',() =>{
    cy.get('ng5-slider').should("have.length",3);
    cy.get('.form-group').should("have.length",3);
    cy.get('.form-control').should("have.length",3);
    cy.get('canvas').should("have.length",1);
  })
});
