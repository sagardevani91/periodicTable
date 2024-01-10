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
    data.forEach(element => {
        if(element.name == search){
          document.title=element.name;
          document.getElementById("img").src = element.image.url;
            document.getElementById("element-heading").innerHTML = element.name;
            document.getElementById("element-number").innerHTML = element.number;
            document.getElementById("element-summary").innerHTML = element.summary;
            document.getElementById("element-appearance").innerHTML = element.appearance;
            document.getElementById("element-atomic").innerHTML = element.atomic_mass;
            document.getElementById("element-category").innerHTML = element.category;
            document.getElementById("element-phase").innerHTML = element.phase;
            document.getElementById("element-symbol").innerHTML = element.symbol;
            document.getElementById("element-block").innerHTML = element.block;
            document.getElementById("source").href = element.source;
        }
    });
  }

