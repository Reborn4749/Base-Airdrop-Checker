const btn = document.getElementById("checkBtn");
const input = document.getElementById("walletInput");
const result = document.getElementById("resultText");
btn.addEventListener("click", function() {
    if (input.value === "") {
        result.textContent = "❌ กรุณากรอก Wallet Address ก่อนครับ!";
        result.style.color = "red";
    } else {
        result.textContent = "🎉 ยินดีด้วย! คุณได้รับสิทธิ์ 500 $BASE 🔵";
        result.style.color = "green";
    }
});
