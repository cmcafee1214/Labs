var p = first();

p.then(function (secret) {
    return second(secret);
}).then(function (success) {
    console.log("success")
});