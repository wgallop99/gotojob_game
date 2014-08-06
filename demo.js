
$(document).ready(function(){
  page.init();
});

var page = {

init: function() {
  this.initStyling();
  this.initEvents();
},

initStyling: function() {



},

initEvents: function() {
  $('.clothes_container').on("submit", "#formal", function() {
    formal.Clothing(Bob);
    console.log("you're dressed!");
  });


}

};
