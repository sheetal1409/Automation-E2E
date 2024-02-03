


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
            registerPage.firstName("Sheetal")
            registerPage.lastName("Suman")
            registerPage.email(email)
            registerPage.telephone(9990901919)
            registerPage.password("pwd23")
            registerPage.confirmPassword("pwd23")
            registerPage.subscriber('Yes')
            registerPage.checkbox()
            registerPage.clickContinue()
            cy.contains("Your Account Has Been Created").should('exist')

        })

    })
})
