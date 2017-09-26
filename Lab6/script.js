var friends = ["Jimmy", "Hank", "My dog, Jepedo,", "Mad Max", " Charlie"];
var weapons = ["knife", "sharpie", "pen", "gun", "asparagus", "Altoids",
    "saw", "blade", "sword", "Persian rug", "Xbox", "claw",
    "fancy butter knife", "cookie sheet", "bat", "chomp chomp",
    "salmon filet", "shotgun", "deer antler", "jaws of life"];
var locations = ["Wal-mart parking lot", "alley", "garage", "Oval Office",
    "sunroom at night", "kitchen", "bonus room", "hot tub",
    "weight room", "basement"];

/*var statement = [" I accuse" + (friend(i)) + " , with the" +
    (weapon(j)), " in the" + (location(k)) + "!"]; */

for (var i = 0; i < 100; i++) {
    var h3 = document.createElement("h3");
    h3.innerText = "Accusation" + (i + 1);
    h3.addEventListener("click", function(){
        var friends = friend [this % friends.length];
        var locations = location [this % locations.length];
        var weapons = weapon [this % weapons.length];
        alert ("Accusation" + (this + 1) + ": I accuse" + friend + ", with the " + weapon + "in" + locations);
    }
        document.appendChild(h3)
    })  
                                             //<-------EXAMPLE FOR LOOP

/* $(document).ready(function () {
    $(h3).//NEED FUNCTION TO INSERT 100 H3 ELEMENTS ONTO THE PAGE UPON LOADING
        $(h3).innerText("Accusation 1") //EACH H3 1-100 SAYS "Accusation 1" - "Accusation 100"        
});

$(h3).click(function () {
    alert(statement);
}) */

/* -clicking any h3 should display alert that says (let alert=) above with executed function
        -Knowledge of closure or bind and the modulus operator will be useful in this lab
                -You will use the value of i in the loop to determine which of the above array items to use
     
    -Make sure you only select valid array indexes
    -Modulus is your friend
    -ex: 10 mod 10 is 0, 11 mod 10 is 1, 12 mod 10 is 2, ...
    -You only need to use one loop */