// This code will run as soon as the page loads
window.onload = function() {

  alert('JavaScript file - window.onload');

};




// 1.  Fool around with the GIPHY API. [Giphy API](https://github.com/Giphy).
//    * Be sure to read about these GIPHY parameters (hint, hint): 
//      * `q`
//      * `limit`
//      * `rating`
//    * Like many APIs, GIPHY requires developers to use a key to access their API data.
// For now, you can use their [public API key](https://github.com/Giphy/GiphyAPI#public-beta-key).
//    * Make sure you switch the protocol in the query URL from **`http to https`**, or the app may not work properly when deployed to Github Pages.




// 2. Your app should take the topics in this array and create buttons in your HTML.
//    * Try using a loop that appends a button for each string in the array.




// 3. When the user clicks on a button, the page should grab 10 static,
// non-animated gif images from the GIPHY API and place them on the page. 




// 4. When the user clicks one of the still GIPHY images, the gif should animate.
// If the user clicks the gif again, it should stop playing.




// 5. Under every gif, display its rating (PG, G, so on). 
//    * This data is provided by the GIPHY API.







//    * Only once you get images displaying with button presses
// should you move on to the next step.




// 6. Add a form to your page takes the value from a user input box
// and adds it into your `topics` array.
// Then make a function call that takes each topic in the array remakes
// the buttons on the page.




// original buttons
var topics = [ 'Star Trek', 'Captain Kirk', 'Khan' ];

// GIF parameters
var gifLimit = 10;
var gifRating = 'G';

    // Event listener for our buttons
    $("#gif-button").on("click", function() {

      // Storing our giphy API URL for a random gif image
      var queryURL = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=trek";

      // Perfoming an AJAX GET request to our queryURL
      $.ajax({
        url: queryURL,
        method: "GET"
      })

      // After the data from the AJAX request comes back
      .done(function(response) {

        console.log(response);

        for (var i = response.data.length - 1; i >= 0; i--) {
          response.data[i]
          var gifDiv = $('<div>')
          var p = $('<p>').text('Rating: '+ response.data[i].rating);

          // Creating and storing an image tag
          var gifImage = $('<img>');
          gifImage.attr('src', response.data[i].images.fixed_height_url)

          gifDiv.append(p);

          gifDiv.append(gifImage);

          // Prepending the gifImage to the images div
          $('#images').prepend(gifImage);

        }

        // Saving the image_original_url property
        var imageUrl = response.data.image_original_url;

        // Saving the image's rating property
        var imageRating = response.data.rating;

        // Setting the gifImage src attribute to imageUrl
        gifImage.attr("src", imageUrl);
        gifImage.attr("alt", "gif image");

        
      });
    });