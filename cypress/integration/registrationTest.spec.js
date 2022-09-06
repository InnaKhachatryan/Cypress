import registrationPage from "../pages/registrationPage.spec"

describe("login test", () => {
    beforeEach( () => {
        cy.visit ("https://demoqa.com/webtables")
    })

    it('fill in fields', () => {
        registrationPage.typeFirstName("Inna")
        registrationPage.typeLastName("Khachatryan")
        registrationPage.typeEmail("inxa1329@gmail.com")
        registrationPage.typeAge("17")
        registrationPage.typeSalary("220000")
        registrationPage.typeDepartment("Tesvan")
        cy.get("#close-fixedban").click()
    })
})