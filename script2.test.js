const getPeople = require('./script2')
const fetch = require('node-fetch')

it('calls swapi to get people', async()=>{
    expect.assertions(1)
    expect((await getPeople(fetch)).count).toEqual(82)
})

it('getPeople returns count and results', async()=>{
    const mockFetch = jest.fn().mockReturnValue(Promise.resolve({
        json: ()=> Promise.resolve({
            count: 82,
            results: [0,1,2,3,4,5]
        })
    }))
    expect.assertions(4)
    expect((await getPeople(mockFetch)).count).toEqual(82)
    expect((await getPeople(mockFetch)).results.length).toBeGreaterThan(5)
    expect(mockFetch.mock.calls.length).toBe(2)
    expect(mockFetch).toBeCalledWith('https://swapi.dev/api/people')
})