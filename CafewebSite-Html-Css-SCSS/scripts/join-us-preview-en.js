       //creating table inside the Join-us-preview-en.html
       
      var divcontainer = document.getElementById('divcontainer');
      table = document.createElement("table");
      table.setAttribute("class", "previewtbl");

       divcontainer.appendChild(table);
       tbody = document.createElement('tbody');





        window.addEventListener('load', () => {
           
      
    

    // const fname = localStorage.getItem('Fname');
    // const lname = localStorage.getItem('Lname');
    // const address = localStorage.getItem('Address');
    // const city = localStorage.getItem('City');
    // const state = localStorage.getItem('State');
    // const zipcode= localStorage.getItem('Zipcode');
    // const email = localStorage.getItem('Email');
    // const phone = localStorage.getItem('Phone');
    // const jp = localStorage.getItem('Job Position');
    // const yoe = localStorage.getItem('Year Of Experience');

// defining an array of the localstorage keys inorder user input data
// showing values of each key inside a for loop by calling tablecreation()
const items =['First Name: ','Last Name: ','Address: ','City: ','State: ','Zip code: ','Email Address: ','Phone: ','Job Position: ','Years Of Experience: ','Cv File: '];
for(var j=0,len = items.length; j < len; ++j ){
  
  tablecreation(localStorage.getItem(items[j]),items[j]);
 

}


// for ( var i = 0, len = localStorage.length; i < len; ++i ) {
//     const key = localStorage.key(i);
//     const value = localStorage.getItem( localStorage.key( i ));
//     tablecreation( localStorage.getItem( localStorage.key( i ) ),localStorage.key(i) );

// //     items.push({key, value});
// // items.sort((a,b) => a.value.order-b.value.order).forEach(item =>{


// //   });
//   }
    console.log();
}) ;

function tablecreation(inputvalue,keyval){
    var tr = document.createElement('tr');
    var td = document.createElement('td');  
    var td2 = document.createElement('td');    

   var  tdlabel = document.createElement('label');
    tdlabel.innerHTML=keyval;

    td2.innerHTML = inputvalue;

    console.log(tdlabel);
    table.appendChild(tbody);
    tbody.appendChild(tr);
    tr.appendChild(td);
    tr.appendChild(td2);
    td.appendChild(tdlabel);

}
function validate(){
 //let submitBtn = document.getElementById('submit');
  let confirmCheckBox = document.getElementById('confirmation');
  if(!confirmCheckBox.checked){
    document.getElementById('confirm-warning').innerHTML='Please confirm your Information or click Back to correct it.'
    //alert('review and confirm!');
    confirmCheckBox.addEventListener('click',(event) => document.getElementById('confirm-warning').innerHTML='' );
    confirmCheckBox.focus();
    return false;
  }else{
    return true;
  }


}

