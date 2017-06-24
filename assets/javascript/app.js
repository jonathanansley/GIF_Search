// This code will run as soon as the page loads
// window.onload = function() {
//   // alert('JavaScript file - window.onload');

//   };

// <button type="button" class="btn btn-success">answer 1</button>

// <button type="button" class="btn btn-primary" id = "done-button">Done</button>

$('#start-button').on('click', function() {
  console.log('You clicked #start-button');

  //after user clicks start button
  $('#start-button').remove();

  // Append each question to subwrapper.
  for (var i = questions.length - 1; i >= 0; i--) {
    $('#subwrapper').append('<h2>' + questions[i].question + '</h2>');

      // Storing values in with buttons
      for (var j = questions[i].answers.length - 1; i >= 0; i--) {
      
        $('#subwrapper').append("<input type = 'radio' name = 'question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])

      } // end of sub-for loop

  } // end of for loop

  }); // end of start button listener

$(document).on('click', '#end', function(){
  game.done();
 });

var questions = [
  {
  question: 'Who said, Of all the souls I have encountered in my travels, his was the most....human.',
  answers:[ 'Lt. Worf', 'Mr. Sulu', 'Mr. Spock' ],
  correctAnswer: 'James T. Kirk'
  },

  {
  question: 'Who said, \"We\'re not here to take over. We just want to sell you things.\"',
  answers:[ 'Lt. Worf', 'Mr. Sulu', 'Mr. Spock' ],
  correctAnswer: 'Quark the Ferengi'
  },

  {
  question: 'Having is not so pleasing a thing as wanting, it may not be logical but it is often true.',
  answers:[ 'Mr. Sulu', 'Lt. Uhura', 'Number One' ],
  correctAnswer: 'Mr. Spock'
  },

  {
  question: 'Jim (Captain Kirk), you don\’t go around asking the Almighty for his I.D.!',
  answers:[ 'Lt. Worf', 'Mr. Sulu', 'Mr. Spock' ],
  correctAnswer: 'Dr ‘Bones’ McCoy'
  },

  {
  question: 'I\'m a doctor, not a bricklayer',
  answers:[ 'Lt. Worf', 'Mr. Sulu', 'Mr. Spock' ],
  correctAnswer: 'Dr ‘Bones’ McCoy'
  },

  {
  question: 'Which series has vocal music with the opening theme?',
  answers:[ 'Voyager', 'Deep Space Nine', 'Next Generation' ],
  correctAnswer: 'Enterprise'
  },

  {
  question: 'EMH is another word for which character in Voyager?',
  answers:[ 'Lt. Worf', 'Mr. Sulu', 'Mr. Spock' ],
  correctAnswer: 'The Doctor'
  },

  {
  question: 'Which quadrant is Voyager trying to leave?',
  answers:[ 'Alpha', 'Beta', 'Borg' ],
  correctAnswer: 'Delta'
  }

  ];


var game = {
  correctAnswerCount: 0,
  incorrectAnswerCount: 0,

  timeCounter: 20,
  // timeCounter: 120;

  countDown: function(){
    game.timeCounter--;
    $('#counter').html(game.timeCounter);
    if (game.timeCounter <= 0)
    {
      console.log('out of time');
      game.done();
    }
  }, //end of countDown function

  start: function() {
    console.log('start function');
  },

  // Determine if input type is checked.
  done: function(){

    $.each($('input[name="question-0]":checked'), function(){
      if($(this).val()===questions[0].correctAnswer){
        game.correctAnswerCount++;
      } else {
        game.incorrectAnswerCount++;
      }
    })

    $.each($('input[name="question-1]":checked'), function(){
      if($(this).val()===questions[1].correctAnswer){
        game.correctAnswerCount++;
      } else {
        game.incorrectAnswerCount++;
      }
    })

    $.each($('input[name="question-2]":checked'), function(){
      if($(this).val()===questions[2].correctAnswer){
        game.correctAnswerCount++;
      } else {
        game.incorrectAnswerCount++;
      }
    })

    $.each($('input[name="question-3]":checked'), function(){
      if($(this).val()===questions[3].correctAnswer){
        game.correctAnswerCount++;
      } else {
        game.incorrectAnswerCount++;
      }
    })

    $.each($('input[name="question-4]":checked'), function(){
      if($(this).val()===questions[4].correctAnswer){
        game.correctAnswerCount++;
      } else {
        game.incorrectAnswerCount++;
      }
    })

    $.each($('input[name="question-5]":checked'), function(){
      if($(this).val()===questions[5].correctAnswer){
        game.correctAnswerCount++;
      } else {
        game.incorrectAnswerCount++;
      }
    })

   $.each($('input[name="question-6]":checked'), function(){
      if($(this).val()===questions[6].correctAnswer){
        game.correctAnswerCount++;
      } else {
        game.incorrectAnswerCount++;
      }
    })

  $.each($('input[name="question-7]":checked'), function(){
      if($(this).val()===questions[7].correctAnswer){
        game.correctAnswerCount++;
      } else {
        game.incorrectAnswerCount++;
      }
    })

}, // end of done function

// Show results of game.
result: function(){
  clearInterval(timer);

  // Remove timer.
  $('#subwrapper h2').remove();

  // 
  $('#subwrapper').html("<h2>all done</h2>")

  $('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
  $('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");

  // Calculate and show unanswered
  $('#subwrapper').append("<h3>Unanswered: "+(questions.length - (this.incorrectAnswerCount + this.correctAnswerCount))+"</h3>");
} // end of result function

}

game.result();