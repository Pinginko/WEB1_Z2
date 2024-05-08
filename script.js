console.log("loaded");
let age = document.getElementById("age");
age.setAttribute('disabled', 'true');


function displayError(inputFieldID, errfieldID) {
    let inputfield = document.getElementById(inputFieldID);
    let err = document.getElementById(errfieldID);
    inputfield.style.border = '3px solid  #6b00b3';
    err.style.display = 'block';
}

function hideError(inputFieldID, errfieldID) {
    let inputfield = document.getElementById(inputFieldID);
    let err = document.getElementById(errfieldID);
    inputfield.style.border = '3px solid rgba(255, 255, 255, .9)';
    err.style.display = 'none';
}

function validateIsEmpty(inputFieldID, errfieldID) {
    let inputfield = document.getElementById(inputFieldID);
    if (!inputfield.value) {
        displayError(inputFieldID, errfieldID);
    } else {
        hideError(inputFieldID, errfieldID);
    }
}

function validateInputs(inputFieldID, errfieldID, errfieldID2) {
    var pattern = /^[a-zA-ZáäčďéíĺľňóôŕšťúýžÁÄČĎÉÍĹĽŇÓÔŔŠŤÚÝŽ]+$/;
    let input = document.getElementById(inputFieldID);
    if (input.value === "") {
        displayError(inputFieldID, errfieldID);
    }
    else if (!pattern.test(input.value) && input.value != "") {
        displayError(inputFieldID, errfieldID2);

    } else {
        hideError(inputFieldID, errfieldID);
        hideError(inputFieldID, errfieldID2);
    }
}

function validateNumbers(inputFieldID, errfieldID, errfieldID2) {
    let input = document.getElementById(inputFieldID);

    if (input.value > 8) {
        displayError(inputFieldID, errfieldID2);
    } else if (input.value === "") {
        displayError(inputFieldID, errfieldID);
    } else {
        hideError(inputFieldID, errfieldID);
        hideError(inputFieldID, errfieldID2);
    }
}

/* function selectEquipment() {
    var venue = document.getElementById("sport-venue");
    var equipment = document.getElementById("equipment");

    if (venue.value === "ice-rink") {
        equipment.innerHTML = "<label class='checkbox-label' for='skates'><input type = 'checkbox' name = 'equipment' value = 'skates' class='checkbox'>Korčule</label><label class='checkbox-label' for='stick'><input type='checkbox' name='equipment' value='stick' class='checkbox'>Hokejka</label><label class='checkbox-label' for='puck'><input type='checkbox' name='equipment' value='puck' class='checkbox'>Puk</label>";
    } else if (venue.value === "court") {
        equipment.innerHTML = "<label class='checkbox-label' for='net'><input type = 'checkbox' name = 'equipment' value = 'net' class='checkbox'>Sieť</label><label class='checkbox-label' for='racket'><input type='checkbox' name='equipment' value='racket' class='checkbox'>Raketka</label><label class='checkbox-label' for='balls'><input type='checkbox' name='equipment' value='balls' class='checkbox'>Loptičky</label>";
    } else if (venue.value === "gym") {
        equipment.innerHTML = "<label class='checkbox-label' for='gloves'><input type = 'checkbox' name = 'equipment' value = 'gloves' class='checkbox'>Rukavice</label><label class='checkbox-label' for='protein-shake'><input type='checkbox' name='equipment' value='protein-shake' class='checkbox'>Proteinový nápoj</label><label class='checkbox-label' for='rug'><input type='checkbox' name='equipment' value='rug' class='checkbox'>Uterák</label>";
    }
    else {
        equipment.innerHTML = "";
    }
} */

function validateDatetimeLocalInput(inputID, errID) {
    const input = document.getElementById(inputID);
    const err = document.getElementById(errID);

    const currentDate = new Date();

    if (currentDate.getTime() > input.valueAsNumber || input.value === '') {
        input.style.border = '3px solid  #6b00b3';
        err.style.display = 'block';
    } else {
        input.style.border = '3px solid rgba(255, 255, 255, .9)';
        err.style.display = 'none';
    }
}

var inputs = document.querySelectorAll(".input");
var counters = document.querySelectorAll(".counter");

for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", function () {
        //i = i > 2 ? 0 : i;
        var counter = this.nextElementSibling;
        counter.innerHTML = this.value.length + "/50";

        if (this.value.length >= 50) {
            counter.classList.add("counter-error");

        } else {
            counter.classList.remove("counter-error");
        }

    });
}

function validateEmail(emailID) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(emailID);
}

function checkEmail(emailID, erremailID) {

    var emailAddr = document.getElementById(emailID).value;

    if (!validateEmail(emailAddr)) {
        displayError(emailID, erremailID);
    } else {
        hideError(emailID, erremailID);
    }
}

