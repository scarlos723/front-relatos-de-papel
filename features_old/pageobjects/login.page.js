import { $, expect } from '@wdio/globals';
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get deleteButton () {
        // Opción 1: Por data-testid (recomendado)
        return $('[data-testid="wbb-button"]');
        
        // Opción 2: Por aria-label
        // return $('button[aria-label="Eliminar"]');
        
        // Opción 3: Por combinación de atributos (más específico)
        // return $('button[data-testid="wbb-button"][aria-label="Eliminar"]');
        
        // Opción 4: Por texto del botón
        // return $('button*=Eliminar');
    
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to delete an item by clicking the delete button
     */
    async clickDeleteButton () {
        await this.deleteButton.waitForDisplayed();
        await this.deleteButton.click();
    }
    async verifyDeletionMessage (message) {
        // the element is: <div class="go4109123758" style="left: 0px; right: 0px; display: flex; position: absolute; transition: 230ms cubic-bezier(0.21, 1.02, 0.73, 1); transform: translateY(0px); top: 0px; justify-content: center;"><div class="use-wire-frontend-action-callbacks___StyledDiv-sc-1l2bv37-0 cQUpuj enter success">Eliminado</div></div>

        const flashAlert = await $('.use-wire-frontend-action-callbacks___StyledDiv-sc-1l2bv37-0.cQUpuj.enter.success');
        await flashAlert.waitForDisplayed();
        const alertText = await flashAlert.getText();
        expect(alertText).toContain(message);
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

export default new LoginPage();
