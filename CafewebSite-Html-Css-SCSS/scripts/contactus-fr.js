function contactusfr() {
    let fullname = document.getElementById('name');
    let email = document.getElementById('email-address');
    let phone = document.getElementById('phone');
    let feedback = document.getElementById('feedback');
    
    document.getElementById('phonewarning').innerHTML = '';
    document.getElementById('feedbackwarning').innerHTML = '';
    document.getElementById('namewarning').innerHTML = '';
    document.getElementById('emailwarning').innerHTML = '';


    if(!fullname.value){
        document.getElementById('namewarning').innerHTML = 'Entrez votre Nom.';
        fullname.focus();
        return false;
    }
     else
        if (!email.value) {
        document.getElementById('emailwarning').innerHTML = 'Entrez Votre Courrielle.';
         email.focus();
         return false;
        }
        else
        if (!phone.value) {
        document.getElementById('phonewarning').innerHTML = 'Entrez Votre Numéro de Téléphone.';
        phone.focus();
         return false;
        }else
        if (!feedback.value) {
        document.getElementById('feedbackwarning').innerHTML = 'Entrez Votre Commentaire.';
        feedback.focus();
         return false;
        }else {
            return true;
        
        }
}

// contact us textarea customization//
const max_char = 100;

document.getElementById('limit').innerHTML = max_char;
let wordCountBox = document.getElementById('countValue');
let warningBox = document.getElementById('warningBox');

document.getElementById('feedback').addEventListener('keyup', updateCount);

function updateCount() {
warningBox.innerHTML = '';
document.getElementById('feedbackwarning').innerHTML = '';


let commentText = document.getElementById('feedback').value;
let charCount = countCharacters(commentText);
try{
    if(charCount>max_char) throw "Vous avez dépassé la limite du nombre de caractères";

 }catch(err){
    warningBox.innerHTML = err;

 }finally{
      wordCountBox.innerHTML=charCount;
 }
console.log();
}

function countCharacters(textStr) {
var commentregx = /\s/g;
var chars = textStr.replace(commentregx, "");
return chars.length;
} 

