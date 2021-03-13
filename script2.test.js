const getPeople = require('./script2')
const fetch = require('node-fetch')

it('calls swapi to get people', async()=>{
    expect.assertions(1)
    expect((await getPeople(fetch)).count).toEqual(82)
})