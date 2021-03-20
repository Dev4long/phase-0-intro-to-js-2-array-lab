const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(cat){
    console.log(cats.push('Ralph'))
}
function destructivelyPrependCat(cat){
    console.log(cats.unshift("Bob"))
}
function destructivelyRemoveLastCat(cat){
    console.log(cats.pop(cats))
}
function destructivelyRemoveFirstCat(cat){
    console.log(cats.shift(cats))
}
function appendCat(cat) {
    return [...cats,"Broom"];
}
function prependCat(cat) {
    return ["Arnold",...cats]
}
function removeLastCat(cat) {
    return cats.slice(0,-1)
}
function removeFirstCat(cat) {
    return cats.slice(1)
}