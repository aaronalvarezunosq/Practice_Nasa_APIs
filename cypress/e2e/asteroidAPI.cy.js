/// <reference types = "cypress" />

//import {mainPage} from "../support/PageObject/Pages/MainPage.js";
const asteroids = require('../support/PageModel/testData/asteroidsAPI.json');
const apiKey = require('../support/pageModel/testData/apiKey.json')


describe('Make a Get Request to Nasa Asteroids - NeoWs API',() =>{
    it('Get request asteroidAPI',() =>{
        cy.request({
            method: 'GET',
            url: 'https://api.nasa.gov/neo/rest/v1/feed',
            qs:{"start_date":asteroids.start_date,"end_date":asteroids.end_date,"api_key":apiKey.api_key} //passing parameters for the request
          }).then((response) =>{
              //validamos el body de la respuesta
              expect(response.status).to.equal(200);
              expect(response.body).to.have.property('element_count')
              expect(response.body).to.have.property('links')
          })        
    })

})