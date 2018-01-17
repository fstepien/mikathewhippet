document.body.classList.add('js-loading');

window.addEventListener("load", showPage);

function showPage() {
  document.body.classList.remove('js-loading');
}

$(document).ready(function() {

    var $header = $('header');

    var $sticky = $header.before($header.clone().addClass("sticky"));

    $(window).on("scroll", function(){
      var scrollFromTop = $(window).scrollTop();
      $("body").toggleClass("scroll", (scrollFromTop > 300));
        });

});

/* ------ Instagram Feed -------*/

var feed = new Instafeed({
    sortBy: 'most-liked',     
    get: 'user',
    userId: '5924386181',
    clientId: '90340c12210a4e74a33c0afc211ce464',
    accessToken: '5924386181.90340c1.ce0d34207b0045c2a9dc5c767dd5856a',
    resolution: 'low_resolution',
    template: '<a href="{{link}}"><img src="{{image}}"></a>'
});
feed.run();

// ------- MODAL FORM JS ----------------------

const modal = document.getElementById('simpleModal');
const closeBtn = document.querySelector('span.closeBtn');

document.body.addEventListener('click', openModal);
function openModal(e){
  if(e.target.classList.contains('modal-open')){
    modal.style.display = "block";
    closeSlideMenu();
  }
}

closeBtn.addEventListener('click', closeModal);
function closeModal(){
  modal.style.display = "none";
}
window.addEventListener('click', clickOutside);
function clickOutside(e){
  if(e.target == modal){
  modal.style.display = "none";
  }
}

// ------------ Side Menu --------

// const openBtn = document.getElementById('open-menu');
const closeSMBtn = document.getElementById('close-menu');
const slideMenu = document.getElementById('slide-menu');

document.addEventListener('click', openSlideMenu);
closeSMBtn.addEventListener('click', closeSlideMenu);


function openSlideMenu(e){
  if(e.target.parentElement.classList.contains('open-menu')){
    slideMenu.style.display = "block";
  }
  
}
function closeSlideMenu(){
  slideMenu.style.display = "none"; 
}

// // FORM ALERT converted to vanilla JS
document.getElementById('contact-form').addEventListener('submit', submitForm);



function submitForm(e){

  e.preventDefault();

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  let rawData = {
    name:name,
    email:email,
    comments:message,
    _subject:'MikaTheWhippet.com form Submission'
  }
  data = JSON.stringify(rawData)
  console.log(data);
  let formSend = new XMLHttpRequest();
  formSend.open('POST', 'https://formspree.io/mika.whippet@gmail.com', true);
  formSend.setRequestHeader('Content-type', 'application/json');
  formSend.send(data);

  document.querySelector('.alert').style.display = "block";
  document.getElementById('contact-form').reset();
}

// ------Ajax submit using jQuery from formspree example -----

// $(document).ready(function() {

//   $('#contact-form').on('submit', function submitform(e){
//     e.preventDefault();
//     var name = $('#name').val();
//     var email = $('#email').val();
//     var comments = $('#message').val();
//     $.ajax({
//         url:'https://formspree.io/mika.whippet@gmail.com',
//         method:'POST',
//         data:{
//             name:name,
//             email:email,
//             comments:comments,
//             _subject:'My Form Submission',
//         },
//         dataType:"json", 
  
//     }); 
//     $('.alert').css('display','block');
//     $('#contact-form').trigger("reset");
// });


// });