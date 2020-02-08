// window.onload = function() {
  //const X = document.getElementById("funny");
  const parentElement = document.getElementById("master-items");
  const act_btn = document.getElementById('atc-btn');
  const my_total = document.getElementById('my-total');
  let my_item_count = document.getElementById('my-item-count');
  let item_count = document.getElementsByClassName('item').length;
  let total = 6000;
  
  //console.log(X);
  console.log(parentElement);
  // };
  
  
  act_btn.addEventListener('click', function newThing(){
      const newItem = document.createElement("div");
      const parentElement = document.getElementById("master-items");
      newItem.innerHTML = `<div class="item">
              <div class="left">
                <img class="left-image" src="./flower.jpeg" alt="" />
              </div>
              <div class="middle">
                <a><h3>Velit Esse Molestie</h3></a>
                <p>$3000</p>
              </div>
              <div class="right">
                <i class="far fa-times-circle"></i>
              </div>
            </div>`;
      newItem.setAttribute("id", "item")
    parentElement.appendChild(newItem);
	item_count += 1;
	my_item_count.innerHTML = item_count;
	total += 3000;
	my_total.innerHTML = total;
    alert('Adding new item to cart.');
})