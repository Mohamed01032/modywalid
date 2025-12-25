let visits = localStorage.getItem("visits");

if (!visits) {
    visits = 1;
} else {
    visits = parseInt(visits) + 1;
}

localStorage.setItem("visits", visits);

console.log("Visits:", visits);
