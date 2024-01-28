document.addEventListener("DOMContentLoaded", function() {
  let fullName = prompt("مرحبًا! الرجاء إدخال اسمك الرباعي:");

  if (fullName) {
    console.log("مرحبًا، " + fullName + "!");
    document.getElementById("welcomeMessage").innerText = "مرحبًا، " + fullName + "!";
  } else {
    console.log("لم يتم إدخال اسم.");
    document.getElementById("welcomeMessage").innerText = "لم يتم إدخال اسم.";
  }
});
