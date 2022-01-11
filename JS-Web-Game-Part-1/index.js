function newImage(element, left, bottom) {
    element.style.position = `fixed`
    element.style.left = left
    element.style.bottom = bottom
    document.body.append(element)
}
let greenCharacter = document.createElement(`img`)
greenCharacter.src = 'assets/green-character.gif'
newImage(greenCharacter, '100px', '100px')

let pineTree = document.createElement('img')
pineTree.src = `assets/pine-tree.png`
newImage(pineTree, `450px`, '200px')

let tree = document.createElement(`img`)
tree.src = `assets/tree.png`
newImage(tree, '200px', `300px`)

let pillar = document.createElement(`img`)
pillar.src = `assets/pillar.png`
newImage(pillar, `350px`, '100px')

let crate = document.createElement('img')
crate.src = `assets/crate.png`
newImage(crate, '150px', `200px`)

let well = document.createElement(`img`)
well.src = `assets/well.png`
newImage(well, `500px`, `425px`)



function newItem(element, left, bottom ) {
    element.style.left
    element.style.bottom
    document.body.append(element)

    element.addEventListener(`dblclick`, function(){
        element.remove()
    })
}
let sword = document.createElement(`img`)
sword.src= 'assets/sword.png'
newItem(sword, `500px`, '405px')

let sheild = document.createElement(`img`)
sheild.src = `assets/sheild.png`
newItem(sheild, `165px`, `185px`)

let staff = document.createElement(`img`)
staff.src = `assets/staff.png`
newItem(staff, `600px`, `100px`)




