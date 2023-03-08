/// <reference types="Cypress"/> 

//importar las clases que contienen nuestras llamadas al DOM
//devemos instanciar o declarar const luego del describe
import HomePage from '../../support/PageObjects/HomePage'

// suite de test case avanzados

describe('segundo conjuntos de casos de pruebas avanzadas', function(){
    const homePage = new HomePage()


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
        //el Cypress.env("urlQA") es porque estamos llamando una variable del doc Cpress.js
        cy.visit(Cypress.env('urlQA') + '/automation-practice-form')
    })

    it('test', function(){
        
        //llamando a la clase que hemos importado de la homePage
        homePage.ingresarNombreInput().type(this.datos.name)
        homePage.ingresarApellidoInput().type(this.datos.lastName)
        homePage.ingresarEmailInput().type(this.datos.email)

        //este este paso llamaremos al metodo y pasaremos un parametro. 
        // este {force: true} nos permite forzar la seleccion del check debido a que tiene una etiqueta por encima de ella. 
        homePage.seleccionarSexoInput(this.datos.sexo).check({force: true}).should('be.checked')


        homePage.ingresarNumeroTelefonoInput().type(this.datos.telefono)
        cy.get('#dateOfBirthInput').click()
        cy.get('.react-datepicker__month-select').should('be.visible').select(this.datos.fechaNacimiento[0])
        cy.get('.react-datepicker__year-select').should('be.visible').select(this.datos.fechaNacimiento[1])
        cy.get('.react-datepicker__day--0' + this.datos.fechaNacimiento[2]).should('be.visible').click()
        cy.get('#dateOfBirthInput')
        //aqui estamos validando ue los datos ingresados sean correctos.
        //ademas validamos que el substring valide que de la palabra desde la letra 0 a la 3 este contenida en el dato ingresado 
            .should('contain.value',this.datos.fechaNacimiento[0].substring(0,3))
            .should('contain.value',this.datos.fechaNacimiento[1])
            .should('contain.value',this.datos.fechaNacimiento[2])

        cy.get('.subjects-auto-complete__value-container').type(this.datos.materia)
        cy.get('#react-select-2-option-0').click()
        cy.get('.subjects-auto-complete__value-container').should('contain.text', this.datos.materia)

        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click()



        //formula par poder subir un archivo a una web.
        //hace la conversion de imagen a base64
        cy.get('#uploadPicture').then(function($el){
            //convierte la imagen en un string de base64
            const blob = Cypress.Blob.base64StringToBlob(this.imagen, 'imagen/jpg')

            //this.datos.imagen llama al nobre que tiene el archivo en JSON, y es el nombre con el que se sube el archivo
            const file = new File([blob], this.datos.imagen, {type:'imagen/jpg'})
            const list = new DataTransfer()

            list.items.add(file)
            const myFileList = list.files

            $el[0].files = myFileList
            $el[0].dispatchEvent(new Event('change', {bubbles: true}))

        })

        cy.get('#currentAddress').type(this.datos.direccion)
        cy.get('#state').click()
        cy.get('#react-select-3-option-0').click()

        cy.get('#city').click()
        cy.get('#react-select-4-option-2').click({force: true})

        cy.get('#submit').click({force: true})

        cy.get('#example-modal-sizes-title-lg').should('have.text', 'Thanks for submitting the form')

        cy.get('td:contains(Student Name) +td')
            .should('have.text', this.datos.name + " " + this.datos.lastName)

        cy.get('td:contains(Student Email) +td')
            .should('have.text', this.datos.email)

        cy.get('td:contains(Gender) +td')
            .should('have.text', this.datos.sexo)

        cy.get('td:contains(Mobile) +td')
            .should('have.text', this.datos.telefono)

        cy.get('td:contains(Date of Birth) +td')
            .should('have.text', this.datos.fechaNacimiento[2] + " " + this.datos.fechaNacimiento[0]+","+this.datos.fechaNacimiento[1])

        cy.get('td:contains(Subjects) +td')
            .should('have.text', this.datos.materia)

        cy.get('td:contains(Hobbies) +td')
            .should('have.text', this.datos.hobbies)

        cy.get('td:contains(Picture) +td')
            .should('have.text', this.datos.imagen)

        cy.get('td:contains(Address) +td')
            .should('have.text', this.datos.direccion)

        cy.get('td:contains(State and City) +td')
            .should('have.text', this.datos.estado + " " + this.datos.ciudad)

        //cerrar modal
        //example de utilizar el comando creado. en commands.js
        cy.cerrarSecsionDeExample('#closeLargeModal')

        //iterar o recorre un JSON para una lista de elemento o articulos. 
        //arriba en el before debemos llamar al JSON para poder usarlo, impre
        //example
        this.impre.impresiones.forEach(function (articulo){
            cy.log(articulo)
            //pause
            //el pause sirve para para la ejecucion y activar un boton de continuar la ejecucion o uno de ir paso a paso
            //example
            cy.pause()
        })

        // se puede agregar un timeOut especificio para cada caso de prueba, ejemplo de codigo
        //debe ir al final de TC para que solo afecte a este caso. 
        Cypress.config('defaultCommandTimeout', 10000) // en este caso de prueba y solo este, va a esperar hasta 10 segundo de espera.
                
    })
})