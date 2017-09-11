var name = "Connor";
console.log ("Name: " + name.toUpperCase());
console.log ("Sales and Customer Service");
console.log ("Description: I enjoy spending time with my family");

console.log ("INTERESTS")
console.log ("Hanging out with family and friends")
console.log ("Playing with my kids")
console.log ("Going to the movies")
console.log ("Watching political shows")

console.log ("My Previous Experience");
function displayPosition(jobTitle, companyName, description) {
    console.log("* "+ jobTitle + " at "+ companyName +"- "+ description);
}
displayPosition ("Agent", "Shelter Insurance", "Selling and Servicing Insurance Policies");
displayPosition ("Financial Representative", "Modern Woodmen", "Sales and Service")

console.log("SKILLS:");

function displaySkill(skillName, isCool) {
    if (isCool === true) {
        console.log("* BAM: " + skillName);
    } else {
        console.log("* " + skillName);
    }
}
displaySkill("Tennis", true);
displaySkill("Guitar", true);
displaySkill("Softball", false);
displaySkill("Banjo", false)







