function gettime(time) {
    const hour = parseInt(time / 3600);
    let reminiscesecond = time % 3600;
    const minute = parseInt(reminiscesecond / 60);
    reminiscesecond = reminiscesecond % 60;
    return `${hour} hour ${minute} minute ${reminiscesecond} second ago`;
}



//create loadcatagori
const loadcatagories = () =>{
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) =>displaycatagoris(data.categories))
    .catch((error) => console.log(error));
};
const loadcategorisVideos = (id) => {
  
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then((res) => res.json())
    .then((data) =>  {
       removeactivebtn()
        const activeBtn = document.getElementById(`btn-${id}`);
        activeBtn.classList.add("active");
       displayvideos(data.category);
    })
          
    .catch((error) => console.log(error));
};

const removeactivebtn =() =>{
    const buttons = document.getElementsByClassName("category-btn");
    console.log(buttons);
    for(let btn of buttons){
        btn.classList.remove("active");
    };
};

//category:"Music"
//category_id: "1001"

const displaycatagoris = (categories) => {

    const categoriscontener = document.getElementById("categorisbtn");
    categories.forEach((item) => {
        console.log(item); 

        //creat a button
     const buttonContener = document.createElement("div");
     buttonContener.innerHTML = `
      <button id="btn-${item.category_id}" onclick="loadcategorisVideos('${item.category_id}')" class="btn category-btn">

       ${item.category}
       </button>
     `;
     
     //add button to catagori contener 
     categoriscontener.append(buttonContener);
    });
    };


   
    const loadvideo = () => {
        fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then((res) =>res.json())
        .then((data) =>displayvideos(data.videos) )
        .catch((error) => console.log(error));
    }
    const videodetails = (videoid) =>{
              console.log(videoid);
    }
    const displayvideos = (videos) => {
       const videocontener = document.getElementById("videos");
       videocontener .innerHTML= "";

       if( videos.length == 0){
        videocontener.classList.remove("grid");
        videocontener.innerHTML =`
        <div class="flex mt-15 flex-col gap-5 min-h-[300px] justify-center items-center ">
         <img class="mt-15 " src="assets/Icon.png" />
          <h2 class="font-semibold text-2xl"> No Content Here in this Categery </h2>
        </div>
       
        `;
        return;
       }
       else{
         videocontener.classList.add("grid");
       }

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
      ${
        video.others.posted_date?.length == 0 ? "":
        `<span class="absolute right-2 bottom-15 bg-black text-stone-50 rounded p-1">${gettime( video.others.posted_date)}</span>`
      }
      
  </figure>
  <div class="pt-2 flex gap-4">
      <div>
        <img class="h-10 w-10 rounded-full object-cover" src=${video.authors[0].profile_picture}/>
  </div>
      <div class="">
       <h2 class="font-bold"> ${video.title}</h2>
      <div class="flex   gap-3">
       <p class="text-gray-500"> ${video.authors[0].profile_name}</p>

       ${video.authors[0].verified == true? '<img class=" w-5 h-5 object-cover" src="https://cdn-icons-png.flaticon.com/128/9247/9247768.png"/>':""}

         </div>

         <p><button onclick="loadDetails('${
            video.video_id
         }')" class="btn btn-sm btn-error"> details </button></p>
  </div>

  </div>
      `;
 videocontener.append(card);
  })
    }
loadcatagories();
loadvideo();

