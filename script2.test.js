const getPeople = require('./script2')

it('calls swapi to get people', async()=>{
    expect.assertions(1)
    expect((await getPeople()).count).toEqual(82)
})