
$("#search").on("click", function(){

  var search = $("#exampleFormControlInput1").val().trim();
    console.log(search);
  var  endYear = $("#endyear").val().trim();
  var startYear = $("#startyear").val().trim();
   console.log(endYear);
//URL query if dates entered
var queryURLSearchDate = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=obama&begin_date=20000101&end_date=20191231&api-key=eV7sVGDBuWfV0mlkOjC4URu45WJVqAbC&q=5";





$.ajax ({
    URL: queryURLSearchDate,
    Method: "GET"
}).then(function(response){
    console.log(response);
    console.log(response.runtime)
    

});
});
