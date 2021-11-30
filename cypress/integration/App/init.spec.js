import { VALID_POST_CODE } from '../../../src/config/postCodeCheckConfig';

export const DATA_TEST_INPUT_POSTCODE = '[data-testid="input-postcode"]';
export const DATA_TEST_SUBMIT_POSTCODE = '[data-testid="submit"]';
export const DATA_TEST_SUCCESS_POSTCODE = '[data-testid="success-postcode-msg';
export const DATA_TEST_FAILURE_POSTCODE = '[data-testid="notfound-postcode-msg"]';
describe('Cypress', () => {
  it('is working', () => {
    expect(true).to.equal(true);
  });

  it('opens the app', () => {
    cy.visit('http://localhost:8080');
    cy.get(DATA_TEST_SUBMIT_POSTCODE).should('be.visible');
    cy.get(DATA_TEST_INPUT_POSTCODE).should('be.visible');
  });
  it('should show success message for valid postcode', () => {
    cy.visit('http://localhost:8080');
    VALID_POST_CODE[0];
    cy.get(DATA_TEST_INPUT_POSTCODE)
      .type(VALID_POST_CODE[0])
      .should('have.value', VALID_POST_CODE[0]);
    cy.get(DATA_TEST_SUBMIT_POSTCODE).click();
    cy.get(DATA_TEST_FAILURE_POSTCODE).should('not.exist');
    cy.get(DATA_TEST_SUCCESS_POSTCODE).should('be.visible');
  });
  it('should show success message for valid LSOA postcode', () => {
    cy.visit('http://localhost:8080');
    cy.get(DATA_TEST_INPUT_POSTCODE).type('SE1 7QD').should('have.value', 'SE1 7QD');
    cy.get(DATA_TEST_SUBMIT_POSTCODE).click();
    cy.get(DATA_TEST_FAILURE_POSTCODE).should('not.exist');
    cy.get(DATA_TEST_SUCCESS_POSTCODE).should('be.visible');
  });
  it('should show not found msg for valid postcode but not in LSOA', () => {
    cy.visit('http://localhost:8080');
    cy.get(DATA_TEST_INPUT_POSTCODE).type('G50TG');
    cy.get(DATA_TEST_SUBMIT_POSTCODE).click();
    cy.get(DATA_TEST_SUCCESS_POSTCODE).should('not.exist');
    cy.get(DATA_TEST_FAILURE_POSTCODE).should('be.visible');
  });
  it('should show not found msg for invalid postcode', () => {
    cy.visit('http://localhost:8080');
    cy.get(DATA_TEST_INPUT_POSTCODE).type('G50TG');
    cy.get(DATA_TEST_SUBMIT_POSTCODE).click();
    cy.get(DATA_TEST_SUCCESS_POSTCODE).should('not.exist');
    cy.get(DATA_TEST_FAILURE_POSTCODE).should('be.visible');
  });
});
