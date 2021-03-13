const getPeople = async(fetch) => {
    const response = await fetch('https://swapi.dev/api/people')
    const data = await response.json()
    return {
        count: data.count,
        results: data.results
    }
}

module.exports = getPeople