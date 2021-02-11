
hDiv = document.querySelector(".wraper .header a");
console.log(hDiv);
if (hDiv) {
  let p = document.createElement('p');
  p.innerHTML = 'mmm';
  hDiv.innerHTML = '';
  //hDiv.prepend(p);;
}
