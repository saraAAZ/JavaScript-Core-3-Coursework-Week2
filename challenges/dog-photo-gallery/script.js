let clickedButton = document.getElementById("clicked-button");
let imageLi = document.querySelector(".image-container");
let url = `https://dog.ceo/api/breeds/image/random`;
let dogImage = document.createElement('img');
 imageLi.appendChild(dogImage);
 imageLi.style.display='none';
clickedButton.addEventListener('click',function(){
    fetch(url)
    .then(response=>{
        return response.json();
    }).then(data=>{
        imageLi.style.display='block';
        console.log(data.message);
        dogImage.src=data.message;
        }).catch(error =>{
            alert(error);
        })
});
