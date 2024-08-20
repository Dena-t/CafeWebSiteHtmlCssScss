'use strict';

// join-us-fr.html input file ,file name 
$('#cv-upload-fr').change(function(e) {
    let fileName = (e.target.files.length > 0) ? e.target.files[0].name : 'choose_file_not';
    $('#cv-upload-fr-label').text(fileName);
});
// join-us-en.html input file file name function 

//validating form -join us//


// validate join-us-fr.html form
function validateForm(){
let citytxt = document.getElementById('city');
let statetxt = document.getElementById('state');
let zipcodetxt = document.getElementById('zipcode');
let jpositiontxt = document.getElementById('job-positions');
let yoetxt = document.getElementById('yearsofexperience');
let cvuploadtxt = document.getElementById('cv-upload-fr');


 if (!citytxt.value) {
    document.getElementById('citywarning').innerHTML='Entrez la Ville..';
    citytxt.focus();
    citytxt.addEventListener('input',(event) => document.getElementById('citywarning').innerHTML='' );
    return false;
  }else

   if (!statetxt.value) {
    document.getElementById('statewarning').innerHTML='Entrez la Province.';
    statetxt.focus();
    statetxt.addEventListener('input',(event) => document.getElementById('statewarning').innerHTML='' );
    return false;

}else if (!zipcodetxt.value) {
    document.getElementById('zipcodewarning').innerHTML='Entrez Votre Code Postal.';
    zipcodetxt.focus();
    zipcodetxt.addEventListener('input',(event) => document.getElementById('zipcodewarning').innerHTML='' );
    return false;
}else if (!jpositiontxt.selectedIndex) {
    document.getElementById('jpwarning').innerHTML='Selectionez un Poste.';
    jpositiontxt.focus();
    jpositiontxt.addEventListener('input',(event) => document.getElementById('jpwarning').innerHTML='' );

    return false;
}else if (!yoetxt.selectedIndex) {
    document.getElementById('yoewarning').innerHTML='Selectionez l`années d`expériance.';
    yoetxt.focus();
    yoetxt.addEventListener('input',(event) => document.getElementById('yoewarning').innerHTML='' );
    return false;
}else if(!cvuploadtxt.value){
    document.getElementById('uploadwarning').innerHTML='Téléverser votre CV.';
    cvuploadtxt.focus();
    cvuploadtxt.addEventListener('input',(event) => document.getElementById('uploadwarning').innerHTML='' );

    return false;
    
}else {
    return true;

}

}



   