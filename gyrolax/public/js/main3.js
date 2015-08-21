
var ready = false;
var imgm = new ImageManager();
imgm.load({
  "bg": "img/dm_0006_7_test.jpg",
  "grid": "img/dm_0005_6.png"
}, function() {
  renderImage();
});

function renderImage() {
    var canvas = document.getElementById("c");
    ctx = canvas.getContext("2d");
    //enhanceContext(canvas, ctx);
    //ctx.scale(0.5, 1);

    var im = imgm.get("bg");
    ctx.drawImage(im, 0, 0, 3178, 2048);  
}

function enhanceContext(canvas, context) {
    var ratio = window.devicePixelRatio || 1,
        width = canvas.width,
        height = canvas.height;

    if (ratio > 1) {
        canvas.width = width * ratio;
        canvas.height = height * ratio;
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";
        context.scale(ratio/2, ratio);
    }
}