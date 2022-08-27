const formulario = document.querySelector("formulario");
const valora = document.querySelector("#a");
const valorb = document.querySelector("#b");
const valorc = document.querySelector("#c");
const valorx1 = document.querySelector("#x1");
const valorx2 = document.querySelector("#x2");

function bhaskara() {
  const a = valora.value;
  const b = valorb.value;
  const c = valorc.value;
    
  const delta = (b * b) - (4 * a * c);
    
  if(delta < 0){
    alert("Delta é negativo");
  }else{
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    valorx1.value = x1;
    valorx2.value = x2;
  }
}