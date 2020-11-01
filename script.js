const people = [
    {
        name: 'Angie Blake',
        age: 49
    },
    {
        name: 'John Hon',
        age: 23
    },
    {
        name: 'Lois Phillips',
        age: 59
    },
    {
        name: 'Karen Jasper',
        age: 36
    }
]

const mainData = document.querySelector('main');

const nameInput = document.querySelector("input[name='createName']")
const ageInput = document.querySelector("input[name='createAge']")
const createInput = document.querySelector("button#createitem")

const renderData = () => {
    mainData.innerHTML = ''

    for (person of people) {
        const personH2 = document.createElement("h2")
        personH2.innerText = `${person.name} is ${person.age} years old.`
        mainData.appendChild(personH2)        
    }
}

const createData = () => {
    const name = nameInput.value 
    const age = ageInput.value
    const newPerson = {name, age}

    people.push(newPerson)
    renderData()
}

renderData()
createInput.addEventListener('click', createData)