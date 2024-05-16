// console.log($("h1").css("color"));
// //selecting the h1 element and changing its css properties mainly color to red.
// //Note: add the jQuery cdn before the js script otherwise it will not work. 
// $(document).ready(function(){
//     $("h1").css("color","red");
// });
// $("h1").text("Bye");
// // it changes the text of the element h1 also suppose if there are many h1's then it will change their text too not just one h1 but the entire h1 element present.

// $("button").html("<em>Hey</em>");
//so this .html is the shortform of innerHTML and throught we can change the html as well as we have done earlier
$("h1").addClass("big-title");
$("h1").attr("class");
//it will show all the class with which h1 is associated

// to change the color from yellow to purple using pure js

for(var i = 0 ; i <  5 ; i++ )
    {
        document.querySelectorAll("button")[i].addEventListener("click",function()
    {
        document.querySelector("h1").style.color = "purple";
    });
    }
    // so in js we have to write this bunch of code first we have to run the for loop to iterate through all the button and add the function to it that when we click the button it should change the color of the h1 element from yellow to purple

// now trying to implement this idea using jQuery
$("button").click(function()
{
    $("h1").css("color","purple");
});    

// $(document).keydown(function(event)
// {
//     console.log(event.key);
// });
// $(document).keydown(function(event) {
//     // Get the pressed key character
//     var pressedKey = event.key;
  
//     // Update the h1 content with the pressed key
//     $("h1").text(pressedKey);// or we can simply write $("h1").text(event.key);
//   });
$("h1").on("mouseover",function()
{
    $("h1").css("color","purple");
});

$("h1").before("<button>New</button>");
// it adds the button before h1 tag
$("h1").after("<button>New</button>");
// it adds the button after h1 tag
$("h1").prepend("<button>New</button>");
// it adds the button before the Content of the h1 tag and at the starting of the h1 tag i.e. <h1> <button>New</button>
$("h1").append("<button>New</button>");
// it adds the button after the Content of the h1 tag and before the closing tag of h1 i.e. <h1> <button>New</button>

// $("button").remove();
// // it will remove all the buttons from the webpage
 
$("button").on("click",function(){
    $("h1").hide();
});
// this will hide the content of the h1 and will remove it too from our webPage