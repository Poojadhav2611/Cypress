///<reference types="cypress"/>

import autoExJs from "../11-AutomationExercise/auto"
import user from "../../fixtures/user"

describe('verify login functionality', function () {

    let autoEx = new autoExJs;
    let title = undefined;
    user.forEach(function (user) {
        it('login data -using with fixture file', function () {
            autoEx.visitUrl()
            autoEx.signUpClick()
            autoEx.newUserSIgnUp(user)
            if (user.title == 'Mrs') {
                title = autoEx.selectors.titleMrs
            }
            else title = autoEx.selectors.titleMR

            autoEx.accountInformation(title, user)
            autoEx.logout()
            autoEx.loginUser(user)
            autoEx.validateLoginUser(user)


        })

    })

})