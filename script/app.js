$(document).ready(function() {

    var $header = $('header');

    var $sticky = $header.before($header.clone().addClass("sticky"));

    $(window).on("scroll", function(){
      var scrollFromTop = $(window).scrollTop();
      $("body").toggleClass("scroll", (scrollFromTop > 250));

    });

});

let scene = document.getElementById('scene');
let parallax = new Parallax(scene);

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

// MODAL FORM JS

const modal = document.getElementById('simpleModal');
const closeBtn = document.querySelector('span.closeBtn');

document.body.addEventListener('click', openModal);
function openModal(e){
  if(e.target.classList.contains('modal-open')){
    modal.style.display = "block";
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