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
  var now = new Date();
  var target = new Date("Jan 5 2013 16:00");
  var days = (target - now) / 1000 / 60 / 60 / 24;
  var daysRound = Math.floor(days);
  if (daysRound > 0) {
    $('.missing').html(' - faltam ' + daysRound + ' dias!');
  }
  else {
    $('.missing').html(' - já se passaram ' + daysRound + ' dias!');
  }

  
  var url = window.location.href.replace(/#.*/, '');
  HandleResize();
  if (window.innerWidth > 500) {
    var offset = -50;
  }
  else {
    var offset = -20;
  }
  $.localScroll({'offset': offset, 'margin': false, 'hash': true});
  $(window).resize(HandleResize);
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
  $('.presentes-link').click(function(e) {
    var obs = $("#presentes .obs");
    if (!$(obs).hasClass('hidden')) {
      $(obs).addClass('hidden').slideUp();
    }
    else {
      $(obs).removeClass('hidden').slideDown().parent().mouseleave(function(e) {
        $('.obs', this).delay(800).addClass('hidden').slideUp();
      }).mouseenter(function(e) {
        $('.obs', this).clearQueue();
      });
    }
    return false;
  });
  function HandleResize() {
    var wwidth = window.innerWidth;
    var defheight = 600;
    $('body').removeClass('netbook');
    $('body').removeClass('tablet');
    $('body').removeClass('mobile');
    $('body').removeClass('mobile-small');
    if (wwidth > 1024) {
    }
    if (wwidth <= 1024) {
      $('body').addClass('netbook');
      defheight = 400;
    }
    if (wwidth <= 800) {
      $('body').addClass('tablet');
      defheight = 300;
    }
    if (wwidth <= 500) {
      $('body').addClass('mobile');
      defheight = 500;
      offset = -20;
    }
    if (wwidth < 480) {
      $('body').addClass('mobile-small');
    }
    $(".page").each(function() {
      $(this).css('height', 'auto');
      var height = Math.max(defheight,window.innerHeight - 50,$(this).height());
      $(this).height(height);
    });
  }
  var gallery = $('body:not(.mobile) #thumbs').galleriffic({
    imageContainerSel: '#slideshow',
    numThumbs: 40
  });
});
