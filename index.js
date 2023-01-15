const subHeading = document.getElementById("subHeading");
subHeading.innerText = `there are ${countries_data.length} Countries in the World`;

const graphTitle = document.getElementById("graphTitle");
const sortedPopulation = countries_data.sort(function (a, b) {
  return b.population - a.population;
});

// console.log(sortedPopulation);
const sotedLanguage = countries_data.sort(function (a, b) {
  return b.population - a.population;
});
let totalPop = 0;
for (let index = 0; index < sortedPopulation.length; index++) {
  totalPop += sortedPopulation[index].population;
}
console.log(totalPop);

const lowerDiv = document.getElementById("lowerDiv");
// console.log(graph);
funcOne();

function funcOne() {
  lowerDiv.innerHTML = "";
  console.log("button one clicked");
  graphTitle.innerText = `Top 10 countries by Population`;
  for (let i = 0; i < 10; i++) {
    const graph = document.createElement("div");
    graph.setAttribute("class", "graph");
    let percent = (sortedPopulation[i].population / totalPop) * 100;
    percentage = percent.toFixed(2);

    graph.innerHTML = `<div class="name"> ${sortedPopulation[i].name}</div>
                         <div class="outerBar"><div class="bar" style="width: ${
                           percentage + 10
                         }%;"">${percentage}%</div></div>
                          <div class="population">${
                            sortedPopulation[i].population
                          }</div>`;
    lowerDiv.appendChild(graph);
  }
}
function funcTwo() {
  lowerDiv.innerHTML = "";
  graphTitle.innerText = `Top 10 Most Spoken Languages worldwide`;
  console.log("button two clicked");
  let=langArray=[];
  for (let index = 0; index < countries_data.length; index++) {
    langArray.push(countries_data[index].languages);
    
  }
  const flatArray=langArray.flat();
  // console.log(flatArray);
  const LangCount={}
  flatArray.map((ele)=>{
    LangCount[ele] = (LangCount[ele]||0 )+1;
  })
  const objArray=Object.entries(LangCount);
  const sortedArray=objArray.sort((a,b)=>{
    return b[1]-a[1];
  })
  // console.log(sortedArray);
  for (let index = 0; index < 10; index++) {
    console.log(sortedArray[index]);
    const graph = document.createElement("div");
    graph.setAttribute("class", "graph");
    let percent = (sortedArray[index][1] / sortedArray.length) * 100;
    percentage = percent.toFixed(2);

    graph.innerHTML = `<div class="name">${sortedArray[index][0]}</div>
                         <div class="outerBar"><div class="bar" style="width: ${
                           percentage + 10
                         }%;"">${percentage}%</div></div>
                          <div class="population">${
                            sortedArray[index][1]
                          }</div>`;
    lowerDiv.appendChild(graph);
    
  }
}
