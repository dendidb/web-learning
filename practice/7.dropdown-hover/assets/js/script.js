// var Dropdown = {

//   handleClick: function() {
//     $(document).on('click', function(e){
//       Dropdown.handleHide(e);
//     })  
//   },

//   handleHide: function (e){
//     Dropdown.hanldeCheckHide(e,'dd-p-1', 'nav-link-1', 'dd-d-1');
//     Dropdown.hanldeCheckHide(e,'dd-p-2', 'nav-link-2', 'dd-d-2');
//   },

//   hanldeCheckHide: function(e,parent, element, child){
//     if(Dropdown.handleCheckClass(e,parent, element, child)){
//       $('.'+child).slideDown();
//     }else{
//       $('.'+child).slideUp();
//     }
//   },
  
//   handleCheckClass: function(e, parent, element, child){
//     return e.target.classList.contains(parent) || e.target.classList.contains(child) || e.target.classList.contains(element);
//   }, 

//   init: function() {
//     Dropdown.handleClick();
//   }
// }

var Dropdown2 = {

  handleClick: function(){
    $(document).on('click', function(e){
      Dropdown2.handleHide(e)
    });


    $('.dd-p').on('click', function(){
      if($(this).siblings().hasClass('dd-d-1')){
        Dropdown2.handldeRemoveClass('.dd-d-2')
        Dropdown2.handleCondition($(this))
      }else if($(this).siblings().hasClass('dd-d-2')){
        Dropdown2.handldeRemoveClass('.dd-d-1')
        Dropdown2.handleCondition($(this))
      }
    })  
    
    $('.dd-p').on('click', function(e){
      e.stopPropagation();
    })
  },

  handldeRemoveClass: function(el){
      $(el).removeClass('show');
      $(el).slideUp();
  },

  handleCondition: function(el){
    if($(el).siblings().hasClass('show')){
      $(el).siblings().slideUp()
      $(el).siblings().removeClass('show');
    }else{
      $(el).siblings().slideDown()
      $(el).siblings().addClass('show');
    }
  },

  handleHide: function(e){
    if($('.drop-d').hasClass('show')){
      $('.drop-d').slideUp();
      $('.drop-d').removeClass('show');
    }
  },

  init: function(){
    Dropdown2.handleClick();
  }
}


var Toast = {
  
  handleShow: function() {
    $(window).on('load', function(){ 
      setTimeout(() => {
        $('.toast').slideDown(400);
      } , 1000);
    });
  },

  handleHide: function() {
    $('.btn-cookies').on('click', function(){
      $('.toast').slideUp(400);
    });
  },
  init: function() {
    Toast.handleShow();
    Toast.handleHide();
  },
}


// Dropdown.init();
Dropdown2.init();
Toast.init();