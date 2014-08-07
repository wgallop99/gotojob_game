var car = new Transport('car', 30);
var plane = new Transport('plane', 10);
var swim = new Transport('swim', 120);
var bike = new Transport('bike', 50);
var run = new Transport('run', 60);
var Transports = ["car", "plane", "swim", "bike", "run"];

var formal = new Clothes ("nav_suit", "loafers", 30);
var active = new Clothes ("shirt_shorts", "sneakers", 10);
var casual = new Clothes ("polo_kahkis", "sandals", 15);
var swimming = new Clothes ("bathing_suit", "bare_feet", 5);
var Clothing = ["formal", "active", "casual", "swimming"];

var Bob = new Worker ("Bob", "Builder", 60);
var Anthony = new Worker ("Anthony", "Chef", 90);
var Victoria = new Worker ("Victoria", "Model", 130);
var Workers = [Bob, Anthony, Victoria];


function Worker(name, job, worktime) {
  this.name = name;
  this.job = job;
  this.worktime = worktime;
}

Worker.prototype.time = function(delayCaused){
  var newTime = this.worktime - delayCaused;
    if(newTime > 0){
      this.worktime = newTime;
}
}

function Clothes(outfit, shoes, delay) {
  this.outfit = outfit;
  this.shoes = shoes;
  this.delay = delay;
}

Clothes.prototype.Clothing = function(worker) {
  console.log("You're dressed!");
  worker.time(this.delay);
};


function Transport(type, trav_time) {
  this.type = type;
  this.trav_time = trav_time;
}


Transport.prototype.Transportation = function(worker) {
  var arrival = worker.worktime - this.trav_time;
  worker.worktime = arrival;

};


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
var randWorker;

  $('form').on("submit", function(){
    event.preventDefault();

    var ranNum = Math.floor(Math.random() * Workers.length);
    randWorker = Workers[ranNum];
    randWorker === Worker;
    console.log(randWorker);

    $('#pick').text("You got " + randWorker.name);
  });

  $('.clothes_container').on("click", "#formal", function() {

    formal.Clothing(randWorker);

    $("#pick1").text("You chose a Suit!");

  });

  $('.clothes_container').on("click", "#casual", function() {
    casual.Clothing(randWorker);

    $("#pick1").text("You chose a Polo and some Khakis!");

  });

  $('.clothes_container').on("click", "#swim", function() {
    swimming.Clothing(randWorker);

    $("#pick1").text("You chose a Bathing Suit!");

  });

  $('.clothes_container').on("click", "#active", function() {
    active.Clothing(randWorker);

    $("#pick1").text("You chose a T-shirt and Shorts!");
  });

  $('.transport_container').on('click', "#car", function(){
    car.Transportation(randWorker);

    $("#pick2").text("Drive, Slow Homie");

    if(randWorker.worktime >= 0){
      $('#answer').text(randWorker.name + " is early! Have a Cookie!");
    } else {
      $('#answer').text(randWorker.name + " is late, and probably fired!");
    }
  });

  $('.transport_container').on('click','#plane', function(){
    plane.Transportation(randWorker);

   $('#pick2').text("Fly, like a G6!");
   if(randWorker.worktime >= 0){
     $('#answer').text(randWorker.name + " is early! Have a Cookie!");
   } else {
     $('#answer').text(randWorker.name + " is late, and probably fired!");
   }
  });

  $('.transport_container').on('click','#run', function(){
    run.Transportation(randWorker);

  $('#pick2').text("Runnnnnn Forrresst, Runnnn!");
  if(randWorker.worktime >= 0){
    $('#answer').text(randWorker.name + " is early! Have a Cookie!");
  } else {
    $('#answer').text(randWorker.name + " is late, and probably fired!");
  }
  });

  $('.transport_container').on('click', '#bike', function(){
    bike.Transportation(randWorker);

    $('#pick2').text("Don't forget your helmet!");

    if(randWorker.worktime >= 0){
      $('#answer').text(randWorker.name + " is early! Have a Cookie!");
    } else {
      $('#answer').text(randWorker.name + " is late, and probably fired!");
    }

  });

  $('.transport_container').on('click', '#swim', function(){
    swim.Transportation(randWorker);

  $('#pick2').text('Duhna.....Duhna...DuhnaDuhnaDuhna');

  if(randWorker.worktime >= 0){
    $('#answer').text(randWorker.name + " is early! Have a Cookie!").css("transition", "all 1s ease");
    } else {
    $('#answer').text(randWorker.name + " is late, and probably fired!");
  }

});

}
};
