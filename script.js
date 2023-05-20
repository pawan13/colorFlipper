const simpleHexElem = document.getElementById("simpleHex");
const containerElem = document.getElementById('container')
const colorFlipper = document.getElementById('color-flipper')
const txtArea = document.getElementById("txtArea")
const btn = document.getElementById('btn')



simpleHexElem.addEventListener("click", ()=>
{
    // containerElem.classList.remove('container-bg')
    // containerElem.classList.add("simpleHex")

    containerElem.style.background= "#f2f5f7"
    txtArea.textContent = 'Background Color: #F1f5f8'
    btn.style.color ="#000"

})


colorFlipper.addEventListener("click", ()=> {
    // containerElem.classList.remove('simpleHex')
    // containerElem.classList.add("container-bg")
    containerElem.style.background= "red"
    txtArea.textContent = 'Background Color: red'
})


btn.addEventListener('click', ()=>{
    let color = []
for(let i=6; i>0; i--){
    const hexValue = Math.round(Math.random() * (i)) + 1
   color.push(hexValue)

}
console.log(color)
 let colorCode = `#${color[3]}${color[2]}${color[0]}`
 console.log(colorCode)
         containerElem.style.background = colorCode
         txtArea.textContent = `Background Color: ${colorCode}`
         btn.style.color ="#fff"
})
