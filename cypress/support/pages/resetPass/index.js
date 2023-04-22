import { el } from './elements'

import toast from '../../components/toast'

class ResetPass {

    constructor() {
        this.toast = toast
    }

    go(token) {
        cy.visit('/reset-password?token=' + token)
    }

    form(newPass, confirmPass) {
        cy.get(el.password)
            .clear()
            .type(newPass)

        cy.get(el.password2)
            .clear()
            .type(confirmPass)
    }

    submit() {
        cy.contains(el.changePassButton).click()
    }

}

export default new ResetPass()