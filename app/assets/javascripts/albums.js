// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

function showImageAlbum() {
  if (this.files && this.files[0]) {
    for (var i = 0; i < this.files.length; i++) {
      var reader = new FileReader();
      reader.onload = function(data){
      $('.images').prepend('<div class="float-left mt-2 mr-1"><div ng-repeat="file in imagefinaldata" class="img_wrp"><img src="' + data.target.result + '" class="sizeMyPhotos" alt="" /><img class="btnCloseA m-1" src="/assets/close.png" onclick="clickCloseA.call(this)"style="width:30px;height: 30px;" /></div></div>');
      };
      reader.readAsDataURL(this.files[i]);
    }
  }
};

function clickCloseA(){
  $(this).parent().parent().remove();
};