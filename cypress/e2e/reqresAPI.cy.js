/// <reference types = "cypress" />

describe('Make a POST,GET,DELETE request to reqri API',() =>{
    it('Post Request reqri',() =>{
//This makes a POST request to the reqri API to create a new entry
cy.request({method :'POST',
            url:'https://reqres.in/api/users',
            body : {name: "Aaron", job:"QA Analyst"}
            }).then((response) =>{
                expect(response.status).to.equal(201)
                expect(response.body).to.have.property('name','Aaron');
                expect(response.body).to.have.property('job','QA Analyst');
                expect(response.body).to.have.property('id');
                expect(response.body).to.have.property('createdAt');
                })
    })

    it('PUT Request reqri',() =>{
        //This makes a PUT request to the reqri API to update job information
        cy.request({method :'PUT',
                    url:'https://reqres.in/api/users/2',
                    body : {name: "Aaron", job:"VideoGame Streamer"}
                    }).then((response) =>{
                        expect(response.status).to.equal(200)
                        expect(response.body).to.have.property('name','Aaron');
                        expect(response.body).to.have.property('job','VideoGame Streamer');
                        expect(response.body).to.have.property('updatedAt'); //verifies the response corresponds to a PUT request
                        })
            })

    it('DELETE Request reqri',() =>{
        //This makes a DELETE request to the reqri API to delete the entry created in first test
        cy.request({method :'DELETE',
                    url:'https://reqres.in/api/users/2',
                    body : {name: "Aaron", job:"VideoGame Streamer"}
                    }).then((response) =>{
                        expect(response.status).to.equal(204)
                        })
            })

    it.only('GET Request reqri',() =>{
    //This makes a GET request to the reqri API to obtain the user with id=7
        cy.request({method :'GET',
                    url:'https://reqres.in/api/users/7'
                    }).then((response) =>{
                        expect(response.status).to.equal(200)
                        expect(response.body).to.have.property('data');
                        expect(response.body.data).to.have.property('id',7);
                        expect(response.body.data).to.have.property('first_name','Michael');
                        expect(response.body.data).to.have.property('last_name','Lawson');
                        expect(response.body.data).to.have.property('avatar','https://reqres.in/img/faces/7-image.jpg');
                        expect(response.body).to.have.property('support');
                        cy.log(response.body.data.email);
                        })
                    })        
})
