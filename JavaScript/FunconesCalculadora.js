function sumar(n1, n2){
  console.log(n1+n2)
}

function restar(n1, n2){
  console.log(n1-n2)
}

function multiplicar(n1, n2){
  console.log(n1*n2)
}

function dividir(n1, n2){
  console.log(n1/n2)
}

function operador(n1, n2, operacion){
  if(operacion==="suma"){
    sumar(n1, n2);
  }else if(operacion==="resta"){
    restar(n1, n2);
  }else if(operacion==="multiplica"){
    multiplicar(n1, n2);
}else if(operacion==="divide"){
 dividir(n1, n2);
  }
}
var calculo="divide";
var n1=5;
var n2=2;
operador(n1, n2, calculo);
