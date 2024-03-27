const title = document.getElementById('title')
title.textContent = 'New text';

const listItem = document.querySelectorAll('.list-item')

listItem.forEach((item1) => {
    item1.textContent  += ' darslari'
})

const content = document.querySelector('p')
content.classList.add('success')