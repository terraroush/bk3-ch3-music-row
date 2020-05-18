let jumpStopRecords = []
let chattenRecords = []
let polarRecords = []

const createFunkArtist = (name, age) => ({
    "name": name,
    "age": age
})
const createRapArtist = (name, age) => ({
    "name": name,
    "age": age
})
const createCountryArtist = (name, age) => ({
    "name": name,
    "age": age
})
const createBluegrassArtist = (name, age) => ({
    "name": name,
    "age": age
})
const createPopArtist = (name, age) => ({
    "name": name,
    "age": age
})

chattenRecords.push(createCountryArtist("Bruce Atikins", 23))
chattenRecords.push(createCountryArtist("Avilee Dallas", 19))
chattenRecords.push(createBluegrassArtist("Bartholomew Danielson", 23))
polarRecords.push(createPopArtist("Jensen Brown", 20))
polarRecords.push(createPopArtist("Austin Kinkaid", 22))
jumpStopRecords.push(createFunkArtist("Dre Funkz", 25))
jumpStopRecords.push(createRapArtist("Dusta Grimes", 21))
jumpStopRecords.push(createRapArtist("Loyoncé Branis", 27))

console.log(chattenRecords);
console.log(polarRecords);
console.log(jumpStopRecords);