function validateAge(ageID, errAgeID, birthID) {

    let age = document.getElementById(ageID);
    let ageErr = document.getElementById(errAgeID);
    let birth = document.getElementById(birthID);

    if (birth.value || age.value != '') {
        age.style.border = '3px solid rgba(255, 255, 255, .9)';
        ageErr.style.display = 'none';
    } else {
        displayError(ageID, errAgeID);
    }
}

function validateMobileNumber(mobileNumber) {
    const regex = /^(\+)?([0-9]){1,3}[- ]?([0-9]){10}$/;
    return regex.test(mobileNumber);
}

function checkMobileNumber(mobileID, errMobileID) {

    var phoneNumber = document.getElementById(mobileID).value;

    if (!validateMobileNumber(phoneNumber)) {
        displayError(mobileID, errMobileID);
    } else {
        hideError(mobileID, errMobileID);
    }
}

const checkboxino = document.getElementById("option3");
checkboxino.addEventListener("change", (e) => {
    if (e.target.checked) {
        document.getElementById('option1').style.display = 'none';
        document.getElementById('option2').style.display = 'none';
    } else {
        document.getElementById('option1').style.display = 'block';
        document.getElementById('option2').style.display = 'block';
    }
})

let birthdate = document.getElementById("birth");
birthdate.addEventListener("change", (e) => {

    let bday = new Date(e.target.value);
    let today = new Date();

    let age = today.getFullYear() - bday.getFullYear();
    let month = today.getMonth() - bday.getMonth();
    let errAge = document.getElementById("err-age");
    let errAge2 = document.getElementById("err-age2");
    let ageinput = document.getElementById("age");
    ageinput.setAttribute('disabled', 'true');

    if (month < 0 || (month === 0 && today.getDate() < bday.getDate())) {
        errAge2.style.display = 'block';
        ageinput.style.border = '3px solid #6b00b3';

    }
    else {
        errAge2.style.display = 'none';
        ageinput.value = age;
        birthdate.style.border = '3px solid rgba(255, 255, 255, .9)';
        ageinput.style.border = '3px solid rgba(255, 255, 255, .9)';
        errAge.style.display = 'none';
    }
})

const soccer = document.getElementById("soccer");
const hockey = document.getElementById("hockey");
const team = document.getElementById("team");

soccer.addEventListener("click", function () {
    team.innerHTML = `
      <option value="">--Prosím vyber si tím--</option>
      <optgroup label="Futbal">
        <option value="Real-Madrid">Real Madrid</option>
        <option value="FC Barcelona">Barcelona</option>
        <option value="Manchester-City">Manchester City</option>
        <option value="Bayern-Munchen">Bayern Munchen</option>
        <option value="Slovan-Bratislava">Slovan Bratislava</option>
        <option value="AC-Milano">AC Milano</option>
        <option value="Inter Miami">Inter Miami</option>
        <option value="PSG">Paris Saint Germain</option>
        <option value="FC Liverpool">Liverpool</option>
      </optgroup>`;
});

hockey.addEventListener("click", function () {
    team.innerHTML = `
      <option value="">--Prosím vyber si tím--</option>
      <optgroup label="Hokej">
        <option value="Washington-Capitals">Washington Capitals</option>
        <option value="San_Jose-Sharks">San Jose Sharks</option>
        <option value="Carolina-Hurricanes">Carolina Hurricanes</option>
        <option value="Vancouver-Canucks">Vancouver Canucks</option>
        <option value="Montreal-Canadiens">Montreal Canadiens</option>
        <option value="Pittsburgh-Penguins">Pittsburgh Penguins</option>
        <option value="Edmonton-Oilers">Edmonton Oilers</option>
        <option value="Toronto-Maple_Leafs">Toronto Maple Leafs</option>
        <option value="Florida-Panthers">Florida Panthers</option>
      </optgroup>`;
});

let country = document.getElementById("country");
let state = document.getElementById("state");
let city = document.getElementById("city");

