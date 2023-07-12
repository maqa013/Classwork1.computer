let computers = [
  {
    id:1,
    img: 'https://static.wixstatic.com/media/42650f_da1db863f4b8462b9643895e2c472dde~mv2.png/v1/fill/w_516,h_516,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/42650f_da1db863f4b8462b9643895e2c472dde~mv2.png',
    cpu: 'inter core i7',
    ram:32,
    rom:512,
    price:1700
  },
  { id:2,
    img: 'https://images.acer.com/is/image/acer/aspire-7-a715-bl-bk-01a-1?$Product-Cards-XL$',
    cpu: 'inter core i7',
    ram:8,
    rom:1012,
    price:1500
  }
]
const cardSection = document.querySelector('.cards')
const logOut =document.querySelector('.btn2')
const logIn =document.querySelector('.btn1')
const register =document.querySelector('.btn3')
const header = document.querySelector('header')
const addBtn = document.querySelector('.add')
const allInputs = document.querySelectorAll('input')
const modal = document.querySelector('.modal')
const form = document.querySelector('form')


function upDate(){
  cardSection.innerHTML = ''

  for ( let computer of computers){
    cardSection.innerHTML += `   <div class="card">

   <button id='${computer.id}' class='delete'>x</button>
    <img src="${computer.img}" alt="Mcbook">
    <div class="info">
        <p>CPU: ${computer.cpu}</p>
        <p>RAM: ${computer.ram}GB</p>
        <p>SSD: ${computer.rom}GB</p>
        <p>${computer.price}$</p>
    </div>
    <button class="details">Details</button>
</div>`
  }
  for( let input of allInputs){
    input.value = ''
  }


}

upDate()


function addComputer(e){
  e.preventDefault()
  let newComputer ={
    id: computers.at(-1).id + 1,
    img: allInputs[4].value,
    cpu: allInputs[0].value,
    ram:allInputs[1].value,
    rom:allInputs[2].value,
    price:allInputs[3].value

  }
  computers.push(newComputer)
  upDate()
  form.style='transform: scale(0);height:0px'
}

function deleteComputer(id){
  computers = computers.filter( comp => comp.id !== id )
  upDate()
}


header.addEventListener('click', (e) =>{
if(e.target.innerHTML === 'Log in'){
  logIn.style.display = 'none'
  register.style.display = 'none'
  logOut.style.display = 'inline'
  

}

if(e.target.innerHTML === 'Log out'){
  logIn.style.display = 'inline'
  register.style.display = 'inline'
  logOut.style.display = 'none'
  

}
})

function handleClick(e){
  if(e.target.innerHTML === 'x'){
    deleteComputer(Number(e.target.id))

  }
}

addBtn.addEventListener('click', addComputer)

cardSection.addEventListener('click',handleClick)
modal.addEventListener('click', () =>{
  form.style= 'transform: scale(1)'
})


