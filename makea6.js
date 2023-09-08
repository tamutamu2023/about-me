document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    form.addEventListener("submit", function (event) {
        if (!validateForm()) {
            event.preventDefault(); 
        }
    });

    function validateForm() {
        let isValid = true;

        if (nameInput.value.trim() === "") {
            alert("名前を入力してください");
            isValid = false;
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(emailInput.value)) {
            alert("正しいEメールアドレスを入力してください");
            isValid = false;
        }

        
        if (messageInput.value.trim() === "") {
            alert("メッセージを入力してください");
            isValid = false;
        }

        return isValid;
    }
});