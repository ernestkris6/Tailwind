import React from 'react'

const Menus =() => {

const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

btn.addEventListener('click', ()=> {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})
  return (
    <div>
        
    </div>
  )
}

export default Menus;