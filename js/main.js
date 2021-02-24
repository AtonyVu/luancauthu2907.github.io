let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];
let dem=0;

let ele = (ele)=>
{
    return document.getElementById(ele);
}
function thaykinh(i) 
{
    let name1 = ele("namee");
    let brand1 =ele("brand");
    let color1 =ele("color");
    let price1 =ele("price");
    let decrip1= ele("decrip")
       let info=ele("glassesInfo");
       info.style.display="block";
    name1.innerText=dataGlasses[i-1].name +"-";
    brand1.innerText=dataGlasses[i-1].brand;
    color1.innerText="("+dataGlasses[i-1].color+")";
    price1.innerText="$"+dataGlasses[i-1].price;
    decrip1.innerText=dataGlasses[i-1].description;
  if(dem != 0)
  {
      clearButton(dem);
  }
    let model = document.getElementById("avatar");
    let holding=document.getElementById(i);
    holding.classList="hold";
    model.innerHTML="";
    model.innerHTML+="<div><img src='./img/v"+i+".png'></div>";
    dem=i;
  

};
function removeGlasses(i)
{
    let model = document.getElementById("avatar");
    if(i===false)
    {
       model.innerHTML="";
    }
    else
    {
        thaykinh(dem);
    }
    
 }
 function clearButton(i)
 {
     let clear= document.getElementById(i);
     clear.classList.remove("hold");
 }