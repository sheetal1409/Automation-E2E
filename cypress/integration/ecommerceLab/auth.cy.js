


///<require type="Cypress"/>
import '@testing-library/cypress/add-commands'
import RegisterPage from "../PageObjects/RegisterPage";

describe("Test Authentication Flows", () => {

    context("Register new user", () => {
        const registerPage = new RegisterPage()

        beforeEach(() => {

            registerPage.goToRegister()
            registerPage.clickOnRegister()

        })

        it("Check register account", function () {
            let number = Math.floor(Math.random() * 1000)
            let email = `dhe.dhj${number}@gmail.com`
            cy.contains("Register Account")
            registerPage.getFirstName("Sheetal")
            registerPage.getLastName("Suman")
            registerPage.getEmail(email)
            registerPage.getPhone(9990901919)
            registerPage.getPassword("pwd23")
            registerPage.getConfirmPassword("pwd23")
            cy.contains('Yes').click()
            cy.get('[type="checkbox"]').check()
            cy.contains('Continue').click()
            cy.contains("Your Account Has Been Created").should('exist')

        })

    })
})
