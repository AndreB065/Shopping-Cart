// window.onload = function() {
  const X = document.getElementById("funny");
  const parentElement = document.getElementById("master-items");
  const button = document.getElementById('silence');
  
  console.log(X);
  console.log(parentElement);
  // };
  
  
  button.addEventListener('click', function newThing(){
      const newItem = document.createElement("div");
      const parentElement = document.getElementById("master-items");
      newItem.innerHTML = "hereAndNow";
      newItem.setAttribute("id", "item")
    parentElement.appendChild(newItem);
    alert('Words');
})