document.addEventListener("DOMContentLoaded", function () {
    const popupButton = document.getElementById("popupButton");

    popupButton.addEventListener("click", function () {
        // ポップアップウィンドウを開く
        window.open("popup.html", "Popup Window", "width=400,height=400");
    });
});