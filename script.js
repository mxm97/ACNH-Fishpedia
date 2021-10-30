// Constants
const BASE_URL = 'http://acnhapi.com/v1a/fish/';

// State Variables
let fishData;

// Cached Element References
const $input = $('input[type="text"]');
const $form = $('form');
const $main = $('main');

// Event Listeners
$form.on('submit', handleSubmit);

// Functions
function handleSubmit(evt) {
    evt.preventDefault(); //disables page refresh behavior when submitting form
    const fishName = $input.val();
    $.ajax(`${BASE_URL}${fishName}`).then(function(data) {

        fishData = data;
        // adds data as text/image content to DOM elements
        render();

    }, function(error){
        console.log(error);
    });
}

function render(){
    // this design ensures image is not kept on page after subsquent searches
    $main.html(`
        <h3>Fish Name: </h3> 
        <p id='fishName''>${fishData.name['name-USen']}</p>  
        <h3>Price: </h3> 
        <p id='price'>${fishData.price} Bells</p>
        <h3>Catch-phrase: </h3>
        <p id='catchPhrase'>${fishData['catch-phrase']}</p>
        <h3>Image: </h3>
        <img id='fishImage' src=${fishData.image_uri}/>
        <h3>Museum Phrase: </h3>
        <p id='museumPhrase'>${fishData['museum-phrase']}</p>
    `);
};