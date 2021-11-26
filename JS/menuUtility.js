const createDropdownArrow = () => {
    const dropdownIco = document.createElement('span')
    dropdownIco.classList.add("fas", "fa-sort-up", "navigation__sortUp_ico")
    return dropdownIco
}

const createElementWithClass = (elementType, chosenClass) => {
    
    if (typeof elementType !== 'string' || elementType.length === 0) throw Error("You have to type in HTML tag.")

    const element = document.createElement(elementType)
    element.classList.add(chosenClass)
    return element
}

const addMultipleElements = (mainElement, elementsArray) => {

    if (!Array.isArray(elementsArray)) throw Error ("Invalid array.")

    elementsArray.forEach(elementToAdd => {
        mainElement.appendChild(elementToAdd)
    })
}

export {
    createDropdownArrow, createElementWithClass, addMultipleElements
}