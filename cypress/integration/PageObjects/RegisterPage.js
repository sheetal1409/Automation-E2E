class RegisterPage {

    goToRegister() {
        cy.visit('')
    }

    clickOnRegister() {
        cy.contains('My Account').click()
        cy.contains('Register').click()
        cy.scrollTo(0, 300)

    }

    getFirstName(firstname) {
        cy.getByLabelText("First Name").type(firstname, { delay: 0 })
    }

    getLastName(lastName) {
        cy.getByLabelText("Last Name").type(lastName, { delay: 0 })
    }

    getEmail(email) {
        cy.getByLabelText("E-Mail").type(email, { delay: 0 })
    }

    getPhone(telephone) {
        cy.getByLabelText("Telephone").type(telephone)
    }

    getPassword(pwd) {
        cy.getByLabelText("Password").type(pwd)
    }
    getConfirmPassword(pwd) {
        cy.getByLabelText("Password Confirm").type(pwd)
    }




}

export default RegisterPage