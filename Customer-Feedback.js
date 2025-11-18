let feedback = "Great product! Fast delivery and amazing sound quality!";
let words = feedback.split(" ").length;
let checkBad = feedback.toLowerCase().includes("bad") || feedback.toLowerCase().includes("poor");

if (!checkBad) {
    console.log("Positive Feedback");
} else {
    console.log("Needs Improvement");
}

console.log("Word Count:", words);
