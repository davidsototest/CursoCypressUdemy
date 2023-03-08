const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'kgem8o',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  //me permite modificaar el tiempo implicito 1000 = 1 segundo
  "defaultCommandTimeout": 5000,

  //env meter variables del entorno, para todo el proyecto.
  //en pruebasdatadriver podemos ver como se llama a la variable, en el cy.visit
  "env":{
    "urlQA": "https://demoqa.com",
  },

  //retries son los reintentos que va a tener si el caso falla.
  //ya que el fallo puede ser por parte del servidor.
  // siempre ejecutara 1 + los 3 que colocamos
  "retries": {
    "runMode": 1,
    "openMode": 2,
  }
});


// abrir el modulo de Cypress node_modules\.bin\cypress open

// ejecutar todos los casos de prueba node_modules\.bin\cypress run
//ajecutar un caso en especifico node_modules\.bin\cypress --spec ./cypress/integration/examples/nombreDelCasoDePrueba 
//ejecutar en un ambiente especifico: node_modules\.bin\cypress run ./cypress/integration/examples/nombreDelCasoDePrueba  --env 