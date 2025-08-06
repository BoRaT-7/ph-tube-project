

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
loadcatagories();