// en esta clase debemos crear metodos que devuelvan el objeto que necesitamos utilizar.
//debemos colcoar aqui todas las llamasdas al dom, para que en los casos de pruebas no utilicemos 
//los localizados, solo llamamos este metodo y el lo devolveras.
//asi al momento que modifiquen algun id o clases, solo devemos cambiarlo aqui.
//siempre debe tener el export defaul y nombre para poder usarlo en todos nuestro TC
//se debe importar en los TC para poder usar.
//el HomePage es solo para los elementos del la home, se debe crear un archivo para cada pagina de nuestro site

class HomePage{

    ingresarNombreInput(){
        return cy.get('#firstName')
    }

    ingresarApellidoInput(){
        return cy.get('#lastName')
    }

    ingresarEmailInput(){
        return cy.get('#userEmail')
    }

    seleccionarSexoInput(sexo){
        return cy.get('input[name="gender"][value="' + sexo + '"]')
    }

    ingresarNumeroTelefonoInput(){
        return cy.get('#userNumber')
    }
}

export default HomePage;
