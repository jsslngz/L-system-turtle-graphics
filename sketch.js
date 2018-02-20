// variables : X F
// constants : + − [ ]
// start  : X
// rules  : (X → F[−X][X]F[−X]+FX), (F → FF)
// angle  : 25°
let axiom = "X";
let sentence = axiom;
let len = 40;
let rules = [{
    if: "X",
    then: "F[−X][X]F[−X]+FX"
  },
  {
    if: "F",
    then: "FF"
  }
];

function setup() {
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
    for (let rule of rules) {
      if (rule.if === c) {
        nextSentence += rule.then;
      }
    }
  }
  sentence = nextSentence;
  drawTree();
  createP(sentence);
}

function drawTree() {
  translate(width / 2, height)
  stroke(256);
  for (c of sentence) {
    if (c === "F") {
      line(0, 0, 0, -len);
      translate(0, -len)
    }
  }
	len *= 0.5;
}
