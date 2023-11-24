const title_text = document.getElementById("title_text")
const price_text  = document.getElementById("price_text")
const title_img = document.getElementById("title_img")
const wrapper_product = document.getElementById("wrapper_product")
const featured = [
  {
    id: 1,
      title:"toilet",
      price:40  ,
      img:"images/urs-wht-13261-jaquar-urinal-500x500-1-1-300x300.jpg"
  },
  {
    id: 2,
      title:"toilet",
      price:40  ,
      img:"images/urs-wht-13261-jaquar-urinal-500x500-1-1-300x300.jpg"
  },
   {
    id: 2,
      title:"toilet",
      price:40  ,
      img:"images/urs-wht-13261-jaquar-urinal-500x500-1-1-300x300.jpg"
  },
    {
    id: 2,
      title:"toilet",
      price:40  ,
      img:"images/urs-wht-13261-jaquar-urinal-500x500-1-1-300x300.jpg"
    }
]
const currentItem = 0;
window.addEventListener("DOMContentLoaded", () => {
  const items = featured.map((item) => {
     
    return `
    
                               <div class="box_main">
                                 <h4 id='title_text' class="title_text">${item.title}</h4></h4>
                                 <p id="price_text" class="price_text">Price  <span style="color: #262626;">$ ${item.price}</span></p>
                                 <div class="title_img"><img id=title_img src=${item.img}></div>
                                 <div class="btn_main">
                                    <div class="buy_bt"><a href="#">Buy Now</a></div>
                                    <div class="seemore_bt"><a href="#">See More</a></div>
                                 </div>
                              </div>
    `;
  })
 
  wrapper_product.innerHTML = items;
})