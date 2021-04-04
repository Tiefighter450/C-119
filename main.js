function preload() {

}
function setup() {
    canvas = createCanvas(997, 698);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://storage.googleapis.com/tm-model/5ROmuq2Ou/model.json", modelLoaded);
}
function draw() {
    canvas.center();
    image(video, 324, 370, 347, 248);
    classifier.classify(video, gotResult);
}
function modelLoaded() {
    console.log("Model Loaded!");
}
function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("objectName").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}