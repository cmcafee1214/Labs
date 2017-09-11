var friends = ["John", "Adam", "Lucy", "Alan", "Lennie"];

function sing() {
    for (var i = 0; i < friends.length; i++) {
        var friend = friends[i];

        var div = document.createElement("div");
        div.className = "friend";

        var h3 = document.createElement("h3");
       
        var headingText = document.createTextNode(friends);
        h3.appendChild(headingText);
        div.appendChild(h3);

        for (var j = 99; j > 0; j--) {
        var para=document.createElement("p");
            if (j > 2) {
                para.innerText = j + " lines of code in the file " + j + " lines of code, " + friend + " strikes one out, clears it all out,"
                    + (j - 1) + " lines of code in the file.";
            } else if (j === 2) {
                para.innerText = j + " lines of code in the file " + j + " lines of code, "
                    + friend + " strikes one out, clears it all out," + (j - 1) + " lines of code in the file.";
                para.innerText = j + " lines of code in the file " + j + " lines of code, "
                    + friend + " strikes one out, clears it all out," + (j - 1) + " lines of code in the file.";
            } else {
                para.innerText = j + " line of code in the file " + j + " line of code" + friend + " strikes one out, clears it all out, no more lines of code in the file.";
            }
            div.appendChild(para);
        }
        document.body.appendChild(div);
    }
}
document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('sing-button');
    btn.addEventListener('click', sing);
});

    