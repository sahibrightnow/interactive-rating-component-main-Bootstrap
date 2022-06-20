let numbers = $('.number').toArray();
let selected;

numbers.forEach( element => { 
 element.addEventListener('click', function(e) { 
    selected = e.target.id;
    
 });

$('.btn').click( () => {
    $('.card-body').hide();
    $('.feedback').show();
    $('#rating').text(selected);

})

   
   
});
