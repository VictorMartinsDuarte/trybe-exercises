let percent = 82;

if (percent < 0 || percent > 100) {
    console.log("Error"); 
} else if (percent >= 90) {
    console.log("A");
} else if (percent >= 80) {
    console.log("B");
} else if (percent >= 70) {
    console.log("C");
} else if (percent >= 60) {
    console.log("D");
} else if (percent >= 50) {
    console.log("E");
} else if (percent < 50) {
    console.log("F");
} else {
    console.log("Error"); 
}