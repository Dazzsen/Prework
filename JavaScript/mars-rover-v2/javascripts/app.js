

var rover = {
  direction: "N",
  x: "0",
  y: "0",
  travelLog: [
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
  ]
}
// ======================

// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  
  switch (rover.direction){
    case "W":
      rover.direction="W";
      console.log("Rover miraba hacia el Norte (N) y gira a la izquierda; Rover ahora mira hacia el oeste (W)")
      break;
      
    case "S":
      rover.direction="S";
      console.log("Rover miraba hacia el Oeste (W) y gira a la izquierda; Rover ahora mira hacia el Sur (S)")
      break;
      
    case "E":
      rover.direction="E";
      console.log("Rover miraba hacia el Sur (S) y gira a la izquierda; Rover ahora mira hacia el Este (E)")
      break;
      
    case "N":
      rover.direction="N"
      console.log("Rover mira ahora al Norte (N)")
      break;
  }
}

function turnRight(rover){
  console.log("turnRight was called!");
  
  switch (rover.direction){
    case "E":
      rover.direction="E";
      console.log("Rover miraba hacia el Norte (N) y gira a la derercha; Rover ahora mira hacia el Este (E)")
      break;
      
    case "S":
      rover.direction="S";
      console.log("Rover miraba hacia el Este (E) y gira a la derecha; Rover ahora mira hacia el Sur (S)")
      break;
      
    case "W":
      rover.direction="W";
      console.log("Rover miraba hacia el Sur (S) y gira a la derecha; Rover ahora mira hacia el Oeste (W)")
      break;
      
    case "N":
      rover.direction="N"
      console.log("Rover mira ahora al Norte (N)")
      break;
  }
}

function moveForward(rover){
  console.log("moveForward was called")
  
  if(rover.direction==="W"){
    rover.x-1;
    console.log("Rover esta en la poicion: X -1");
  }else if (rover.direction==="E"){
    rover.x+1;
    console.log("Rover esta en la poicion: X +1");
  }else if (rover.direction==="N"){
    rover.y-1;
    console.log("Rover esta en la poicion: Y -1");
  }else if (rover.direction==="S"){
    rover.y+1;
    console.log("Rover esta en la poicion: Y +1");
  }
}



function commands(com){
  for(var i=0; i<com.length; i++){
      if(com[i]==="l"){
       turnLeft(rover);
      }else if (com[i]==="r"){
       turnRight(rover);
      }else if (com[i]==="f"){
        moveForward(rover);
      }
  }
}


var order="rffrfflfrff";
//var order="l";
commands(order);