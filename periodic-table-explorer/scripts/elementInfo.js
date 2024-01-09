const urlParam = new URLSearchParams(window.location.search);
const search = urlParam.get("element-name");
// console.log(search);
window.addEventListener("load" , () =>{
  getData();

})

let dataObj;

function getData() {
        axios.get('../data/elements.json').then((res)=>{
            displayData(res.data);
        }).catch((err)=>{
            console.log(err);
        })
  }
  function displayData(data){
    data.elements.forEach(element => {
        if(element.name == search){
            document.getElementById("heading").innerHTML = search;
        }
    });
  }

