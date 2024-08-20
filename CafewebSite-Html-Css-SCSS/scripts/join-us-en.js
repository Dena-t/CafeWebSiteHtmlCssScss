'use strict';
// receiving the uploaded file name and location and showing in inside input

$('#cv-upload-en').change(function(e) {
    let fileName = (e.target.files.length > 0) ? e.target.files[0].name : 'choose_file_not';
    $('#cv-upload-en-label').text(fileName);
});
$('#cv-upload-fr').change(function(e) {
    let fileName = (e.target.files.length > 0) ? e.target.files[0].name : 'choose_file_not';
    $('#cv-upload-fr-label').text(fileName);
});

//validating form -join us//


// validate join-us-en.html form
function validateForm(){
let citytxt = document.getElementById('city');
let statetxt = document.getElementById('state');
let zipcodetxt = document.getElementById('zipcode');
let jpositiontxt = document.getElementById('job-positions');
let yoetxt = document.getElementById('yearsofexperience');
let cvuploadtxt = document.getElementById('cv-upload-en');


 if (!citytxt.value) {
    document.getElementById('citywarning').innerHTML='Enter City.';
    citytxt.focus();
    citytxt.addEventListener('input',(event) => document.getElementById('citywarning').innerHTML='' );
    return false;
  }else

   if (!statetxt.value) {
    document.getElementById('statewarning').innerHTML='Enter State.';
    statetxt.focus();
    statetxt.addEventListener('input',(event) => document.getElementById('statewarning').innerHTML='' );
    return false;

}else if (!zipcodetxt.value) {
    document.getElementById('zipcodewarning').innerHTML='Enter Your Zipcode.';
    zipcodetxt.focus();
    zipcodetxt.addEventListener('input',(event) => document.getElementById('zipcodewarning').innerHTML='' );
    return false;

}else if (!jpositiontxt.selectedIndex) {
    document.getElementById('jpwarning').innerHTML='Enter the Job Position .';
    jpositiontxt.focus();
    jpositiontxt.addEventListener('input',(event) => document.getElementById('jpwarning').innerHTML='' );
    return false;

}else if (!yoetxt.selectedIndex) {
    document.getElementById('yoewarning').innerHTML='Select Years of Expereince.';
    yoetxt.focus();
    yoetxt.addEventListener('input',(event) => document.getElementById('yoewarning').innerHTML='' );
    return false;

}else if(!cvuploadtxt.value){
    document.getElementById('uploadwarning').innerHTML='Upload Your CV.';
    cvuploadtxt.focus();
    cvuploadtxt.addEventListener('input',(event) => document.getElementById('uploadwarning').innerHTML='' );

    return false;
    
}else {
    return true;

}

}
/// fetching data from localstorage and set them as a pair
function preview(){
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let address = document.getElementById('address').value;
    let city = document.getElementById('city').value;
    let state = document.getElementById('state').value;
    let zipcode = document.getElementById('zipcode').value;
    let email = document.getElementById('email-address').value;
    let phone = document.getElementById('phone').value;
    let jp = document.getElementById('job-positions').value;
    let yoe = document.getElementById('yearsofexperience').value;
    let cvinput = document.getElementById('cv-upload-en').value;

   localStorage.setItem('First Name: ',fname);
   localStorage.setItem('Last Name: ',lname);
   localStorage.setItem('Address: ',address);
   localStorage.setItem('City: ',city);
   localStorage.setItem('State: ',state);
   localStorage.setItem('Zip code: ',zipcode);
   localStorage.setItem('Email Address: ',email);
   localStorage.setItem('Phone: ',phone);
   localStorage.setItem('Job Position: ',jp);
   localStorage.setItem('Years Of Experience: ',yoe);
   localStorage.setItem('Cv File: ',cvinput);
   console.log();

return;








}


   