window.onload = function(){
    $.getJSON("https://spreadsheets.google.com/feeds/list/10GiBKjBcXYvONUEJJtxzn1XNmyqph24Qn7phqOZK5dg/od6/public/values?alt=json",
    function(data){
        data = data['feed']['entry']
        console.log(data);
        show(data);
    }
    )
    function show(data){
        var out = '';
        for(var i = 0; i < data.length; i++){

            out +=`<div class="card">`;
            out +=`<h3 class="name_card">${data[i]['gsx$name']['$t']}</h3>`;
            out +=`<img src="${data[i]['gsx$image']['$t']}" alt="" class="img_card">`;
            out +=`<p class="price_card">${data[i]['gsx$price']['$t']}</p>`;
            out +=`</div>`;

        }
        document.querySelector('.product_field').innerHTML = out;
    }
}
