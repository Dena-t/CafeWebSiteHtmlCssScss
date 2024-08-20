function contactusen() {
    let fullname = document.getElementById('name');
    let email = document.getElementById('email-address');
    let phone = document.getElementById('phone');
    let feedback = document.getElementById('feedback');
    let selectlist = document.getElementById('survey-reference');

    
    document.getElementById('phonewarning').innerHTML = '';
    document.getElementById('feedbackwarning').innerHTML = '';
    document.getElementById('namewarning').innerHTML = '';
    document.getElementById('emailwarning').innerHTML = '';
    document.getElementById('selectlist-warning').innerHTML='';



    if(!fullname.value){
        document.getElementById('namewarning').innerHTML = 'Enter Your Name.';
        fullname.focus();
        return false;
    }
     else
        if (!email.value) {
        document.getElementById('emailwarning').innerHTML = 'Enter Your Email Address.';
         email.focus();
         return false;
        }
        else
        if (!phone.value) {
        document.getElementById('phonewarning').innerHTML = 'Enter Your Phone Number.';
        phone.focus();
         return false;
        }else if (!selectlist.value) {
            document.getElementById('selectlist-warning').innerHTML = 'Choose at least One Option.';
            selectlist.focus();
            selectlist.addEventListener('input',(event) => document.getElementById('selectlist-warning').innerHTML='' );
             return false;
        }else
        if (!feedback.value) {
        document.getElementById('feedbackwarning').innerHTML = 'Enter Your Feedback.';
        feedback.addEventListener('input',(event) => document.getElementById('feedbackwarning').innerHTML='' );
        feedback.focus();
         return false;
        }else {

            return true;

        }
}

// contact us textarea customization//

// Defining Character limits -initialization and definition of variables
const max_char = 100;

document.getElementById('limit').innerHTML = max_char;
let wordCountBox = document.getElementById('countValue');
let warningBox = document.getElementById('warningBox');

// calling updatecount() function as soon as user start typing 
document.getElementById('feedback').addEventListener('keyup', updateCount);



// Calling countcharacters() function that counts and return errors if user exceeded the limits 
// also disable the submit button so that the user remove extra characters 
function updateCount() {
warningBox.innerHTML = '';

let commentText = document.getElementById('feedback').value;
let charCount = countCharacters(commentText);  // Function that counts characters 

if(charCount>max_char){
    document.getElementById('submit').disabled=true;
}else{
    document.getElementById('submit').disabled=false;

}

try{
    if(charCount>max_char) throw "Exceeded the character limit!, Remove Extra Characters";

 }catch(err){
    warningBox.innerHTML = err;

 }finally{
      wordCountBox.innerHTML=charCount;
      

 }
console.log();
}
// counter 
function countCharacters(textStr) {
var commentregx = /\s/g;
var chars = textStr.replace(commentregx, "");
return chars.length;
} 


// var select = document.getElementById('survey-reference');

// var selectionsArray = [];

// var paragraph = document.getElementById('survey-res');


// function optionSelected (option) {

// if (selectionsArray.includes(option.text)) {

// selectionsArray.splice(selectionsArray.indexOf(option.text), 1);

// } else {

// selectionsArray.push(option.text);

// }

// }


// select.options[0].onclick = function () {

// optionSelected(select.selectedOption[0]);

// };

// select.options[1].onclick = function () {

// optionSelected(select.options[1]);

// };

// select.options[2].onclick = function () {

// optionSelected(select.options[2]);

// };

// select.options[3].onclick = function () {

// optionSelected(select.options[3]);

// };

// select.options[4].onclick = function () {

// optionSelected(select.options[4]);

// };


// function convertArrayToString () {

// if (selectionsArray.length === 0) {
// alert('no element is selected');
// paragraph.innerHTML = 'No element is selected';

// } else {
//     alert('selected');

// var string = 'Selected elements are ';

// for (var i = 0; i < selectionsArray.length; i++) {

// string = string + selectionsArray[i] + ', ';

// }

// paragraph.innerHTML = string;

// }
// console.log();
// }


///************
/// Case Project Number 7

// initializing and defining part 
let sel = document.getElementById('survey-reference');

var selectionsArray = [];

var paragraph = document.getElementById('survey-res');

// By selecting any option from the list , selected option is passed to myselect() function 

sel.options[0].onclick = function () {

    myselect(sel.options[0]);
    
    }
sel.options[1].onclick = function () {
    
    myselect(sel.options[1]);
        
        }
sel.options[2].onclick = function () {
    
    myselect(sel.options[2]);
            
            }
sel.options[3].onclick = function () {
    
    myselect(sel.options[3]);
                
                }
sel.options[4].onclick = function () {
    
    myselect(sel.options[4]);
                    
                    }

// Checks if the option if the option already exists inside the array -selectionArray[] will remove it otherwise 
// the option will be pushed 

// to show the result displayresult() function is called
function myselect(opt){
   // var selectedtxt = sel.options[sel.selectedIndex].textContent;

    if(selectionsArray.includes(opt.textContent)){
        selectionsArray.splice(selectionsArray.indexOf(opt.textContent,1));
        //alert('removed');
       
    }else {
        selectionsArray.push(opt.textContent);
     // alert('added');
    }
    // if(opt== sel.options[-1]){
    //     paragraph.innerHTML = 'none selected';
    // }
       
    paragraph.innerHTML = displayresult();
 // alert(sel.options[sel.selectedIndex].textContent);
}


// if the array length is zero a message will be returned to the user to select at least one
// otherwise all the selected options will be shown inside the for loop 
  function displayresult(){
   
    if (selectionsArray.length <= 0 ){
       string ='No Option Selected ,Please Select at least One';
    }else {
        var string = 'Selected options:';
        for(var i=0; i<selectionsArray.length; i++){
         string = string+selectionsArray[i]+', ';
        }
    }
   return string;
  }
console.log(feedback.value);
  
  
