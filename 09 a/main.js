const cambio=()=>{
   let n = parseInt(document.querySelector("#n").value)
   document.querySelector("#vn").innerHTML = n
   let div = document.querySelector("#res");
   div.innerHTML ="<img src= 'img.gif' width='200px' height= '230px'>";
   
   setTimeout(()=>{
  
  let r=Math.sqrt(n);
  div.innerHTML= r.toFixed(2);
     },1000);
}


const Borrar=()=>{
 let borrar=document.querySelector("#res").innerHTML="";
}