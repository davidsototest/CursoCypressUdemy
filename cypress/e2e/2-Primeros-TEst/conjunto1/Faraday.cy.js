/// <reference types="Cypress"/>

describe('Test Suite de Faraday', function(){
    beforeEach(()=>{
        //ingresar a la web
        cy.visit("https://www.aedashomes.com/faraday?test_parameter=true")
            //maximizar
        cy.viewport(1300, 720)
        // cy.get('#menu-item-50 > a').click()   // causa errror corregir en el futuro.
    })

    it('ingreso y vlidar componentes del home', function(){
        //validacion de elementos visibles

        //validar copy de cookies
        cy.get('#hs-eu-policy-wording').should('contain.text','Este sitio web almacena cookies en tu PC. Estas cookies sirven para mejorar nuestro sitio web y ofrecer servicios más personalizados, tanto en este sitio web como a través de otras redes. Para conocer más acerca de las cookies que utilizamos, revisa nuestra Política de Privacidad.' )
        cy.get('#hs-eu-cookie-disclaimer').should('contain.text','No haremos seguimiento de tu información cuando visites nuestro sitio. Sin embargo, con el fin de cumplir con tus preferencias, tendremos que usar solo una pequeña cookie para que no se te solicite volver a tomar esta decisión de nuevo.' )
        cy.get('#hs-eu-confirmation-button').click()

        //validar logo de aedas
        cy.get('.u-hidden--mobile > img').should("be.visible")

        //validar boton compra tu casa online
        cy.get('.c-navbar__buttons > .c-btn--blue > .c-btn__inner > .c-btn__text').should('contain.text','COMPRA TU CASA ONLINE')

        // validar menu hamburguesa
        cy.get('#nav-btn').should("be.visible")


    })
})