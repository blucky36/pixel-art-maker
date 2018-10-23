document.addEventListener("DOMContentLoaded",function(){

//   //need to change border color of each color when clicked

    //figure out how to connect the two functions with a "brush"

  const createAllPixels = () =>{
     let workspace = document.getElementById("pixels");
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

  pixels.addEventListener("click",function(event){
    event.target.style.backgroundColor = selectedColor;
    event.target.style.borderColor = selectedColor;
  });

  colors.addEventListener("click",function(event){
    selectedColor = event.target.style.backgroundColor;
    document.body.style.backgroundColor = selectedColor;
  });

  // pixels.addEventListener("",function(event))

  createColorPannel();
  createAllPixels();
});
