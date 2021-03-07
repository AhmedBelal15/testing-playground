const googleDatabase = [
    'cats.com',
    'souprecipes.com',
    'flowers.com',
    'animal.com',
    'catpictures.com',
    'myfavoritecats.com',
    'myfavoritecats2.com'
]

const googleSearch = (searchinput, db) => {
    const matches =  db.filter(website=>{
        return website.includes(searchinput)
    })

    return matches.length > 3 ? matches.slice(0, 3) : matches
}

console.log(googleSearch('cat', googleDatabase));

module.exports = googleSearch