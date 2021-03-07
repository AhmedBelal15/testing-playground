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

it('is Searching google', ()=>{
    expect(googleSearch('ttteeesssttt', mockDb)).toEqual([])
    expect(googleSearch('dog', mockDb)).toEqual(['dog.com', 'dogpictures.com'])
})