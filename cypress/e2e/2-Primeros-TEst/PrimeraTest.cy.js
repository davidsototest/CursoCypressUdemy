/// <reference types="Cypress"/> 
//lo de arriba me permite que el VSC me ayude a completas o sugerir





// suite de casos de pruebas
describe('Primera conjunto de casos de prueba', function()
    {
        // caso de prueba 1
        it('ingresar al inicio de sesion', function(){
            //paso 1
            //ingresar a la web
            cy.visit("https://automationexercise.com/")
            //maximizar
            cy.viewport(1300, 720)
            // cy.get('#menu-item-50 > a').click()   // causa errror corregir en el futuro. 
            
            //paso 2 
            //verificar cantidad de elementos visibles en una lista de elementos. utilice contenedor padre y contenedor hijo
            cy.get('.features_items .col-sm-4').should('have.length', 34)

            //paso 3 
            // crear una variable que guarde el dato del CssSelector para ubicar los elementos del DOM
            cy.get('.features_items .col-sm-4').as('ProductosPupulares')

            //paso 4
            // utilizar la variable
            cy.get('@ProductosPupulares').should('have.length', 34)
        })

         // caso de prueba 1
         it('Agregar producto al carrito', function(){
            //paso 1
            cy.visit("https://automationexercise.com/")

            //paso 2
            //declarar parametro o variable
            cy.get('.features_items .col-sm-4').as('ProductosPupulares')
            cy.get('.features_items').as('Nombres')

            //paso 3
            // interarr para encrotrar un producto en especifico
            // .FIND puede buscar cualquier elemento dentro de elemento padre.
            cy.get('@Nombres') 
            .find('p') //seleccionar sobre que elemento iterar
            .each(($el,index, $list) => { //metodo para iterar
                if(expect($el('p')).to.have.property('Blue Top')){ // modificar metodo para comparar
                    cy.log('se ha encontrado el elemento buscado')
                }else{cy.log('Texto no encontrado')}
            })
    })






        //caso de prueba 3
    }
)