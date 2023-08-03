document.addEventListener("DOMContentLoaded", function () {
    const voirPlusBtn = document.getElementById("voir-plus-btn");
    const newsList = document.getElementById("news-list");

    const nouvellesLiens = `
        <li><a href="#">Le café idéal : Sucré ou non ?</a></li>
        <li><a href="#">Rencontrez nos baristas : Posez vos questions !</a></li>
        <li><a href="#">Le coin des recommandations : Cherchez et proposez des livres</a></li>
    `;

    voirPlusBtn.addEventListener("click", function (event) {
        event.preventDefault();

        newsList.insertAdjacentHTML('beforeend', nouvellesLiens);

        voirPlusBtn.style.display = "none";
    });


});