country.addEventListener("click", function () {

    if (country.value === "Slovensko") {
        state.innerHTML = `
        <optgroup label="Kraj">
        <option value="Bratislavský">Bratislavský</option>
        <option value="Trnavský">Trnavský</option>
        <option value="Žilinský">Žilinský</option>
        <option value="Nitriansky">Nitriansky</option>
        <option value="Banskobystrický">Banskobystrický</option>
        <option value="Prešovský">Prešovský</option>
        <option value="Košický">Košický</option>
        <option value="Trenčiansky">Trenčiansky</option>
        </optgroup>`;
    } else if (country.value === "Česko") {
        state.innerHTML = `
        <optgroup label="Kraj">
        <option value="Jihočesky">Jihočeský</option>
        <option value="Jihomoravsky">Jihomoravský</option>
        <option value="Karlovarsky">Karlovarský</option>
        <option value="Kralovehradecky">Královehradecký</option>
        <option value="Liberecky">Liberecký</option>
        <option value="Olomoucky">Olomoucký</option>
        <option value="Pardubicky">Pardubický</option>
        <option value="Plzensky">Plzeňský</option>
        <option value="Ustecky">Ústecký</option>
        <option value="Zlinsky">Zlínský</option>
        </optgroup>`;

    } else {
        state.innerHTML = `
        <optgroup label="Kraj">
        <option value="">Najprv vyber štát v ktorom žiješ !</option>
        </optgroup>
        `;
    }
    setStates();
});

state.addEventListener("click", setStates);

function setStates() {
    if (state.value === "Bratislavský") {
        city.innerHTML = `
        <optgroup label="Okres">
        <option value="Bratislava1-5">Bratisla I-V</option>
        <option value="Malacky">Malacky</option>
        <option value="Pezinok">Pezinok</option>
        <option value="Senec">Senec</option>
        </optgroup>`;
    } else if (state.value === "Trnavský") {
        city.innerHTML = `
        <optgroup label="Okres">
        <option value="Dunajská-Streda">Dunajská Streda</option>
        <option value="Galanta">Galanta</option>
        <option value="Hlohovec">Hlohovec</option>
        <option value="Piešťany">Piešťany</option>
        <option value="Senica">Senica</option>
        <option value="Skalica">Skalica</option>
        <option value="Trnava">Trnava</option>
        </optgroup>`;
    } else if (state.value === "Trenčiansky") {
        city.innerHTML = `
        <optgroup label="Okres">
        <option value="Ilava">Ilava</option>
        <option value="Myjava">Myjava</option>
        <option value="Partizánske">Partizánske</option>
        <option value="Považská-Bystrica">Považská Bystrica</option>
        <option value="Prievidza">Prievidza</option>
        <option value="Púchov">Púchov</option>
        <option value="Trenčín">Trenčín</option>
        </optgroup>`;
    } else if (state.value === "Nitriansky") {
        city.innerHTML = `
        <optgroup label="Okres">
        <option value="Komárno">Komárno</option>
        <option value="Levice">Levice</option>
        <option value="Nitra">Nitra</option>
        <option value="Nové-Zámky">Nové Zámky</option>
        <option value="Topolčany">Topoľčany</option>
        <option value="Zlaté-Moravce">Zlaté Moravce</option>
        </optgroup>`;
    } else if (state.value === "Žilinský") {
        city.innerHTML = `
        <optgroup label="Okres">
        <option value="Bytča">Bytča</option>
        <option value="Čadca">Čadca</option>
        <option value="Liptovský-Mikuláš">Liptovský Mikuláš</option>
        <option value="Martin">Martin</option>
        <option value="Ružomberok">Ružomberok</option>
        <option value="Žilina">Žilina</option>
        </optgroup>`;
    } else if (state.value === "Banskobystrický") {
        city.innerHTML = `
        <optgroup label="Okres">
        <option value="Banská-Bystrica">Banská Bystrica</option>
        <option value="Detva">Detva</option>
        <option value="Krupina">Krupina</option>
        <option value="Lučenec">Lučenec</option>
        <option value="Zvolen">Zvolen</option>
        </optgroup>`;
    } else if (state.value === "Prešovský") {
        city.innerHTML = `
        <optgroup label="Okres">
        <option value="Bardejov">Bardejov</option>
        <option value="Levoča">Levoča</option>
        <option value="Kežmarok">Kežmarok</option>
        <option value="Poprad">Poprad</option>
        <option value="Prešov">Prešov</option>
        <option value="Svidnik">Svidník</option>
        </optgroup>`;
    } else if (state.value === "Košický") {
        city.innerHTML = `
        <optgroup label="Okres">
        <option value="Gelnica">Gelnica</option>
        <option value="Košice">Košice</option>
        <option value="Michalovce">Michalovce</option>
        <option value="Sobrance">Sobrance</option>
        <option value="Trebišov">Trebišov</option>
        </optgroup>`;
    } else if (state.value === "Jihočesky") {
        city.innerHTML = `
        <optgroup label="Okres">
        <option value="Ceske-Budejovice">České Budějovice</option>
        <option value="Pisek">Písek</option>
        <option value="Prachatice">Prachatice</option>
        <option value="Tabor">Tábor</option>
        </optgroup>`;
    } else if (state.value === "Jihomoravsky") {
        city.innerHTML = `
        <optgroup label="Okres">
        <option value="Blansko">Blansko</option>
        <option value="Brno">Brno</option>
        <option value="Hodonin">Hodonín</option>
        <option value="Znojmo">Znojmo</option>
        </optgroup>`;
    } else if (state.value === "Karlovarsky") {
        city.innerHTML = `
        <optgroup label="Okres">
        <option value="Chleb">Chleb</option>
        <option value="Karlovy-Vary">Karlovy Vary</option>
        <option value="Sokolov">Sokolov</option>
        </optgroup>`;
    } else if (state.value === "Kralovehradecky") {
        city.innerHTML = `
        <optgroup label="Okres">
        <option value="Hradec-Kralove">Hradec Králové</option>
        <option value="Nachod">Náchod</option>
        <option value="Trutnov">Trutnov</option>
        </optgroup>`;
    } else if (state.value === "Liberecky") {
        city.innerHTML = `
        <optgroup label="Okres">
        <option value="Jablonec">Jablonec</option>
        <option value="Liberec">Liberec</option>
        <option value="Semily">Semily</option>
        </optgroup>`;
    } else if (state.value === "Olomoucky") {
        city.innerHTML = `
        <optgroup label="Okres">
        <option value="Jesenik">Jeseník</option>
        <option value="Olomouc">Olomouc</option>
        <option value="Prostejov">Prostejov</option>
        <option value="Sumperk">Šumperk</option>
        </optgroup>`;
    } else if (state.value === "Pardubicky") {
        city.innerHTML = `
        <optgroup label="Okres">
        <option value="Chrudin">Chrudin</option>
        <option value="Pardubice">Pardubice</option>
        <option value="Svitavy">Svitavy</option>
        </optgroup>`;
    } else if (state.value === "Plzensky") {
        city.innerHTML = `
        <optgroup label="Okres">
        <option value="Domazlice">Domažlice</option>
        <option value="Plzen">Plzeň</option>
        <option value="Tachov">Tachov</option>
        </optgroup>`;
    } else if (state.value === "Ustecky") {
        city.innerHTML = `
        <optgroup label="Okres">
        <option value="Decin">Dečín</option>
        <option value="Chomutov">Chomutov</option>
        <option value="Most">Most</option>
        <option value="Teplice">Teplice</option>
        </optgroup>`;
    } else if (state.value === "Zlinsky") {
        city.innerHTML = `
        <optgroup label="Okres">
        <option value="Kromeriz">Kromeríz</option>
        <option value="Vsetin">Vsetín</option>
        <option value="Zlin">Zlín</option>
        </optgroup>`;
    } else {
        state.innerHTML = `
        <optgroup label="Kraj">
        </optgroup>
        `;
    }

}

