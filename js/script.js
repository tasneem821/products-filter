let productName = ["product1","product2","product3","product4"]
let productPrice = [100,200,50,300]
function show(){
  let answer = document.getElementById("answer")
  for(let i =0;i<productName.length;i++){
    answer.innerHTML+=`<li ><h3>${productName[i]}</h3> <p>price: ${productPrice[i]} L.E.</p></li>`
  }
}


function filter(){

  let target = document.getElementById("num").value
  console.log(target)
  if(target==""){
    answer.innerHTML=""
show()
  }
  else{
    let found=false;
    answer.innerHTML=""

    for(let j =0;j<productName.length;j++){
      if(target>=productPrice[j]){
        found = true;
        answer.innerHTML+=`<li ><h3>${productName[j]}</h3> <p>price: ${productPrice[j]} L.E.</p></li>`
      }
    }
    if(found == false){
  answer.innerHTML=`<p>there is no products that is less than that price</p>`
    }
  }
 
  event.preventDefault()
}