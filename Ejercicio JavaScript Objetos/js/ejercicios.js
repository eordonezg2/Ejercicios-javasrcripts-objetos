class ejer{
  sumaDivisores(num,inicialp){
    let acu=0
    for(let divisor=inicialp;divisor<num;divisor++){
        if (num%divisor==0){
            acu=acu+divisor
        }
    }
    return acu
}
 
numeroperfecto(){
    // capturar
    let arreglo=[6,5,25,24,28]
    let arreglo2=[]
    let n=0, i=0, suma=0
    for(i=0;i<=arreglo.length-1;i++){
        n=arreglo[i]
        let acud=this.sumaDivisores(n,1)
        if(acud==n){
          suma=suma+acud
          arreglo2.push(n)
        }
    }
    document.getElementById("resp").textContent=`Los numeros perfectos del arreglo son: ${arreglo2}\nla suma de ellos es: ${suma}`
}

isPrimo(num){
  let divisor=2,band=1
  while(divisor < num && band == 1){
      if (num % divisor == 0){
          band=0
      }else{
          divisor=divisor+1
      }
  }
  return band
}

presentarprimos(){
  let arreglo=[6,5,25,7,28]
  let i=0, arreglo2=[], vacio=0, n=0
  for(i=0;i<=arreglo.length-1;i++){
    n=arreglo[i]
    let acud=this.isPrimo(n)
    if(acud==1){
       arreglo2.push(n)
    }else{
      vacio=vacio+1
    }
  }
 document.getElementById("resp2").textContent=`Los numeros primos de arreglo son: ${arreglo2}`
}

calcularpoten(base,expo){
  let mul=1, i=1
  for (i=1;i<=expo;i++){
      mul=mul*base
  } 
  return mul
}

baseexponente(){
  let cbase=parseInt(document.getElementById("boton1").value)
  let cexpo=parseInt(document.getElementById("boton2").value)
  let multi=this.calcularpoten(cbase,cexpo)
  document.getElementById("resp3").textContent = (`${cbase} elevado a ${cexpo} es: ${multi}`)
}

elevarpropionumero(){
    let arreglo=[4,3,2,5]
    let i=0, arreglo2=[], num=0
    for(i=0;i<=arreglo.length-1;i++){
     num=arreglo[i]
     let elev=this.calcularpoten(num,num)
     arreglo2.push(elev)
     }
    document.getElementById("resp4").textContent=`Los numeros elevado a su propio numero es: ${arreglo2}`
}


tablademulti(){
let num1=document.getElementById("boton").value
if(num1>=0){  
let multi=0, tabla=""
for(let i=1;i<=12;i++){
  multi=num1*i
  tabla+=`${num1} x ${i} = ${multi}\n`
}
document.getElementById("resp5").innerHTML=tabla
}else{
document.getElementById("resp5").innerHTML="Ingresastes un numero menor a cero, refresca la pagina"
}
}


calcularincial(num1,vinicial){
  let i=vinicial, arreglo=[], vacio=0
    for(i=vinicial;i<num1;i++){
      if (num1%i==0){
        arreglo.push(i)
      }else{
        vacio=vacio+1
      }
    }
    return arreglo
}

valorinicial(){
let num=parseInt(document.getElementById("botun").value)
let inicial=parseInt(document.getElementById("botun1").value)
if(num>inicial){ 
let resp=this.calcularincial(num,inicial)
document.getElementById("resp6").textContent=`Los divisores de ${num} con valor inicial en ${inicial} son: ${resp}`
}else{
document.getElementById("resp6").textContent="El numero debe ser mayor al valor inicial, ingresa de nuevo"
}
}

divisoresuma(){
  let num=parseInt(document.getElementById("botonn").value)
  let inicial=parseInt(document.getElementById("botonn1").value)
  let respuesta=this.sumaDivisores(num,inicial)
  if(num>inicial){
    document.getElementById("resp7").textContent=`La suma de los divisores de ${num} desde ${inicial} es: ${respuesta}`
  }else{
    document.getElementById("resp7").textContent="El numero debe ser mayor al valor inicial, ingresa de nuevo"
  }
}

digitoxdigito(nump){
let arreglo=[], digito=0
while(nump>0){
  digito=nump%10
  nump=Math.trunc(nump/10)
  arreglo.push(digito)
}
return arreglo
}

digitonumero(){
  let num=document.getElementById("botin").value
  let r=this.digitoxdigito(num)
  document.getElementById("resp8").textContent=`Los digitos del numero ingresado puesto en un arreglo son:${r}`
}

ejercicio9(){
  let num=document.getElementById("bot").value
  let r=this.digitoxdigito(num)
  let i=0, suma=0
  for (i=0;i<=r.length-1;i++){
    suma=suma+r[i]
  }
  document.getElementById("resp9").textContent=`La suma de los digitos del numero ${num} es: ${suma}`
}

ejercicio10(){
  let num=document.getElementById("bott").value
  let r=this.digitoxdigito(num) 
  let arreglo=[], i=0
  for (i=0;i<=r.length-1;i++){
      if(r[i]%2==0){
        arreglo.push(r[i])
      }
  }
  document.getElementById("resp10").textContent=`Los digitos pares del numero ingresado son: ${arreglo}`
}

ejercicio11(){
  let num=document.getElementById("botto").value
  let r=this.digitoxdigito(num)
  let longi=r.length
  let primero=r[longi-1]
  document.getElementById("resp11").textContent=`El primer digito del numero ${num} es: ${primero}`
}

ejercicio12(){
  let num=document.getElementById("boot").value
  let r=this.digitoxdigito(num)
  let ultimo=r[0]
  document.getElementById("resp12").textContent=`El ultimo digito del numero ${num} es: ${ultimo}`
}

factorial(nump){
  let i=1, fac=1
  for(i=1;i<=nump;i++){
    fac=fac*i
  }
  return fac
}

ejercicio13(){
  let num=document.getElementById("b").value
  let r=this.factorial(num)
  document.getElementById("resp13").textContent=`EL factorial de ${num} es: ${r}`
}

ejercicio14(){
  let arreglo=[3,2,4]
  let arreglo2=[], i=0
  for (i=0;i<=arreglo.length-1;i++){
    let r=this.factorial(arreglo[i])
    arreglo2.push(r)
  }
  document.getElementById("resp14").textContent=`Los factoriales de los numeros del arreglo son: ${arreglo2}`
}

retornar(iniciop,finalp){
   let i=iniciop, arreglo=[]
   for(i=iniciop;i<finalp;i++){
    arreglo.push(i)
   }
  return arreglo
}

ejercicio15(){
  let inicio=document.getElementById("boo").value
  let final=document.getElementById("boo2").value
  let r=this.retornar(inicio,final)
  if(inicio<final){
    document.getElementById("resp15").textContent=`Arreglo entre rango de inicio ${inicio} y final ${final} = ${r}`
  }else{
    document.getElementById("resp15").textContent="El numero de inicio debe ser menor que el de final, ingresa de nuevo"
 }
}
}
let ejer1= new ejer

