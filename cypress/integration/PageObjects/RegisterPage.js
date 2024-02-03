class RegisterPage {

    goToRegister() {
        cy.visit('')
    }

    clickOnRegister() {
        cy.contains('My Account').click()
        cy.contains('Register').click()
        cy.scrollTo(0, 300)

    }

    firstName(firstname) {
        cy.getByLabelText("First Name").type(firstname, { delay: 0 })
    }

    lastName(lastName) {
        cy.getByLabelText("Last Name").type(lastName, { delay: 0 })
    }

    email(email) {
        cy.getByLabelText("E-Mail").type(email, { delay: 0 })
    }

    telephone(telephone) {
        cy.getByLabelText("Telephone").type(telephone)
    }

    password(pwd) {
        cy.getByLabelText("Password").type(pwd)
    }
    confirmPassword(pwd) {
        cy.getByLabelText("Password Confirm").type(pwd)
    }

    subscriber(val) {
        cy.getByLabelText(val).click()
    }

    checkbox() {
        cy.get('[type="checkbox"]').click()
    }
    clickContinue() {
        cy.findByText('Continue').click()
    }
}

export default RegisterPage