function showTextArea() {
    var comment = document.getElementById("comment");
    comment.style.display = "block";
}

function clickOnRequiredInputsOnMouseDown() {
    const requiredInputs = document.querySelectorAll('.required');
    requiredInputs.forEach(input => input.dispatchEvent(new Event('mousedown')));
}

function checkBorder() {
    const requiredInputs = document.querySelectorAll('.required');
    for (let i = 0; i < requiredInputs.length; i++) {
        if (requiredInputs[i].style.border !== '3px solid rgba(255, 255, 255, 0.9)') {
            return false;
        }
    }
    return true;
}


function showModalOnClick() {
    const summerLocation = document.getElementById('summer-location').value;
    const numPeople = document.getElementById('num-people').value;
    const timeOfHoliday = document.getElementById('timeVenue').value;
    const priceOfHoliday = document.getElementById('price').value;
    const nameUser = document.getElementById('first-name').value;
    const surname = document.getElementById('sur-name').value;
    const phone = document.getElementById('phone-number').value;
    const email = document.getElementById('e-mail').value;
    const birthday = document.getElementById('birth').value;
    const age = document.getElementById('age').value;

    document.getElementById('modal-summer-location').textContent = summerLocation;
    document.getElementById('modal-num-people').textContent = numPeople;
    document.getElementById('modal-timeVenue').textContent = timeOfHoliday;
    document.getElementById('modal-price').textContent = priceOfHoliday;
    document.getElementById('modal-first-name').textContent = nameUser;
    document.getElementById('modal-sur-name').textContent = surname;
    document.getElementById('modal-mobile-number').textContent = phone;
    document.getElementById('modal-email').textContent = email;
    document.getElementById('modal-birth').textContent = birthday;
    document.getElementById('modal-age').textContent = age;

    setTimeout(() => {
        clickOnRequiredInputsOnMouseDown();
        let borderCheck = checkBorder();
        if (borderCheck) {
            setTimeout(() => {
                document.getElementById('form-modal').showModal();
            }, 0);
        }
    }, 0);

};
document.getElementById('open-modal-button').addEventListener('click', showModalOnClick);




