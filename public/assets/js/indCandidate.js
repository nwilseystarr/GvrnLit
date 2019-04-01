$(function () {

    // function getCandidate() {
    //     $.get("/api/candidate/:id", function (data) {
    //         console.log(data);
    //         console.log()
    //     });
    // };
    // getCandidate();

    function newsAPI() {
        var dataId = $("#newsAPI").attr("data-id");
        console.log(dataId);
        var url = 'https://newsapi.org/v2/everything?' +
            'q=' +
            dataId
            + '&' +
            'from=2019-03-24&' +
            'sortBy=recent&language=en&pageSize=3&' +
            'apiKey=400435e5285343fca12fc6110393eab5';

        var req = new Request(url);

        fetch(req)
            .then(function (response) {
                return response.json();
                // var articles = response.json();
                // console.log(articles)
            })
            .then(function (myJson) {
                // console.log(JSON.stringify(myJson.articles));
                var { articles } = myJson
                console.log('here are the articles: ', articles);
                for (i = 0; i < articles.length; i++) {
                    var newsOutlet = (articles[i].source.name);
                    var title = (articles[i].title);
                    var articleUrl = (articles[i].url);
                    var articleImage = (articles[i].urlToImage);

                    // Populate Data in DOM 

                    var resultDiv = $("<div class='result'>");
                    var imgDiv = $("<img class='img-fluid'>");
                    imgDiv.attr("src", articleImage);
                    resultDiv.append(imgDiv);

                    var resultTitleDiv = $("<div class='title'>");
                    var resultSourceDiv = $("<div class='source'>");
                    resultTitleDiv.html("<p class='h5'>" + title + "</p>");
                    resultSourceDiv.html("<small class='text-muted'>" + newsOutlet + "</small>");

                    $("#articleLink").attr("href", articleUrl);




                    // var resultDiv = $("<div class='div-result'>");
                    // var articleLink = $("<a class='news-link inline-flex'>").attr("href", articleUrl);
                    // var newsImg = $("<img class='img-fluid article-img mt-2 mb-5'>").attr("src", articleImage);
                    // var titleDiv = $("<div class='news-titleDiv'>").html("<p class='h5 mb-0'>" + title + "</p>");
                    // var newsSourceText = $("<small class='news-source text-muted'>").text("From: " + newsOutlet);

                    // var resultDiv = articleLink.append(titleDiv, newsSourceText, newsImg);

                    $("#newsArticle").append(resultDiv);
                };
            });
    }

    newsAPI();

    //====================================================
    //Propublica Finanace API
    //====================================================
    function financeAPI() {
        var dataID = $("#financeAPI").attr("data-id");
        // var dataID = "Trump";
        console.log(dataID);

        $.ajax({
            url: "https://api.propublica.org/campaign-finance/v1/2016/candidates/" + dataID + ".json",
            type: "GET",
            dataType: 'json',
            headers: { 'X-API-Key': 'ujXwLjfkOR6Pof7IUaTKVR1MCoWuu9o7Q8iHT4om' }
        }).done(function (data) {
            console.log(data);
            console.log("Name: " + data.results[0].name);
            console.log("Date coverage from: " + data.results[0].date_coverage_from);
            console.log("Date coverage to: " + data.results[0].date_coverage_to);
            console.log("Independent expenditures : $" + data.results[0].independent_expenditures);
            console.log("Total Contributions: $" + data.results[0].total_contributions);
            console.log("Total Disbursements: $" + data.results[0].total_disbursements);
            console.log("Total from Individuals: $" + data.results[0].total_from_individuals);
            console.log("Total from PACs: $" + data.results[0].total_from_pacs);
        });
    }
    financeAPI();

    //need if/else statement for if they have not filed with the FEC for election 


});
