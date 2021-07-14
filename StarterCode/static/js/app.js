// from data.js
var tableData = data;

// var sighting = tableData[0]

// YOUR CODE HERE!
// console.log(sighting)

var tbody = d3.select("tbody")

tableData.forEach(sighting=>{

var trow = tbody.append("tr")

trow.append("td").text(sighting["datetime"])

trow.append("td").text(sighting["city"])

trow.append("td").text(sighting["state"])

trow.append("td").text(sighting["country"])

trow.append("td").text(sighting["shape"])

trow.append("td").text(sighting["durationMinutes"])

trow.append("td").text(sighting["comments"])

})


// level 1 clear and redraw


// Filter Search Button handler
function filterSearch() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input value from the form
    var sightingDate = d3.select("#datetime").value;
  
    // clear the input value
    tbody.html("")

    // 1. Create a new list of JSON with just the filtered via array.filter with array being tabledata
    tableData.filter(x['date']==sightingDate)


    // 2. filtered_data.forEach to redraw table
    tableData.forEach(sighting=>{

      var trow = tbody.append("tr")
      
      trow.append("td").text(sighting["datetime"])
      
      trow.append("td").text(sighting["city"])
      
      trow.append("td").text(sighting["state"])
      
      trow.append("td").text(sighting["country"])
      
      trow.append("td").text(sighting["shape"])
      
      trow.append("td").text(sighting["durationMinutes"])
      
      trow.append("td").text(sighting["comments"])
      
      })

    // redraw data 
    // filter function on tabledata where sightingDate = tableData.datetime

    //tableData.forEach(sighting === sightingDate)

    // data = ["datetime"] that matched sightingData 
  // Add event listener for submit button
d3.select("#Filter Table").on("click", filterSearch);

  }





// d3.select("#datetime").node().value = "";