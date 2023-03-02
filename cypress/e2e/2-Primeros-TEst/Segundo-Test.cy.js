/// <reference types="Cypress"/>
 
//Suite de casos que contiene cada caso
describe('Primer conjunto de casos de prueba',function()
{
//Caso de prueba 1
it('Contabilizar la cantidad de elementos en la seccion de pagina principal', function(){
 
    // ingresamos a la pagina
    cy.visit("http://automationpractice.com/index.php")
 
    //Verificar la cantidad de elementos visibles
    cy.get('#homefeatured .product-container').should('have.length',7)
 
    //Obtenemos el elemento homefeatured .product-container como un parametro
    cy.get('#homefeatured .product-container').as('ProductosPopulares')
 
    //Verificamos nuevamente la cantidad de elementos utilizando el parametro
    cy.get('@ProductosPopulares').should('have.length',7)
})
 
//Caso de prueba 2
it('Agregar el elemento de tipo "blouse" al carrito de compra desde la pagina principal', function(){
 
     // ingresamos a la pagina
     cy.visit("http://automationpractice.com/index.php")
 
    //Obtenemos el elemento homefeatured .product-container como un parametro
    cy.get('#homefeatured .product-container').as('ProductosPopulares')
 
    //Iteramos para encontrar un producto con nombre X
    cy.get('@ProductosPopulares')
    .find('.product-name')
    .each(($el,index, $list) => {
        if($el.attr('title') === 'Printed Dress'){
            cy.log('Se ha encontrado el elemento buscado')
            cy.get('@ProductosPopulares').eq(index).contains('Add to cart').click()
        }
    })
})
//Caso de prueba 3
 
 
})