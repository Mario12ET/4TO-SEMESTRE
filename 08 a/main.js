const cambio=()=>{
   let U = parseInt(document.querySelector("#V").value)
   document.querySelector("#valor").innerHTML = U
   let div = document.querySelector("#TM")
   div.innerHTML ="<img src= 'img.gif' width='200px' height= '230px'>";
   
   setTimeout(()=>{
   let TablaHTML = "<table>";
  for(i=1; i<=10; i++) {
    TablaHTML+= "<tr><td>" +U+ "X" +i+ "=" + (i*U) + "</td></tr>";
             }
  div.innerHTML = TablaHTML + "</table>";
     },1000);
}


const Borrar=()=>{
 let borrar=document.querySelector("#TM").innerHTML="";
}