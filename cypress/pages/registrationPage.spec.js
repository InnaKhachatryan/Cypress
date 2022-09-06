class registrationPage {

   elements = {
       firstNameInput: () => cy.get ("#firstName"),
       lastnameInput: () => cy.get ("#lastName"),
       emailInput: () => cy.get("#userEmail"),
       ageInput: () => cy.get ("#age"),
       salaryInput: () => cy.get ("#salary"),
       departmentInput: () => cy.get ("#department"),
       submitButton: () => cy.get ("#close-fixedban"),
}

typeFirstname(firstName){
   this.elements.firstNameInput().clear().type(firstName)
}

typeLastname(lastname){
   this.elements.lastnameInput().clear().type(lastname)
}

typeEmail(email){
   this.elements.emailInput().clear().type(lastname)
}

typeAge(age){
   this.elements.ageInput().clear().type(age)
}

typeSalary(salary){
   this.elements.salaryInput().clear().type(salary)
}

typeDepartment(department){
   this.elements.departmentInput().clear().type(department)
}

typeSubmit(submitbutton){
   this.elements.submitButton().click(submitbutton)
}
}

modules.exports = new registrationPage()