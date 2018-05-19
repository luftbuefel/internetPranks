let body = document.querySelector("body");
if(body.style.backgroundColor!=""){
  body.style.color = body.style.backgroundColor;
}else if (body.style.color!=""){
  body.style.backgroundColor = body.style.color;
}else{
  body.style.color = body.style.backgroundColor = "#fff";
}
