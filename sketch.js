let servants = [{
  name :"Arjuna", 
  alignment : "lawful evil"
}, {
  name: "Karna",
  alignment: "lawful good"
} ,{
  name:"Kama", 
  alignment :"chaotic evil"
}, {
  name :"Oberon",
  alignment:"chaotic evil"
}];

let randomIndex;

function setup(){
createCanvas(600,600);
background(200);
}

function draw() {
  
}

function mousePressed(){
  if (servants[0]){
  background(random(200,255));
  randomIndex = int(random(servants.length));
  text(servants[randomIndex].name, 50, 50);
  servants.splice(randomIndex,1);
}
}