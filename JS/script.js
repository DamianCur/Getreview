// querySelector

import {
    arrayOfItems
} from "./menuData.js"
import {
    createDropdownArrow,
    createElementWithClass,
    addMultipleElements
} from "./menuUtility.js"

const navigationContainerList = document.querySelector(".navigation__container__list")
const navigationBlock = document.querySelector(".navigation")

arrayOfItems.forEach((menuItem) => {
    const {
        imgSrc,
        alt,
        text,
        href
    } = menuItem;

    const listItem = createElementWithClass('li', "navigation__item");
    const itemImg = createElementWithClass('img', "navigation__item__image")
    const listLink = createElementWithClass('a', "navigation__item__text")


    itemImg.src = imgSrc
    itemImg.alt = alt
    listLink.innerHTML = text
    listLink.href = href

    addMultipleElements(listItem, [itemImg, listLink])
    navigationContainerList.appendChild(listItem)

    if (menuItem.type === "advanced") {

        if (!menuItem.sublist) throw Error("There is no sublist in item.")


        //dodac funkcje create element
        const subLinkAmmount = createElementWithClass("span", 'navigation__sublink__amount')
        subLinkAmmount.innerHTML = menuItem.sublist.length
        listItem.appendChild(subLinkAmmount)

        const elementSublist = menuItem.sublist;
        const dropdownArrow = createDropdownArrow();

        const ulSublist = createElementWithClass('ul', 'navigation__sublist')


        addMultipleElements(listLink, [dropdownArrow, ulSublist])


        listItem.addEventListener("click", (e) => {
            ulSublist.classList.toggle("navigation__sublist--active")
            listItem.classList.toggle("navigation__item__bg--active")
            dropdownArrow.classList.toggle("navigation__sortUp_ico--active")


            listLink.classList.toggle("navigation__item__text--advanced--active")
            itemImg.classList.toggle("navigation__item__image--advanced--active")

            
            const isNavigationWrapped = navigationBlock.classList.contains("navigation--wrapped")

            if (isNavigationWrapped) {

                ulSublist.classList.remove("navigation__sublist--active")
                listItem.classList.remove("navigation__item__bg--active")
                dropdownArrow.classList.remove("navigation__sortUp_ico--active")
                listLink.classList.remove("navigation__item__text--advanced--active")
                itemImg.classList.remove("navigation__item__image--advanced--active")
            }

        })

        elementSublist.forEach(sublistItem => {

            const {
                name,
                notifications
            } = sublistItem

            const subLink = createElementWithClass('li')
            const subLinkWrapper = createElementWithClass('div', "navigation__sublist__item")
            const subLinkButton = createElementWithClass('button', "navigation__item__sublink")

            subLinkButton.innerHTML = name


            ulSublist.appendChild(subLink)
            subLink.appendChild(subLinkWrapper)
            subLinkWrapper.appendChild(subLinkButton)



            if (sublistItem.notifications > 0) {

                const subLinkAmmount = createElementWithClass('span', "navigation__item--amount")

                subLinkAmmount.innerHTML = notifications

                subLinkWrapper.appendChild(subLinkAmmount)
            }
        })



    }

})

const nodeMenuItemsText = document.querySelectorAll(".navigation__item__text")
const nodeMenuItems = document.querySelectorAll(".navigation__item")
const copyrightsText = document.querySelector(".navigation__footer__copyrights")
const menuExtendButton = document.querySelector(".navigation__footer__toogler")
const menuExtendImg = document.querySelector(".navigation__footer__image")
const grLogo = document.querySelector(".navigation__logo__text")
const footerBubble = document.querySelector(".navigation__footer__bubble__container")
const footerWrapper = document.querySelector(".navigation__footer")
const nodeNavItemImg = document.querySelectorAll(".navigation__item__image")
const nodeNavSublinkAmount = document.querySelectorAll(".navigation__sublink__amount")


const arrayListofMenuItems = [...nodeMenuItemsText]
const arrayMenuItems = [...nodeMenuItems]
const arrayNavItemImg = [...nodeNavItemImg]
const arrayNavSublinkAmount = [...nodeNavSublinkAmount]



menuExtendButton.addEventListener("click", (e) => {


    navigationBlock.classList.toggle("navigation--wrapped");
    copyrightsText.classList.toggle("navigation__footer__copyrights--hided")
    menuExtendButton.classList.toggle("navigation__footer__toogler--toogled")
    grLogo.classList.toggle("navigation__logo--noText")
    menuExtendImg.classList.toggle("navigation__footer__image--wrapped")
    footerBubble.classList.toggle("navigation__footer__bubble__text--hided")
    footerWrapper.classList.toggle("navigation__footer--wrapped")



    arrayListofMenuItems.forEach(menuItemText => {
        menuItemText.classList.toggle("navigation__item__text--hide")
    })

    arrayMenuItems.forEach(menuItem => {
        menuItem.classList.toggle("navigation--active")
    })

    arrayNavItemImg.forEach(menuImg => {
        menuImg.classList.toggle("navigation__item__image--active")
    })

    arrayNavSublinkAmount.forEach(subLinkAmmount => {
        subLinkAmmount.classList.toggle("navigation__subLink__amount--active")
    })
})
