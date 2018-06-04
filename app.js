var firstInterval;
var secondInterval;
document.getElementById("forward").addEventListener('click', function () {
    clearInterval(secondInterval);
    firstInterval = setInterval(function () {
      document.getElementById("output").value += document.getElementById("myInput").value.charAt(0);
        document.getElementById("myInput").value = document.getElementById("myInput").value.substr(1);
      if(document.getElementById("myInput").value.length == 0){
                      clearInterval(secondInterval);
        }

    }, 1000)
});

document.getElementById("backward").addEventListener('click', function () {
    clearInterval(firstInterval);
    secondInterval = setInterval(function () {
        document.getElementById("myInput").value = document.getElementById("output").value.charAt(document.getElementById("output").value.length-1) + document.getElementById("myInput").value;
        document.getElementById("output").value = document.getElementById("output").value.substr(0,document.getElementById("output").value.length-1);
        if(document.getElementById("output").value.length == 0){
            clearInterval(firstInterval);
       }    }, 1000)
});

document.getElementById("pause").addEventListener('click', function () {
    clearInterval(firstInterval);
    clearInterval(secondInterval);
});