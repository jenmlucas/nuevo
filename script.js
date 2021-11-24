$("#form").submit(function (event) {
    event.preventDefault()

    var query = $("#search").val()

    let result = '';

    var API_KEY = 'da4d9baeee9eb6d86441f26dd38d4616'

    var url ='http://api.serpstack.com/search?access_key=' + API_KEY + '&type=web&query=' + query
    console.log(url)


    $.get(url, function(data) {
        console.log(data)

        data.organic_results.forEach(res => {

            result= `
            <h1>${res.title}</h1><br><a target="_blank" href="${res.url}">${res.url}</a>
            <p>${res.snippet}</p>

            `

            $("#result").append(result)
        });
    })
})
