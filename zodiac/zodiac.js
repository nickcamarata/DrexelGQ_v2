function signs() {
    day=document.info.day.value, month=document.info.month.selectedIndex;
    with (document.musician.sign){
      
if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
    capricorn();
  } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
    sagittarius();
  } else if ((month == 10 && day >= 24) || (month == 11 && day <= 21)) {
    scorpio();
  } else if ((month == 9 && day >= 23) || (month == 10 && day <= 23)) {
    libra();
  } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
    virgo();
  } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
    leo();
  } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
    cancer();
  } else if ((month == 5 && day >= 21) || (month == 6 && day <= 21)) {
    gemini();
  } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
    taurus();
  } else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
    aries();
  } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    pices();
  } else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
    aquarius();
  } else {error();}
    }
}

function error() {
    var src = "soulmates/error";
    show_image("soulmates/error", 276,110, "ERROR");
}

function aries() {
    var src = "soulmates/aries";
    show_image("soulmates/aries", 276,110, "Aries");
}

function pisces() {
    var src = "soulmates/piscies";
    show_image("soulmates/piscies", 276,110, "Piscies");
}

function aquarius() {
    var src = "soulmates/aquarius";
    show_image("soulmates/aquarius", 276,110, "Aquarius");
}

function taurus() {
    var src = "soulmates/taurus";
    show_image("soulmates/taurus", 276,110, "Taurus");
}

function gemini() {
    var src = "soulmates/gemini";
    show_image("soulmates/gemini", 276,110, "Gemini");
}

function cancer() {
    var src = "soulmates/cancer";
    show_image("soulmates/cancer", 276,110, "Cancer");
}

function leo() {
    var src = "soulmates/leo";
    show_image("soulmates/leo", 276,110, "Leo");
}

function virgo() {
    var src = "soulmates/virgo";
    show_image("soulmates/virgo", 276,110, "Virgo");
}

function libra() {
    var src = "soulmates/libra";
    show_image("soulmates/libra", 276,110, "Libra");
}

function scorpio() {
    var src = "soulmates/scorpio";
    show_image("soulmates/scorpio", 276,110, "Scorpio");
}Sagittarius

function sagittarius() {
    var src = "soulmates/sagittarius";
    show_image("soulmates/sagittarius", 276,110, "Sagittarius");
}

function capricorn() {
    var src = "soulmates/capricorn";
    show_image("soulmates/capricorn", 276,110, "Capricorn");
}

function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    document.body.appendChild(img);
}
