function Worker(name, job, worktime) {
  this.name = name;
  this.job = job;
  this.worktime = worktime;
  this.time = function(delayCaused) {
      var newTime = this.worktime - delayCaused;
        if(newTime > 0){
          this.worktime = newTime;
    }
  };
}

function Clothes(outfit, shoes, delay) {
  this.outfit = outfit;
  this.shoes = shoes;
  this.delay = delay;
  this.Clothes = function(worker) {
    console.log("You're dressed!")
    worker.time(this.delay);
  };

}

function Transport(type, trav_time) {
  this.type = type;
  this.trav_time = trav_time;
  this.Transport = function(worker) {
    var arrival = worker.worktime - this.trav_time;
    if(arrival > 0){
      alert("You're early! Here's zero dollars")
    } else {
      alert("You're late, and probably fired!");
    }
  }

};


var car = new Transport('car', 30);
var plane = new Transport('plane', 10);
var swim = new Transport('swim', 120);
var bike = new Transport('bike', 50);
var run = new Transport('run', 60);
var Transports = ["car", "plane", "swim", "bike", "run"]

var formal = new Clothes ("nav_suit", "loafers", 30);
var active = new Clothes ("shirt_shorts", "sneakers", 10);
var casual = new Clothes ("polo_kahkis", "sandals", 15);
var swimming = new Clothes ("bathing_suit", "bare_feet", 5);
var Clothing = ["formal", "active", "casual", "swimming"];

var Bob = new Worker ("Bob", "Builder", 60);
var Anthony = new Worker ("Anthony", "Chef", 30);
var Victoria = new Worker ("Victoria", "Model", 120);
var Workers = ["Bob", "Anthony", "Victoria"];
