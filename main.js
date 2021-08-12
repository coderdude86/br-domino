// Domino Picker

// Demo from Kenzie Academy - By: DMG

const dominoesList = document.querySelectorAll('.domino-list li')

console.log(dominoesList)

function refreshPage() {
    window.location.reload()
}

let refreshButton = document.createElement('button');
refreshButton.innerHTML = "&#x21bb;"
refreshButton.classList.add('refresh-btn')
let dominoUL = document.querySelector('main')
dominoUL.append(refreshButton)

refreshButton.addEventListener('click', refreshPage, false)