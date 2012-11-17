//var urls = [
//'http://farm7.static.flickr.com/6089/6059010802_436cefa521_z.jpg',
//'http://farm7.static.flickr.com/6088/6065742147_3d62b32deb_z.jpg',
//'http://farm7.static.flickr.com/6197/6065590914_ab1acccf87_z.jpg',
//'http://farm7.static.flickr.com/6081/6066708246_e1d9a812ed.jpg',
//'http://farm7.static.flickr.com/6066/6063442584_feb03a88d8.jpg'
//];
//window.App = new AppView
//window.App.render()
//

$(document).ready(function () {
  $.localScroll({'offset': -50, 'margin': false});
  var url = window.location.href.replace(/#.*/, '');
  $(".page").each(function() {
    var height = Math.max(600,window.innerHeight - 50);
    $(this).height(height);
  });
  $(".menu a").each(function() {
    var target = $(this).attr('href');
    var element = $('a[name=' + target.replace('#', '') + ']');
    $(this).data('target_height', element.parent()[0].offsetTop);
  });
  $(window).scroll(function(e) {
    var scroll = $(document).scrollTop();
    $(".menu a").each(function() {
      if ($(this).data('target_height') - 100 <= scroll && $(this).data('target_height') + 600 >= scroll) {
        $(this).addClass('active');
      }
      else {
        $(this).removeClass('active');
      }
    });
  });
});
