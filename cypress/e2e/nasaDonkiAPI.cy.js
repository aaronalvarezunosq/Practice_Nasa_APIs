/// <reference types = "cypress" />

//import {mainPage} from "../support/PageObject/Pages/MainPage.js";
const donki = require('../support/pageModel/testData/donkiAPI.json');
const apiKey = require('../support/pageModel/testData/apiKey.json')

describe('Make a Get Request to Nasa DONKI API',() =>{
    it('Get request DONKI',() =>{
//This makes a GET request to the DONKI solar flares API and passes some query parameters from JSON file
cy.request({method :'GET',
            url:'https://api.nasa.gov/DONKI/FLR',
            qs : {startDate:donki.startDate , endDate:donki.endDate , api_key:apiKey.api_key }}) //passing parameters for querystring
            .then((response)=>{
            expect(response.status).to.equal(200); //validare status code 200
            expect(response.body[0]).to.have.property('link'); //validate that first element in body response array has property "link"
            expect(response.body[0]).to.have.property('instruments');//other property validations
            expect(response.body[0]).to.have.property('beginTime');
            expect(response.body[0]).to.have.property('peakTime');
            expect(response.body[0]).to.have.property('endTime');
                })
    })
})