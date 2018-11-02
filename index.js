document.addEventListener("DOMContentLoaded",function(){
  let workspace = document.getElementById("pixels");
  const createAllPixels = () =>{
     console.log(workspace)
    for(let j = 0; j < 4800; j++){
        let singlePixel = document.createElement("div")
        singlePixel.className = "pixel";
        console.log(workspace)
        workspace.appendChild(singlePixel);
    }
  }
  const createColorPannel = () =>{
    let colorArray = ["red","orange","yellow","green","blue","indigo","violet","white","black","grey","skyblue","darkgreen","purple","aqua","aquamarine","darkslategrey","dodgerblue","greenyellow","lime","tomato","slateblue","tan","whitesmoke","mediumorchid","lightpink","hotpink"];
    let colors = document.getElementById("colors");
    for(let i = 0; i < colorArray.length; i++){
      let colorSwatch = document.createElement("div");
      colorSwatch.className = "colorSwatch";
      colorSwatch.style.backgroundColor = colorArray[i];
      colors.appendChild(colorSwatch);
    }
  }
  let selectedColor;
  workspace.addEventListener("click",function(event){
    if(event.target === workspace){return}
    event.target.style.backgroundColor = selectedColor;
    event.target.style.borderColor = selectedColor;
  });

  colors.addEventListener("click",function(event){
    selectedColor = event.target.style.backgroundColor;
    document.body.style.backgroundColor = selectedColor;
  });

  let btn = document.querySelector("#reset");

  let pix = document.getElementsByClassName("pixel");
  const rest = () =>{
    for(let k = 0; k < pix.length; k++){
    pix[k].style.backgroundColor = "white";
    pix[k].style.borderColor = "black";
    }
  }
  btn.addEventListener("click",rest);
  createColorPannel();
  createAllPixels();
});
