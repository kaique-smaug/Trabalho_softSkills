// Validando o buttonBack

let buttonBack = document.querySelector('#buttonBack');



function  backMain() {
    let buttonBack = document.querySelector('#buttonBack');
    if (buttonBack != true) {
        location.href = "index.html";
    }
};


buttonBack.addEventListener('click', () => {
    backMain();
})


//==========================================================================================================================================================================================================================================================
// recebendo as resposta e validando

// Range todos os sentimentos
let toReceiv1 = document.querySelector('#toReceiv1').value;
// Range nervoso
let toReceiv2 = document.querySelector('#toReceiv2').value;
// Range ansioso
let toReceiv3 = document.querySelector('#toReceiv3').value;
// Range Depressivo
let toReceiv4 = document.querySelector('#toReceiv4').value;
// Range de quanto tempo está se sentindo assim
let timeFeeling = document.querySelector('#TimeFeeling').value;

let optionSleep = document.querySelector('#optionSleep').value;


let optionToSpecifyH = document.querySelector('#optionToSpecifyH').value;

let optionMentalHealth = document.querySelector('#optionMentalHealth').value

let optionTime = document.querySelector('#optionTime').value;

let buttonToReceiveEmotional = document.querySelector('#buttonToReceiveEmotional');


function validateToReceive() {
    if (toReceiv1.onChange != 0 && toReceiv2.onChange != 0 && toReceiv3.onChange != 0 && toReceiv4.onChange != 0 && timeFeeling.onChange != 0) {
        location.href = "feedbackCompleto.html";
    }
}

buttonToReceiveEmotional.addEventListener('click', () => {
    validateToReceive()

})