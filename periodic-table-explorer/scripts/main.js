window.addEventListener("load" , () =>{
    getData();
})


async function getData() {
    try {
      const response = await axios.get('data/elements.json');
      displayData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

function displayData(data){
    let table = document.getElementById("periodic-table");
    data.elements.forEach(element => {
        let div_element = document.createElement("div");
        div_element.classList.add("element",element.category.split(" ").join("_"));
        

        let div_element_number = document.createElement("div");
        div_element_number.innerHTML = element.number;

        let div_element_name = document.createElement("div");
        div_element_name.innerHTML = element.name;

        let div_element_symbol = document.createElement("div");
        div_element_symbol.innerHTML = element.symbol;
        div_element_symbol.setAttribute("class","element-symbol");

        let div_element_atomic = document.createElement("div");
        div_element_atomic.innerHTML = element.atomic_mass;


        div_element.append(div_element_number,div_element_symbol,div_element_name,div_element_atomic);
        table.appendChild(div_element);

        
        div_element.style.gridColumn = element.xpos;
        div_element.style.gridRow = element.ypos;

        
        div_element.addEventListener("click", () =>{
            window.location.href = `pages/element-details.html?element-name=${element.name}`;
        });
    });
  } 

  

