var nedvelden = ["Naam:","Adres:","Woonplaats:","Postcode:","Geboortedatum:","Nationaliteit:","Beroep:"];
var engvelden = ["Name:","Address:","Residence:","Postcode:","Date of Birth:","Nationality:","Work:",];
//Formule leeftijdberekening
// function getAge(dateString) {
//     var today = new Date();
//     var birthDate = new Date(dateString);
//     var age = today.getFullYear() - birthDate.getFullYear();
//     var month = today.getMonth() - birthDate.getMonth();
//     if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
//         age--;
//     }
//     return age;
// }

$(document).ready(function(){
  console.log("ready!");

$("#NaamNed").focusout(function(){
  var name = $("#NaamNed").val();
  if (!name.match('^[A-Za-z]')) {
      alert("naam niet correct");
  }
});

$("#AdresNed").focusout(function(){
  var name = $("#AdresNed").val();
  if (!name.focusout('^[A-Za-z]+ [0-9]*[A-Za-z]*[\s]*[0-9]+')) {
      alert("een geldige adres invoeren");
  }
});

$("#WoonplaatsNed").focusout(function(){
  var name = $("#WoonplaatsNed").val();
  if (!name.match('^[A-Za-z]*[0-9]{1}')) {
      alert("een bestaand woonplaats kiezen");
  }
});

$("#PostcodeNed").focusout(function(){
  var name = $("#PostcodeNed").val();
  if (!name.match('^[0-9]{4}[A-Za-z]{2}')) {
    alert("een geldige postcode kiezen");
  }
});

// $("#GeboorteNed").focusout(function(){
//   var name = $("#GeboorteNed").val();
//   if (!name.match('^[0-9]{5}[0-9]{5}')) {
//     alert("FOOUUUUT!!!!");
//   } else {
//
//   }
$("#GeboorteNed").focusout(function(){
  var name = $("#GeboorteNed").val();
  if(/^\d{4}-\d{2}-\d{2}$/.test("#GeboorteNed")){
    let age = getAge("#GeboorteNed");
    $("#oud").text("Je word " + (age+=1) + " jaar oud");
    $("#oud").fadeIn("slow");
    $("#oud").color("black");
  }
})

$("#NationaliteitNed").focusout(function(){
  var name = $("#NationaliteitNed").val();
  if (!name.match('^[A-Za-z]')) {
      alert("nationaliteit is niet correct");
  }
});

$("#BeroepNed").focusout(function(){
  var name = $("#BeroepNed").val();
  if (!name.match('^[A-Za-z]*[0-9]{0}')) {
        alert ("een geldig beroep kiezen")
      }
});

// engels..................................................................

$("#NameEng").focusout(function(){
  var name = $("#NameEng").val();
  if (!name.match('^[A-Za-z]')) {
      alert ("name not correct");
    $('#NameEng').val("");
}
});

$("#AdressEng").focusout(function(){
  var name = $("#AdressEng").val();
  if (!name.match('^[A-Za-z]+ [0-9]*[A-Za-z]*[\s]*[0-9]+')) {
        alert ("Adress not correct");
        $('#AdressEng').val("");

}
});

$("#ResidenceEng").focusout(function(){
  var name = $("#ResidenceEng").val();
  if (!name.match('^[A-Za-z]*[0-9]{1}')) {
      document.getElementById('ResidenceEng').style.backgroundColor = "white";
  } else {
        alert ("Residence not correct")
}
});

$("#PostalEng").focusout(function(){
  var name = $("#PostalEng").val();
  if (!name.match('^[0-9]{4}[A-Za-z]{2}')) {
      alert ("wrong postal code")
}
});

$("#BirthEng").focusout(function(){
  var name = $("#BirthEng").val();
  if(/^\d{4}-\d{2}-\d{2}$/.test("#BirthEng")){
    let age = getAge("#BirthEng");
    $("#old").text("Je word " + (age+=1) + " jaar oud");
    $("#old").fadeIn("slow");
  }
})

$("#NationalityEng").focusout(function(){
  var name = $("#NationalityEng").val();
  if (!name.match('^[A-Za-z]')) {
        alert ("Nationality is not correct")
}
});

$("#ProfessionEng").onclick(function(){
  var name = $("#ProfessionEng").val();
  if (!name.match('^[A-Za-z]*[0-9]{0}')) {
        alert ("profession is not correct")
}
});

  // $("#NaamNed").keyup(function(){
  //   var name = $("#NaamNed").val();
  //   if (name.match('^[a-f]{2}')) {
  //       console.log("Naam: "+name+" OK");
  //       document.getElementById('NaamNed').style.backgroundColor = "white";
  //   } else {
  //     console.log("Naam: "+name+" Fout");
  //       document.getElementById('NaamNed').style.backgroundColor = "red";
  //   }
  // });
});
