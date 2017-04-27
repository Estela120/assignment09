$(document).ready(function(){	
	
	//// MAIN MENU //////
	
	$(".hide-option").tooltip({
      hide: {
      effect: "explode",
      delay: 250
      }
    });
	
//////HOME PAGE - Our SOLUTIONS /////
 $("#tabs").tabs();	
	
 $("#tabs img").css({
//	display: "block",
	float: "left",
	width: "15%",
	height:"auto"
  });
	
 $("#tabs p").css({
	width: "auto",
	height:"auto"
  });
////////HOME PAGE - Testimonials/////
  $("#accordion").accordion({
      collapsible: true
    });
	
	//// ABOUT PAGE //////	
$("#tabs").tabs().addClass("ui-tabs-vertical ui-helper-clearfix");
$("#tabs li").removeClass("ui-corner-top").addClass("ui-corner-left");
	
//$('.mySlideshows').cycle();	
$('.mySlideshows img').css({
	margin: "8px"
});

//// SOLUTIONS PAGE STICKY NAVEGATION //////	

 $("#sticker").sticky({ topSpacing: 0 });
 
// BackToTop - button cutomization //

//dyscrollup.init();

dyscrollup.init({
  // show after 300px
  showafter : '300',
  // scrolling animation speed
  scrolldelay : '500',
  // where to place the button
  position : 'right',
  // scroll to top image
  image : 'image/36.png',
  // circle or square
  shape : 'circle',
  // width / height
  width : "auto",
  height : "auto"
});
	
// accordion//	
	
$( function() {
    var icons = {
      header: "ui-icon-circle-arrow-e",
      activeHeader: "ui-icon-circle-arrow-s"
    };
    $( "#accordion" ).accordion({
      icons: icons
    });
    $( "#toggle" ).button().on( "click", function() {
      if ( $( "#accordion" ).accordion( "option", "icons" ) ) {
        $( "#accordion" ).accordion( "option", "icons", null );
      } else {
        $( "#accordion" ).accordion( "option", "icons", icons );
      }
    });
  });	
	
	//// CONTACT PAGE CHECK BOX and RADIO BUTTONS //////	
	
	$( function() {
    $( "input" ).checkboxradio();
    $( "fieldset" ).controlgroup();
  	});
	
//// CONTACT PAGE SELECT MENU //////
$( function() {
  $("#employeesNumber").selectmenu().selectmenu("menuWidget").addClass( "overflow");
  });

//// CONTACT PAGE SUBMIT BUTTON //////
//$( function() {
//    $( ".widget input[type=submit], .widget a, .widget button" ).button();
//    $( "button, input, a" ).click( function( event ) {
//      event.preventDefault();
//    } );
//	$("#submit").submit(function(){
//        alert("Thanks for your inquiry");
//    });

//// CONTACT PAGE DIALOG BOX //////
 
  $( function() {   
	$( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 });
	
// });
//	 });
 
    $( "#submit" ).on( "click", function() {
      $( "#dialog" ).dialog( "open" );
    });	

 });	
	


	
