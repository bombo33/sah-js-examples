//Third part
console.log('Script file is loaded.');

$('h1').html('This is done by <em>JawaScript</em>!');
$('h2').toggleClass('blue');




function myLittleFunction() {
    $('main').append('<p>A p is appended in main</p>')
    $('p').css('border', '1px solid red');
    $('p').css('padding', '10px');
    
}


$('#add').click(myLittleFunction);
$('#remove').click(function() {
    $('p:last-child').remove();
});
