
// try to comment each line of code

// List of icons to randomly choose from
  var iconsList = ["icon://fa-heart", 

                  "icon://fa-music", 
                 
                  "icon://fa-smile-o", 
                 
                  "icon://fa-globe", 
                 
                  "icon://fa-tree", 
                 
                  "icon://fa-bolt", 
                 
                  "icon://fa-moon-o",
                 
                  "icon://fa-star"];
                  
                  
  // displays the first screen when turning on the app
  homeScreen();
    
    
    
// when a user clicks the "Colors!" button
onEvent("colorsButton", "click", function(){ 
  
 
    changeShapeColor();
    changeScreenColor();  

});         

// when a user clicks the "Locations!" button
onEvent("locationsButton", "click", function(){
  
    changeLocation(); 
});     


// when a user clicks the "Locations!" button
onEvent("shapesButton", "click", function(){
  
    changeShapes(); 

});     





// first screen after turning on app

function homeScreen(){
  
  var defaultRandomShapes = iconsList[randomNumber(0, iconsList.length-1)]; // choses random shapes

  for( var i = 0; i < 20; i++){ // assign values to homescreen
    
  
      setProperty("icon"+i, "image", defaultRandomShapes); // choses random shapes from list
               
      setProperty("icon"+i, "text", randomNumber(0,100)); // color
      
      setProperty("icon"+i, "x",  randomNumber(0,300)); // x value
      
      setProperty("icon"+i, "y",  randomNumber(70,300)); // y value
      
      setProperty("icon"+i, "height", randomNumber(0,200)); // height
      
      setProperty("icon"+i, "width",  randomNumber(0,300)); // width
      
      setProperty("icon"+i, "icon-color", 
      
      rgb(randomNumber(0,255),randomNumber(0,255),randomNumber(0,255),0.5)); /* random red, green, blue values with
                                                                                    0.5 opacity */ 
   }
   
   changeScreenColor(); 
}


function changeScreenColor(){ // comment here
  
    setProperty("homeScreen", "background-color",  rgb(randomNumber(0,255),randomNumber(0,255),randomNumber(0,255),0.5));

}


function changeShapes(){
  
 var randomShapes = randomNumber(0, iconsList.length-1); 

  for( var i = 0; i < 20; i++){
    
     setProperty("icon"+i, "image", iconsList[randomShapes]);
  }
 
}

function changeShapeColor(){
  
   for( var i = 0; i < 20; i++){
    
    setProperty("icon"+i, "icon-color",rgb(randomNumber(0,255),randomNumber(0,255),randomNumber(0,255),0.5));
  }
}

function changeLocation(){
  
  for( var i = 0; i < 20; i++){
    
    setProperty("icon"+i, "x", randomNumber(0,100));
        
    setProperty("icon"+i, "y",  randomNumber(0,400));
            
    setProperty("icon"+i, "height", randomNumber(0,200));
    
    setProperty("icon"+i, "width",  randomNumber(0,400));
  }
}
