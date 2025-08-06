

//create loadcatagori
const loadcatagories = () =>{
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) =>displaycatagoris(data.categories))
    .catch((error) => console.log(error));
};

//category:"Music"
//category_id: "1001"

const displaycatagoris = (categories) => {

    const categoriscontener = document.getElementById("categorisbtn");
    categories.forEach((item) => {
        console.log(item); 

        //creat a button
     const button = document.createElement("button");
     button.classList = "btn";
     button.innerText = item.category;
     
     //add button to catagori contener 
     categoriscontener.append(button);
    });
    };


   
    const loadvideo = () => {
        fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then((res) =>res.json())
        .then((data) =>displayvideos(data.videos) )
        .catch((error) => console.log(error));
    }
    const displayvideos = (videos) => {
       const videocontener = document.getElementById("videos");
        videos.forEach((video) =>{
            console.log(video);
            const card = document.createElement("div");
            card.classList = "card card-compact";
            card.innerHTML = `
    <figure class="h-[200px]">
    <img
      src=${video.thumbnail}
      class="h-full w-full object-cover";
      alt="Shoes" />
  </figure>
  <div class="pt-2 flex gap-4">
      <div>
        <img class="h-10 w-10 rounded-full object-cover" src=${video.authors[0].profile_picture}/>
  </div>
      <div class="">
       <h2 class="font-bold"> ${video.title}</h2>
      <div class="flex   gap-3">
       <p> ${video.authors[0].profile_name}</p>
        <img class=" w-5 h-5 object-cover" src="https://cdn-icons-png.flaticon.com/128/9247/9247768.png"/>
         </div>
  </div>

  </div>
      `;
 videocontener.append(card);
  })
    }
loadcatagories();
loadvideo();

