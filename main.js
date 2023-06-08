 function preload(){
    classifier = ml5.imageClassifier('DoodleNet');
 }
 function setup(){
    canvas = createCanvas (400, 300);
    canvas.position(480, 250);
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
 }
 function clearCanvas(){
    background('white');
 }
 function draw(){
   strokeWeight(5);
   stroke('black');
   if(mouseIsPressed){
      line(pmouseX, pmouseY, mouseX, mouseY);
   }
 }
 function classifyCanvas(){
   classifier.classify(canvas, gotResult)
 }
 function gotResult(error, results){
   if(error){
      console.error(error)
   }
   console.log(results);
   var result = results[0].label;
   document.getElementById('label').innerHTML = "Nome: " + result.replace("_", " ");
   document.getElementById('confidence').innerHTML = 'Precisão: ' + Math.round(result.confidence * 100) + '%';
 
   var utterThis = new SpeechSynthesisUtterance(result.replace("_", + " "));
   synth.speak(utterThis);
}



