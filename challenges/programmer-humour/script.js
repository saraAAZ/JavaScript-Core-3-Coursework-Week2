let imageConatiner = document.querySelector(".image-container");
 let image = document.createElement("img");
getImage();

function getImage() {
  fetch("https://xkcd.now.sh/?comic=latest")
    .then((response) => {
      return response.json();
    })
    .then((data) => {      
       
      console.log(data);
      image.src= data.img;
      console.log(image.src);
      imageConatiner.appendChild(image);
    
    }).catch(error=>{
        alert(error);
    });
}
