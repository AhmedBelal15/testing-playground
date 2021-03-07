const googleSearch = require('./script')
const mockDb = [
    'dog.com',
    'cheespuff.com',
    'disney.com',
    'dogpictures.com'
]

it('this is a silly test', ()=>{
    expect('Hello').toEqual('Hello')
})

describe('googleSearch', ()=>{
    it('is Searching google', ()=>{
        expect(googleSearch('ttteeesssttt', mockDb)).toEqual([])
        expect(googleSearch('dog', mockDb)).toEqual(['dog.com', 'dogpictures.com'])
    })
    
    it('works with undefined and null input',() =>{
        expect(googleSearch(null, mockDb)).toEqual([])
        expect(googleSearch(undefined, mockDb)).toEqual([])
    })
    
    it("doesn't return more than 3 results", ()=>{
        expect(googleSearch('.com', mockDb).length).toEqual(3)
    })
})
