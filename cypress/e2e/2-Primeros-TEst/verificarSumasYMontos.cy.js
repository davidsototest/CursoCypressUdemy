/// <reference types="Cypress"/> 

describe('verificar sumas y numeros', function(){

     //before nos va a servir para llamar los datos del JSON
     before(function(){
        //cargamos los valores del archivos example.json en un objeto de datos.
        cy.fixture('example').then(function(datos){
            this.datos = datos
        
        cy.fixture('impresiones').then(function(impre){
            this.impre = impre
        })

            //llamar la imagen para poder usarla en el proyecto
             cy.fixture(this.datos.imagen).as('imagen')
        })
        

    })
    beforeEach(()=>{
        //ingresar a la pagina formularios
        cy.visit('https://www.demoblaze.com/index.html')
    })

    it('agregar al carrito', function(){
        cy.get(':nth-child(2) > .card > .card-block > .card-title > .hrefch').click()
        cy.get('.col-sm-12 > .btn').click()

        cy.get('.active > .nav-link').click()
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
        cy.get('.col-sm-12 > .btn').click()

        cy.get('#cartur').click()

        var suma = 0
        
        //una manera de sumar los montos para validar el resultado final a cobrar
        // aqui podemmor iterar con el EACH que es un FOREACH y abajo solo con then
        cy.get('#tbodyid > :nth-child(1) > :nth-child(3)').each(($el) => {
            var monto = $el.text()

            // este replace nos permite decirle que reemplace todos los $ por = NADA, es decir que los quita.
            // var precioSinTexto = monto.replace('$', '')

            suma = Number(suma) + Number(monto)

            cy.log('la suma es:' + suma)


    })
        // aqui no iteramos sino que trabajamos con then
        cy.get('#tbodyid > :nth-child(2) > :nth-child(3)').then(function($el){
            var monto = $el.text()

            suma = suma + Number(monto)

            cy.log('la suma es:' + suma)
        })

        cy.get('#totalp').then(function($el){
            var monto = $el.text()

            // metodo para comparar dos numeros. 
            expect(Number(monto)).to.equal(Number(suma))
        })

    // it('verificar sumas en carrito de compras', function(){
        
        

    //     })


    //     cy.get('#tbodyid > :nth-child(2) > :nth-child(3)')



    })




})