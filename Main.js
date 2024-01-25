const button = document.querySelectorAll("button");
const result = document.getElementById("result");

for(let i=0;i<button.length;i++){
  button[i].addEventListener("click",()=>{
    const valor = button[i].textContent
    if(valor === "Clear"){
      result.value = "";
    }
    else if(valor === "="){
      result.value = eval(result.value);
    }
    else{
      result.value = result.value + valor;
    }
  })
}
