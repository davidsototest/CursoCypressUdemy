/// <reference types="Cypress"/> 
//lo de arriba me permite que el VSC me ayude a completas o sugerir





// suite de casos de pruebas
describe('Primera conjunto de casos de prueba', function()
    
{
        //este before permite que se ejecute siempre de primero antes de cada TC
        beforeEach(()=>{
                //ingresar a la web
                cy.visit("https://automationexercise.com/")
                    //maximizar
                cy.viewport(1300, 720)
                // cy.get('#menu-item-50 > a').click()   // causa errror corregir en el futuro.
            })

        // caso de prueba 1
        // it('ingresar al inicio de sesion', function(){
            
            
            
             
            
        //     //paso 2 
        //     //verificar cantidad de elementos visibles en una lista de elementos. utilice contenedor padre y contenedor hijo
        //     cy.get('.features_items .col-sm-4').should('have.length', 34)

        //     //paso 3 
        //     // crear una variable que guarde el dato del CssSelector para ubicar los elementos del DOM
        //     cy.get('.features_items .col-sm-4').as('ProductosPupulares')
    

        //     //paso 4
        //     // utilizar la variable
        //     cy.get('@ProductosPupulares').should('have.length', 34)
        // })

        //  // caso de prueba 1
        //  it('Agregar producto al carrito', function(){
        //     //paso 1
        //     // cy.visit("https://automationexercise.com/")

        //     //paso 2
        //     //declarar parametro o variable
        //     cy.get('#recommended-item-carousel :nth-child(1)').as('ProductosPupulares')
        //     cy.get('.active > :nth-child(1) > .product-image-wrapper > .single-products > .productinfo > p').as('Nombres')

        //     //paso 3
        //     // interarr para encrotrar un producto en especifico
        //     // .FIND puede buscar cualquier elemento dentro de elemento padre.
        //     cy.get('@ProductosPupulares') 
        //     .find('p') //seleccionar sobre que elemento iterar
        //     .each(($el,index, $list) => { //metodo para iterar $el es como una variable (elemento), index es el indice, 

        //         // de esta manera declaro una funcion, que permite obtener el precio de los articulos. 
        //         // el . then es quien trabaja con todo el elemento generado antes del punto. 
        //         cy.get('@ProductosPupulares').eq(index).find('h2').then(function($el1){
        //             let precio = $el1.text()
        //             cy.log(precio)
        //         })


        //         if($el.children() === 'Blue Top'){ // modificar metodo para comparar
        //             cy.log('se ha encontrado el elemento buscado')
        //         }else{cy.log('Texto no encontrado')}
        //     })

        //     cy.get('.active > :nth-child(1) > .product-image-wrapper > .single-products > .productinfo > .btn').click()

        //     //el metodo .should permite validar que lo que este antes de la , sea igual a lo que esta despues de la ,
        //     cy.get('.modal-body > :nth-child(1)')
        //     .should('contain.text','Your product has been added to cart.')
        //     .should('be.visible')

            // cy.get('@ProductosPupulares').eq(index).contains('Add to cart').click()
    // })
        //caso de prueba 3
        // it('flotando sobre elementos', function(){

        //     //invoke sirve para modificar un elemento css del dom
        //     //attr debe ir pra que sepa que lo modificara
        //     //style es lo que modificara
        //     //display block es lo nuevo que colocara
        //     //cy.get('buscador css').invoke('attr','style','display: block')

        //     //flotar sobre elementos
        //     cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > img').realHover('mouse')

        //     cy.get('body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div.features_items > div:nth-child(3) > div > div.single-products > div.product-overlay > div > h2').should('be.visible')
        // })

        // caso 4
        // it('validar los chechbox', function(){


        //     //agregar producto
        //     cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        //     cy.get('.modal-footer > .btn').should('be.visible')
        //     cy.get('.modal-footer > .btn').click()


        //     //agregar 2do producto
        //     cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        //     cy.get('.modal-footer > .btn').should('be.visible')
        //     cy.get('.modal-footer > .btn').click()

        //     //ir  carrito
        //     cy.get('.shop-menu > .nav > :nth-child(3) > a').click()

        //     //validar que este visible
        //     cy.get('#product-1 > .cart_quantity > .disabled').should('be.visible')

            // como se debe clickear un checkbox y validar que este seleccionado.
            //cy.get('#product-1 > .cart_quantity > .disabled').check().should('be.checked')
            //validar que no este seleccionado
            //cy.get('#product-1 > .cart_quantity > .disabled').should('not.be.checked')





       // })

    //    it('verificar los dropdowmns de arreglos este funcionando', function(){

    //     cy.get('.shop-menu > .nav > :nth-child(2) > a').click()


    //     //select lo usamos para enviar al dropdowmns el dato que debe seleccionar.
    //     //y con el shold validamos que lo esperado sea name:asc
    //     cy.get(':nth-child(1) > .panel-heading > .panel-title > .collapsed > .badge').select('name:asc').should('have.value', 'name:asc')

    //    })

    it('enviar texto a la barra de busqueda', function(){
        //abrir productos
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()

        //clickear la barra de busqueda
        cy.get('#search_product').click()

        //enviar texto a la barra de busqueda.
        cy.get('#search_product').type('blue top')

        //click en la lupa para que busque
        cy.get('#submit_search').click()

        //click en agregar a carrito
        cy.get('.productinfo > .btn').click()

        //click en seguir comprando
        cy.get('.modal-footer > .btn').click()

        // click en carrito
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()

        //validar precio
        cy.get('.cart_price > p').should('have.text','Rs. 500')
        cy.get('.cart_total_price').should('have.text','Rs. 500')

        //click en pagar
        cy.get('.col-sm-6 > .btn').click()
        cy.get('.modal-body > :nth-child(2) > a > u').click()

        //iniciar secion
        cy.get('[data-qa="login-email"]').click()
        cy.get('[data-qa="login-email"]').type('david2023@gmail.com')

        cy.get('[data-qa="login-password"]').click()
        cy.get('[data-qa="login-password"]').type('123456')

        cy.get('[data-qa="login-button"]').click()

        //vamos al carrito, porque despues del logue cae al home
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()

        //click en proceder a pagar
        cy.get('.col-sm-6 > .btn').click()

        //validar nombre del user al pagar 
        cy.get('#address_delivery > .address_firstname').should('have.text','Mr. david alberto')

        //proceder a pagar
        cy.get(':nth-child(7) > .btn').click()

        //introducir datos de tarjeta
        cy.get('[data-qa="name-on-card"]').click()
        cy.get('[data-qa="name-on-card"]').type('david alberto')

        cy.get('[data-qa="card-number"]').click()
        cy.get('[data-qa="card-number"]').type('4242424242424242')

        cy.get('[data-qa="cvc"]').click()
        cy.get('[data-qa="cvc"]').type('123')

        cy.get('[data-qa="expiry-month"]').click()
        cy.get('[data-qa="expiry-month"]').type('10')

        cy.get('[data-qa="expiry-year"]').click()
        cy.get('[data-qa="expiry-year"]').type('2031')

        cy.get('[data-qa="pay-button"]').click()

        //validar la compra
        cy.get('.col-sm-9 > p').should('have.text','Congratulations! Your order has been confirmed!')
        









    })


    }
)