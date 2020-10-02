  /*  var y = document.getElementsByClassName("text-2");
    var z = document.getElementsByClassName("text-3");
    var a = document.getElementsByClassName("text-4");
    y.style.display === "none"
    x.style.display === "none"
    z.style.display === "none"
    a.style.display === "none"*/
    function myFunction1() {
        var x = document.getElementsByClassName("text-1");
            if (x.style.display === "none") {
              x.style.display = "block";
            } else {
              x.style.display = "none";
            }
          }