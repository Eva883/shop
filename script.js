var card = document.querySelector('.card')
var product_field = document.querySelector('.product_field')
console.log(card.outerHTML)
var card_html = '';

for( var i = 0; i < 5; i++)
{
    card_html += card.outerHTML;
    product_field.innerHTML = card_html;
}