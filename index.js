  //preloading images.
  
  var zack = "https://i.imgur.com/KwyK6gx.jpg";
  var kelly = "https://i.imgur.com/KePHrDk.jpg";
  var slater = "https://i.imgur.com/hqlgZVX.jpg";
  var belding = "https://i.imgur.com/FVNweXP.jpg";
  var jessie = "https://i.imgur.com/FFs7pQc.jpg";
  var lisa = "https://i.imgur.com/Gsrk18T.jpg";
  var screech = "https://i.imgur.com/N4iBm41.jpg";
  
  var images = new Array()
		function preload() {
	    for (i = 0; i < preload.arguments.length; i++) {
			  images[i] = new Image();
				images[i].src = preload.arguments[i];
			}
		};
	
  preload(
	  zack, kelly, slater, belding, jessie, lisa, screech
	);




$(document).ready(function () {
  // Randomizer needs to be INSIDE button click function - runs ONLY when clicked and will replace previous value.
  

  
  
  //--------------- OBJECT OF QUOTES/AUTHORS------------------
  
  var quoteObj = [
    {"quoteAuthor" : "Jessie", "quoteText" : "Your understanding of politics is limited to who won the election on Sesame Street."},
    {"quoteAuthor" : "Mr. Belding", "quoteText" : "Zack, I am not a matador so take the bull outside."},
    {"quoteAuthor" : "Slater", "quoteText" : "I'm dead. Jessie's gonna rip my eyes out, punch my face in and then break up with me. It's her usual pattern."},
    {"quoteAuthor" : "Zack", "quoteText" : "We're the perfect team - she works hard, I hardly work!"},
    {"quoteAuthor" : "Kelly", "quoteText" : "Guys, this is hard. It's like choosing between two great pieces of chocolate."},
    {"quoteAuthor" : "Lisa", "quoteText" : "Here's something I learned in French class - Au revoir, creep!"},
    {"quoteAuthor" : "Screech", "quoteText" : "A building with two Beldings and one of whom is balding."},
    {"quoteAuthor" : "Lisa", "quoteText" : "I can't stand by that backdrop. It clashes with my outfit!"},
    {"quoteAuthor" : "Jessie", "quoteText" : "There's no Time! There's never any time! There's no time to study..."},
    {"quoteAuthor" : "Zack", "quoteText" : "The three worst things that can happen to a kid are measles, mumps, and midterms."},
    {"quoteAuthor" : "Slater", "quoteText" : "Preppy, is that you? NICE legs."},
    {"quoteAuthor" : "Screech", "quoteText" : "Wow, my first Hollywood party. I wonder if the Simpsons are gonna be there."}
  ];
  

  
  
  
  //---------- BUTTON LOGIC -----------------
  
  /* Button Functionality. EXAMPLE.
  $("#getQuote").on("click", function() {
    var randomizer = Math.floor(Math.random() * quotes.length);
    $(".quote").html(quotes[randomizer]);
  });
  */
  
// Needed all logic in the new quote button. It generates the twitter href as well as randomizing the quote text. Default twitter button function defined below if user clicks twitter before new quote.

      var oldQuoteAuthor = null;
  
      var twitterURL = "https://twitter.com/intent/tweet?hashtags=quotes,savedbythebell&related=freecodecamp&text="; 

        $("#getQuote").on("click", function(){
        //randomize quote.
        var randomizer = null;
        var quoteText = null;
        var quoteAuthor = null;
        
         
        function quoteRandomizerFunction(){
          randomizer = Math.floor(Math.random() * quoteObj.length);
          quoteText = quoteObj[randomizer].quoteText;
          quoteAuthor = quoteObj[randomizer].quoteAuthor;
        }
        quoteRandomizerFunction();
        
        // Recursion. if same author - run quoteRandomizerFunction again.
        (function(){
          if(oldQuoteAuthor === quoteAuthor){
             console.log('same author!');
             quoteRandomizerFunction();
          }
          else {
            oldQuoteAuthor = quoteAuthor;
            console.log('different authors!!');
          }
        }());
        
          
        
        //img switch
        switch(quoteAuthor) {
          case "Slater":
            $(".imgDiv img").attr("src", slater);
            break;
          case "Zack":
            $(".imgDiv img").attr("src", zack);
            break;
          case "Kelly":
            $(".imgDiv img").attr("src", kelly);
            break;
          case "Mr. Belding":
            $(".imgDiv img").attr("src", belding);
            break;
          case "Jessie":
            $(".imgDiv img").attr("src", jessie);
            break; 
          case "Lisa":
            $(".imgDiv img").attr("src", lisa);
            break;  
          case "Screech":
            $(".imgDiv img").attr("src", screech);
            break;  
        }
        
        
        //quote text
        $(".quoteT").html('"' + quoteText + '"');
        $(".quoteA").html("- " + quoteAuthor);
        
        //generate twitter href.
        var encodedURL = encodeURI(quoteText + '" -' + quoteAuthor + " #quote");
        var newTwitterURL = twitterURL + '"' + encodedURL + '"';
        
        $(".twitter-share-button").attr("href", newTwitterURL);
        
        
      });
      
      
        
  // default function of twitter button clicked before new quote button.
  $("#tweetThis").on("click", function() {
    if ($(".twitter-share-button").attr("href") === "") {
      var defaultTwitter = twitterURL + encodeURI("\"We're the perfect team - she works hard, I hardly work!\" -Zack");
      $(".twitter-share-button").attr("href", defaultTwitter);
    }
  });
      
      
    $("#getQuote, .fa-twitter").hover(function() {
    $(this).stop().animate({ 
      color: "black"
    }, 20);
  },
  function() {
    $(this).stop().animate({ 
      color: "#3d3d3d"
    }, 20);
  });
  

});