import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from '@pages/LoginPage'

Given('que visito la página de inicio de sesión', () => {
    loginPage.visit();
});

When('ingreso credenciales válidas', () => {
    loginPage.login('LeonelaRodriguez015@hotmail.com', '123456');
});

Then('debería iniciar sesión exitosamente', () => {
    loginPage.verificarInicioDeSesionExitoso();
});