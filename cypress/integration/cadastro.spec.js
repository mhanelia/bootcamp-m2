/// <reference types ="cypress"/>
const faker = require('faker')
context('Cadastro', () => {
    it('Cadastrar novo usuário', () => {
        cy.visit("register")
        cy.get('input[ng-model*=username]').type(faker.name.findName())
        cy.get('input[ng-model*=email]').type(faker.internet.email())
        cy.get('input[ng-model*=password]').type(faker.lorem.word(8))
        cy.get('button.btn-primary').click()

    });
});