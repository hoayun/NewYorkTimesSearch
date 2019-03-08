

////URL query for just key word search
queryURLSearch = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + input + "&api-key=t4lC5ztOwGuKqRDv8AziAiygSX0OiEtf"

$.ajax ({
    URL: queryURLSearch,
    Method: "GET"
}).then(function(response){
    console.log(response);
    console.log(response.runtime)
});



////URL query if dates entered
/*queryURLSearchDate = "https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=" + input + "&facet_field=day_of_week&facet=true&begin_date=" + startYear + "0101&end_date=" + endYear + "0101&api-key=t4lC5ztOwGuKqRDv8AziAiygSX0OiEtf"

$.ajax ({
    URL: queryURLSearchDate,
    Method: "GET"
}).then(function(response){
    console.log(response);
    console.log(response.runtime)
});
