

if(!window.contactList){ //check if we already have a contact list
   window.contactList=$ab();
  }

var form  = document.getElementById('contact');
form.addEventListener('submit', function(){
   if(!window.contactList){ //check if we already have a contact list
   window.contactList=$ab(form.person.value,form.phone.value,form.email.value);
  } else {
  //saves new values rather than deleting old ones as well
    contactList.addNewContact(form.person.value,form.phone.value,form.email.value);
  }
  
    form.person.value = '';
    form.phone.value = '';
    form.email.value = '';
  
   event.preventDefault();
});

var searchForm = document.getElementById('search');
searchForm.addEventListener('submit', function(){
  var results;
  if(results !== undefined){
    results = null;
  }
  if(!window.contactList){
    window.contactList = $ab();
  }else{
    results = contactList.search(searchForm.search.value);
  }
  document.getElementById('results').innerHTML = '';

  
  //do something with the results
  event.preventDefault();
});

document.getElementById('js-view').addEventListener('click', function(){
  if(window.contactList){ //check if we already have a contact list
     document.getElementById('show-panel').innerHTML = '';
   var contacts = contactList.returnAll();
    console.log(contacts);
   
  }

});

document.getElementById('js-search').addEventListener('click', function(){
  document.getElementById('show-panel').style.display = 'none';
  document.getElementById('search-panel').style.display = 'block';
  document.getElementById('contact-panel').style.display = 'none';
});


