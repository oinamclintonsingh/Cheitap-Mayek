var numberOfButton = document.querySelectorAll(".khonjel").length;
for(var i = 0; i<numberOfButton; i++) {

    document.querySelectorAll(".khonjel")[i].addEventListener("click", function() {
        
        var buttonInnerHTML = this.innerHTML
        makeSound(buttonInnerHTML);
        
    });
}

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
});

function makeSound(key) {
    switch (key) {
        case "k":
            var kok = new Audio("sounds/01Kok1.mp3");
            kok.play();
            break;

        case "a":
            var aatap = new Audio("sounds/Cheitap-Mayek-for-Men/01Atap1.mp3");
            aatap.play();
            break;
            
        case "ka":
            var ka = new Audio("sounds/Tapnaba/012Ka.mp3");
            ka.play();
            break;

        case "k":
            var kok = new Audio("sounds/01Kok1.mp3");
            kok.play();
            break;

        case "i":
            var eenap = new Audio("sounds/Cheitap-Mayek-for-Men/02Eenap1.mp3");
            eenap.play();
            break;

        case "ki":
            var ki = new Audio("sounds/Tapnaba/023Ki.mp3");
            ki.play();
            break;

        case "k":
            var kok = new Audio("sounds/01Kok1.mp3");
            kok.play();
            break;

        case "u":
            var unap = new Audio("sounds/Cheitap-Mayek-for-Men/03Unap1.mp3");
            unap.play();
            break;

        case "ku":
            var ku = new Audio("sounds/Tapnaba/033Ku.mp3");
            ku.play();
            break;
        
        case "k":
            var kok = new Audio("sounds/01Kok1.mp3");
            kok.play();
            break;

        case "e":
            var yetnap = new Audio("sounds/Cheitap-Mayek-for-Men/04Yetnap1.mp3");
            yetnap.play();
            break;

        case "ke":
            var ke = new Audio("sounds/Tapnaba/043Ke.mp3");
            ke.play();
            break;

        case "k":
            var kok = new Audio("sounds/01Kok1.mp3");
            kok.play();
            break;
            
        case "ei":
            var cheinap = new Audio("sounds/Cheitap-Mayek-for-Men/05Cheinap1.mp3");
            cheinap.play();
            break;

        case "kei":
            var kei = new Audio("sounds/Tapnaba/053Kei.mp3");
            kei.play();
            break;

        case "k":
            var kok = new Audio("sounds/01Kok1.mp3");
            kok.play();
            break;

        case "o":
            var otnap = new Audio("sounds/Cheitap-Mayek-for-Men/06Otnap1.mp3");
            otnap.play();
            break;

        case "ko":
            var ko = new Audio("sounds/Tapnaba/063Ko.mp3");
            ko.play();
            break;

        case "k":
            var kok = new Audio("sounds/01Kok1.mp3");
            kok.play();
            break;

        case "ou":
            var sounap = new Audio("sounds/Cheitap-Mayek-for-Men/07Sounap1.mp3");
            sounap.play();
            break;

        case "kou":
            var kou = new Audio("sounds/Tapnaba/073Kou.mp3");
            kou.play();
            break;

        case "k":
            var kok = new Audio("sounds/01Kok1.mp3");
            kok.play();
            break;

        case "ng":
            var nung = new Audio("sounds/Cheitap-Mayek-for-Men/08Nung1.mp3");
            nung.play();
            break;

        case "kang":
            var kang = new Audio("sounds/Tapnaba/083Kng.mp3");
            kang.play();
            break;
            
        default: console.log(buttonInnerHTML);
            break;
    }
}



