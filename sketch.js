// variables : F
// constants : + − [ ]
// start  : F
// rules  : (F → FF+[+F-F-F]-[-F+F+F])
// angle  : 25°

let angle;
let axiom = "F";
let sentence = axiom;
let len = 50;
let rules = [{
    if: "F",
    then: "FF+[+F-F-F]-[-F+F+F]"
  }];

function setup() {
  angle = radians(25);
  createCanvas(600, 400);
  background(215);
  generateTree();
}

function mouseClicked() {
  generateTree();
}

function generateTree() {
  nextSentence = "";
  for (let c of sentence) {
    var found = false;
    for (let rule of rules) {
      if (rule.if === c) {
        found = true;
        nextSentence += rule.then;
      }
    }
    if(!found){
      nextSentence += c;
    }
  }
  sentence = nextSentence;
  drawTree();
  createP(sentence);
}

function drawTree() {
  resetMatrix();
  translate(width / 2, height)
  var r = random(50);
  stroke(r * 5);;
  for (c of sentence) {
    if (c === "F") {
      line(0, 0, 0, -len);
      translate(0, -len)
    }else if (c === "+") {
      rotate(angle)
    }else if (c === "-") {
      rotate(-angle)
    }else if (c === "[") {
      push();
    }else if (c === "]") {
      pop();
    }
  }
	len *= 0.5;
}
