
var sideNavMore = {
  init: function(){
    $("li.footer-nav-list  > ul > li > a").each(function(){
     if( window.location.origin + $(this).attr('href') === window.location.href || $(this).attr('href') == window.location.href  ){
        $(this).parent().parent().parent().addClass("active");
       $(this).addClass("this");
      }
    }); 

  }
}

 var reSize = {
    init: function() {
      var self;
      self = this;
      $(window).load(function() {
        return self.reSize();
      });
      return $(window).resize(self.reSize);
    },
    reSize: function() {

      /*
       * resize--middle
       * $('.resize--middle').each (index, elem) ->
       *   _elem = $(elem)
       *   _elem.css 'margin-top' , '-' + (_elem.height()/2) + 'px'
       */

      /* resize--center */
      $('.resize--center').each(function(index, elem) {
        var _elem;
        _elem = $(elem);
        return _elem.css('margin-left', '-' + (_elem.width() / 2) + 'px');
      });

      /* resize--line */
      return $('.resize--line').each(function(index, elem) {
        var _elem;
        _elem = $(elem);
        return _elem.css('line-height', _elem.height() + 'px');
      });
    }
  };



var indexLoader = {
init : function(){  
    $(function() {
    var h = $(window).height();
    $('#loader-wrapper').height(h).css('display','block');
});
  
  $(function() {
  $('#loader-wrapper').delay(1500).fadeOut(500); 
});
}}; 


var skuSelect = {
  skuResHtml: '<span class="pro-detail-sub-each-select-res">:<em></em></span><i class="fontuetop select_icon">&#xE80C;</i>',
  init: function(jssdk){
    var self = this;
    $('.pro-detail-sub-each').each(function(){
      $(this).find('h3').append(self.skuResHtml).click(function(event){
        $('.pro-detail-sub-each-wrap').not($(this).next('.pro-detail-sub-each-wrap')).hide();
        $(this).nextAll('.yhsd-variantSelector-err').hide();
        $(this).next('.pro-detail-sub-each-wrap').toggle(0);
        event.stopPropagation();
      });
    });
    $(document).click(function(){
      $('.pro-detail-sub-each-wrap').hide();
    });
    $('.pro-detail-sub-each-wrap a').on('click',function(){
      setTimeout(function(){
        self.selectSku();
      })
    });
    //
    var $weightEl = $("#yhsd-variant-weight");
    var $descNew = $("#descNew");
    var variants = {}, i;
    for(i = 0; i < window.CurrentProduct.variants.length; i++) {
      variants[window.CurrentProduct.variants[i].id] = window.CurrentProduct.variants[i];
    }
    jssdk.events.subscribe('variantSelector.changed', function(data) {
      $weightEl.text((variants[data.id].weight / 10000).toFixed(1));
      var descs = variants[data.id].barcode;
      if( descs != '' ){
        $descNew.html(descs);
      }else{
        $descNew.html('');
      }
    });
    self.selectSku();
  },
  selectSku: function(){
    $('.pro-detail-sub-each').each(function(){
      var $res = $(this).find('.pro-detail-sub-each-select-res em');
      var $skuBtn = $(this).find('.pro-detail-sub-each-wrap a');
      var nRes = 'æœªé€‰æ‹©';
      $skuBtn.each(function(){
        if($(this).hasClass('selected')){
          nRes = $(this).attr('data-option-value');
        }
      });
      $res.html(nRes);
    });
  }
}

var cartFix = function() {
    yhsd.ready(function(sdk) {
      var _elem = $('#yhsd_topCart_quantityTitle');
      var _elemP = $('#yhsd_topCart_show');
      sdk.events.subscribe('flashMainCart', function(event){
        if (_elem.html() === '0') {
          _elemP.removeClass('total_active');
        } else {
          _elemP.addClass('total_active');
        }
      });
    });
  };


    var ua = window.navigator.userAgent
    var env = {
  isMobi: /mobile/i.test(ua),
  isIOS: /(iphone|ipad)/i.test(ua),
  isAndroid: /android/i.test(ua),
  isWeChat: /micromessenger/i.test(ua),
  isMiniProgram: /miniprogram/i.test(ua),
  isSafari: /safari/i.test(ua)
    }

  env.isWeApp = env.isWeChat && env.isMiniProgram


var sideNav = {
    init: function() {
      var _body, _eItem, _elem, _html, _main, _nav, _side, _sideFilm, navMenuFn, stopScrollFn, stopTouchmoveFn, toggle, searchFn,cartFn,buybtnFn,filterFn,mb_kfFn;

      var ref = location.hash
      var linkID = ref != null ? ref.replace(/^\#[\/]*/, '') : '';

      _html = $('html');
      _body = $('body');
      _main = $('.main');
      _side = $('.side');
      _sideFilm = $('#side_film');
      _nav = $('.nav');
         
      /* ç§»åŠ¨ç«¯ä¾§è¾¹å¯¼èˆªå¼¹å‡ºé˜»æ­¢è§¦æ‘¸æ»šåŠ¨å‡½æ•° */
        stopTouchmoveFn = function(e) {
        if (_html.hasClass('side_active4')) {
          return e.preventDefault();
        }
      };
      stopScrollFn = function(e) {
        return false;
      };

      mb_kfFn = function() {
        if (_html.hasClass('side_active4')) {
          _html.removeClass('side_active4');
          return _sideFilm[0].removeEventListener('touchmove', stopTouchmoveFn);
        } else {
          _html.addClass('side_active4');
          return _sideFilm[0].addEventListener('touchmove', stopTouchmoveFn);
        }
      };

      $('#kf_mask2,#kf_close,#kf_mask,#show_weixin_kf').click(mb_kfFn);
      
        $("#mb_kf,#mbkf_pro").click(function(){
          if (env.isWeApp) {
         (((window.wx || {}).miniProgram || {}).navigateTo || function () {})({
           url: '/pages/contact/index'
          })} else {
         if (_html.hasClass('side_active4')) {
          _html.removeClass('side_active4');
        } else {
          _html.addClass('side_active4');

        }
          }});
      
        stopTouchmoveFn = function(e) {
        if (_html.hasClass('side_active3')) {
          return e.preventDefault();
        }
      };
      stopScrollFn = function(e) {
        return false;
      };

      filterFn = function() {
        if (_html.hasClass('side_active3')) {
          _html.removeClass('side_active3');
          return _sideFilm[0].removeEventListener('touchmove', stopTouchmoveFn);
        } else {
          _html.addClass('side_active3');
          return _sideFilm[0].addEventListener('touchmove', stopTouchmoveFn);
        }
      };

      $('#prolist-filter_pc').click(filterFn);
       $('#close_filter_pc').click(filterFn);
      $('#filter_film_pc').click(filterFn);
      
      
      stopTouchmoveFn = function(e) {
        if (_html.hasClass('side_active')) {
          return e.preventDefault();
        }
      };
      stopScrollFn = function(e) {
        return false;
      };

         navMenuFn = function() {
        if (_html.hasClass('side_active')) {
          _html.removeClass('side_active');

        } else {
          _html.addClass('side_active');

        }
      };

    $('#nav-menu,#main-menu-close,#img_zoom_click,#img_zoom_click0,#img_zoom_click1,#img_zoom_click2,#img_zoom_click3,#img_zoom_click4,#img_zoom_click5,#img_zoom_click6,#img_zoom_click7,#img_zoom_click8,#img_zoom_click9,#img_zoom_click10,#img_zoom_click11,#img_zoom_click12,#img_zoom_click13,#img_zoom_click14,#img_zoom_click15,#img_zoom_click16').click(navMenuFn);
      
      
        stopTouchmoveFn = function(e) {
        if (_html.hasClass('search_active')) {
          return e.preventDefault();
        }
      };
      stopScrollFn = function(e) {
        return false;
      };

      searchFn = function() {
        if (_html.hasClass('search_active')) {
          _html.removeClass('search_active');
         
        } else {
          _html.addClass('search_active');
       
        }
      };

      $('#search_button').click(searchFn)
      $('#side_film').click(searchFn)
      $('#search_close').click(searchFn)
      
      
      stopTouchmoveFn = function(e) {
     if (_html.hasClass('buybtn_active')) {
          return e.preventDefault();
        }
      };
      stopScrollFn = function(e) {
        return false;
      };

      buybtnFn = function() {
        if (_html.hasClass('buybtn_active')) {
          _html.removeClass('buybtn_active');
         
        } else {
          _html.addClass('buybtn_active');
       
        }
      };

      $('#yhsd_variantSelector_addCart').click(buybtnFn)
      $('#yhsd_variantSelector_addSuccClose').click(buybtnFn)
      $('#buybtn_film').click(buybtnFn)
      
      
    }
  };

 var invisible = {
  init: function(name,position){
    var self = this;
    var w_h = $(window).height();
    $(name).each(function(){

      var o_h = this.getBoundingClientRect().top;
      if( o_h < w_h/position ){
        $(this).addClass('show');
      }else{
        //$(this).removeClass('show');
      }
    });
  }
}; 


// ä¸‹æ‹‰å­èœå•ï¼ˆå«ä¸‰çº§ï¼‰
var Multimenu = {
  mainLink : $('#top-nav-link>li'),
  subLink : $('.nav-sublink'),
  init : function(){
    var self = this;
    self.mainLink.on('mouseenter', function(e){
      $(e.currentTarget).addClass('active');
    });
    self.mainLink.on('mouseleave', function(e){
      $(e.currentTarget).removeClass('active');
    });
  }
};

// é¡¶éƒ¨æœç´¢
var TopSearch = {
  ico : $('#yhsd-header-search'),
  ipt : $('#yhsd-header-search-ipt'),
  init : function(){
    var self = this;
    var oIpt = self.ipt.find('input');
    //
    var sWidth = "200px";
    //
    if(bIsMobile){
      sWidth = '30%';
    }
    self.ico.on('click', function(){
      oIpt.focus();
      self.ipt.animate({
        'opacity' : 1,
        'width' : sWidth
      }, 200);
    });
    //
    oIpt.on('blur', function(){
      self.ipt.animate({
        'opacity' : 0,
        'width' : '0px'
      }, 200);
    });
  }
};


// èŽ·å–å½“å‰é¡¾å®¢ä¿¡æ¯
var Account = {
  current: function() {
    yhsd.ready(function(sdk) {
      sdk.account.current(function(data){
        if(data.res.customer) {
          window.$account = data.res.customer
          tpl1 = '<a id="customer-item1" class="header-link settings-top_color" href="/account">' + data.res.customer.name + '</a>';
          tpl2 = '<a id="customer-item2" class="header-link settings-top_color" href="/account/logout">é€€å‡º</a>';
          $('#customer-item1').replaceWith(tpl1);
          $('#customer-item2').replaceWith(tpl2);
          
          tpl3 = '<a id="customer-item3" class="header-link settings-top_color" href="/account">' + data.res.customer.name + '</a>';
          tpl4 = '<a id="customer-item4" class="header-link settings-top_color" href="/account/logout">é€€å‡º</a>';
          $('#customer-item3').replaceWith(tpl3);
          $('#customer-item4').replaceWith(tpl4);
          tpl5 = '<a id="customer-item5" class="header-link settings-top_color" href="/account">' + data.res.customer.name + '</a>';
          tpl6 = '<a id="customer-item6" class="header-link settings-top_color" href="/account/logout">é€€å‡º</a>';
          $('#customer-item5').replaceWith(tpl5);
          $('#customer-item6').replaceWith(tpl6);
        }
      });
    });
  }
}

// æ©±çª—æŒ‰é’®
var GalleryControl = {
    init: function(PCDir, MobiDir){
        // 0: horizontal
        // 1: vertical
        var PCDir = PCDir || 0,
            MobiDir = MobiDir || 0,
            self = this;

        if (self.isMobileQuery()) {
            self.act(MobiDir);
        } else {
            self.act(PCDir);
        }
        $(window).on('resize',function(){
            $('.pro-detail-gallery-list-btns').remove();

            if (self.isMobileQuery()) {
                self.act(MobiDir);
            } else {
                self.act(PCDir);
            }
        })
    },
    act: function(direction) {
        var $oMain = $('.pro-detail-gallery-main'),
            $oList = $('.pro-detail-gallery-list'),
            $oListA = $oList.children('a'),
            $oMainLength,
            $oListALength,
            nAdmissibleNumber,
            $visibleOListA = $('.pro-detail-gallery-list a:visible');


        if (direction){
            //åž‚ç›´
            $oMainLength = $oMain.outerHeight(),
            $oListALength = $visibleOListA.outerHeight();

            var $oListAMarginTop = parseInt($visibleOListA.css('marginTop')),
                $oListAMarginBottom = parseInt($visibleOListA.css('marginBottom')),
                $oListAMargin = $oListAMarginTop >= $oListAMarginBottom ? $oListAMarginTop : $oListAMarginBottom;

            $oListALength += $oListAMargin;

            // åˆ›å»ºæŒ‰é’®
            var prevBtnHtml = "<span class='pro-detail-gallery-list-btns pro-detail-gallery-list-prev'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAYCAMAAADJYP15AAAAaVBMVEUAAADd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0srH8VAAAAInRSTlMAa/qknZVQEebaqoN6dUEG9O/OycCwqZCJcmZfWlg0JR0LSn3EmAAAAGdJREFUeAHNyFcOgzAURcFjG1MgIb33u/9FRonAMnobYD6HOQpNhRXX9dZ+ob6qm4/ZEt6b3Ypc/C28/D7/sx78PXUg6XRj0CswWOhKUuo0riNzVwfgtGTCyUHh044uPnJsMdrAbHwB2LEEgfxPpdIAAAAASUVORK5CYII='></span>";
            var nextBtnHtml = "<span class='pro-detail-gallery-list-btns pro-detail-gallery-list-next'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAYCAMAAADJYP15AAAAXVBMVEUAAADd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0Zwd5uAAAAHnRSTlMAmvdwlodWEebXpXtiT0DvzsnAsZFral4xJR0LBgNNpSo0AAAAZklEQVQYGc3Bhw2DQBREwfcvcGTnbG//ZRohhA5ogBn2wwIbZpjzrHhncJNnoZVn0OhOplBk1Khl1unKJOrBpFfNLKpg9NSFTFDB4OXOP3KmDt6H05clU5/K6sNacOUxsVVXif35A/suA8gBF9MzAAAAAElFTkSuQmCC'></span>";
        } else {
            // æ°´å¹³
            $oMainLength = $oMain.outerWidth(),
            $oListALength = $visibleOListA.outerWidth();

            var $oListAMarginLeft = parseInt($visibleOListA.css('marginLeft')),
                $oListAMarginRight = parseInt($visibleOListA.css('marginRight')),
                $oListAMargin = $oListAMarginLeft + $oListAMarginRight;

            $oListALength += $oListAMargin;

            // åˆ›å»ºæŒ‰é’®
            var prevBtnHtml = "<span class='pro-detail-gallery-list-btns pro-detail-gallery-list-prev'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAMAAADto6y6AAAAhFBMVEUAAAD////m5ubn5+fl5eX////7+/v////g4ODs7Ozm5ubq6urj4+Pu7u7p6enn5+f////o6Ojq6urq6uri4uLu7u7v7+/s7Ozm5ubk5OTs7Ozp6enk5OTr6+v09PTx8fHn5+f19fX7+/v19fX39/fs7Oz////39/fg4ODe3t7i4uLl5eWLEt5aAAAAKHRSTlMACOHQmBgMBPjq3banmHlvHebe1tbOxsbGtrWYj46GhIRpXE40LxISbdyzUwAAAHdJREFUGBltwUUSwzAQBMARWWY7zEy78v//l6oco+nGP9eCOogF47UxyIWjbiJyodKVQe49132BXLHQHoRxcgURt3ICYXbSgamlAzWlJ6hbKl+gHlN5BnW36QKqWEoP6lPLACrMdDBgxkrWEczotTGgvFhwrsXPF510Bw9yKdQgAAAAAElFTkSuQmCC'></span>";
            var nextBtnHtml = "<span class='pro-detail-gallery-list-btns pro-detail-gallery-list-next'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAMAAADto6y6AAAAY1BMVEUAAADd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0qoXkoAAAAIHRSTlMA+aeTjXluUxgG2JiFaFrv7ubhybyvnp1zZExCQTQmDuORh7IAAABjSURBVBgZbcFFEgMxAAPBMa69FGbS/1+ZQ24pdfOTMl4MN7yiildU8KpmvEUZb9WEN+iCN+iMN2jCe4SI1XcbnLYfG8Z7OzaMVzh8MJ46doy7Th1jVcRZlHCumnFiqFgp8+cLSYwEKlrmUqgAAAAASUVORK5CYII='></span>";
        }

        // å¯å®¹çº³çš„æ•°é‡
        nAdmissibleNumber = parseInt($oMainLength / $oListALength);
        // åˆå§‹åŒ–æ˜¾ç¤º
        $oList.find('.hidden').removeClass('hidden');

        // æ©±çª—å›¾ç‰‡æ•°é‡ä¸è¶³æ—¶è¿”å›ž
        if ($oListA.size() <= nAdmissibleNumber) return;
        // å¤šä½™çš„å›¾ç‰‡éšè—
        var selector = 'a:gt(' + (nAdmissibleNumber - 1) + ')';
        $oList.children(selector).addClass('hidden');

        $oList.prepend(prevBtnHtml);
        $oList.append(nextBtnHtml);

        var $prevBtn = $('.pro-detail-gallery-list-prev');
        var $nextBtn = $('.pro-detail-gallery-list-next');

        $nextBtn.click(function() {
            $visibleOListA = $('.pro-detail-gallery-list a:visible');

            var $lastVisibleOListA = $visibleOListA.last(),
                $firstVisibleOListA = $visibleOListA.first();

            if ($oListA.index($lastVisibleOListA) == $oListA.size()-1) return;

            $firstVisibleOListA.addClass('hidden');
            $lastVisibleOListA.next('a').removeClass('hidden');

        })

        $prevBtn.click(function() {
            $visibleOListA = $('.pro-detail-gallery-list a:visible')

            var $lastVisibleOListA = $visibleOListA.last(),
                $firstVisibleOListA = $visibleOListA.first();

            if ($oListA.index($firstVisibleOListA) == 0) return;

            $firstVisibleOListA.prev('a').removeClass('hidden');
            $lastVisibleOListA.addClass('hidden');

        })
    },
    isMobileQuery: function() {
        var isMatch = false;

        if(window && window.matchMedia) {
            isMatch = window.matchMedia("screen and (max-width: 768px)").matches;
        }

        return isMatch;
    }
}

// æ–‡ç« åˆ—è¡¨
var postList = {
  init: function() {
    var $dirlist = $('#post-dirs-list');
    var $arrow = $dirlist.find('.post-dir-btn');
    $arrow.on('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      var $tar = $(e.currentTarget);
      var $next = $tar.parent().next();
      if($tar.hasClass('dir_off')) {
        $tar.removeClass('dir_off');
        $next.slideDown();
      } else {
        $tar.addClass('dir_off');
        $next.slideUp();
      }
    });
  }
};

var postDetail = {
  _post_count: 4,
  rePostTpl: '<a href="/posts/#{handle}" class="post-re-each settings-main_border settings-text_color"><span class="post-re-each-dot"></span>#{title}</a>',
  init: function() {
    var self = this;
    var $recentPostList = $('#post-re-list');
    yhsd.ready(function(jssdk) {
      jssdk.post.get({
        size: self._post_count + 1
      }, function(data) {
        var listInner = '';
        var rePostTpl = self.rePostTpl;
        var currentHandle = location.pathname.slice(7);
        if(data.res.code === 200 && data.res.posts.length > 1) {
          var posts = data.res.posts, i;
          for(i = 0; i < posts.length; i++) {
            // ä¸æ˜¾ç¤ºå½“å‰æ–‡ç« 
            if(posts[i].handle != currentHandle) {
              listInner += rePostTpl.replace(/#{handle}/, posts[i].handle)
                .replace(/#{title}/, posts[i].title);
            }
          }
        } else {
          listInner = '<div class="post-re-list-tip settings-desc_color">æš‚æ— å†…å®¹</div>';
        }
        $recentPostList.html(listInner);
      });
    });
  }
}

                                                                                                                        
var PostLoad = {
    PostEach:$('.posts-item '),
    init:function(){
        var self = this;
        self.PostEach.each(function(i){
            var that = this;
            setTimeout(function(){
                $(that).addClass('animated');
            },i*100)
            
        })
    }
} 
  

  
// Start Function
$(document).ready(function(){
  bIsMobile = $('body').hasClass('is_mobile');
  var oRouteCustom = {};
  oRouteCustom['all'] = function(path){
    invisible.init('.justhidden',1);   
    $(window).scroll(function(){
      invisible.init('.justhidden',1.2);
    });  
    reSize.init();
    sideNav.init();
    sideNavMore.init();
    Multimenu.init();
    TopSearch.init();
    Account.current();
    
  };
  
     oRouteCustom['index'] = function(path) {         
     indexLoader.init();    
     }
  
  oRouteCustom['productDetail'] = function(path){
    GalleryControl.init(1,0); 
     yhsd.ready(function(jssdk){
        skuSelect.init(jssdk);
      });
   
  };
    oRouteCustom['postAll'] = function(path) {
    PostLoad.init();
    postList.init();
  };
     
  oRouteCustom['postDetail'] = function(path) {
    postDetail.init();
   
    
  };
  $yhsd.route.init(oRouteCustom);
});

cartFix();

function goBack(){
  document.referrer === '' ?
          window.location.href = '/' :
          window.history.go(-1);
 };

$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.footer-nav-active');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.footer_submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#main_menu,#bottom_menu'), false);

   
});


    jQuery(document).ready(function(){     	
	$("#show_weixin_mb2").hover(function(){
		$("#weixin_service_mb").stop(true).css({opacity:0}).show().animate({opacity:1});
	},function(){
		$("#weixin_service_mb").stop(true).animate({opacity:0},function(){
			$("#weixin_service_mb").hide();	
		});
	});
    
    })

jQuery.cookie = function(name, value, options) { 
      if (typeof value != 'undefined') { 
                options = options || {}; 
                if (value === null) { 
                          value = ''; 
                          options = $.extend({}, options); 
                          options.expires = -1; 
                } 
                var expires = ''; 
                if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) { 
                          var date; 
                          if (typeof options.expires == 'number') { 
                                    date = new Date(); 
                                    date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
                          } else { 
                                    date = options.expires; 
                          } 
                          expires = '; expires=' + date.toUTCString(); 
                } 
                var path = options.path ? '; path=' + (options.path) : ''; 
                var domain = options.domain ? '; domain=' + (options.domain) : ''; 
                var secure = options.secure ? '; secure' : ''; 
                document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join(''); 
      } else { 
                var cookieValue = null; 
                if (document.cookie && document.cookie != '') { 
                          var cookies = document.cookie.split(';'); 
                          for (var i = 0; i < cookies.length; i++) { 
                                    var cookie = jQuery.trim(cookies[i]); 
                                    if (cookie.substring(0, name.length + 1) == (name + '=')) { 
                                              cookieValue = decodeURIComponent(cookie.substring(name.length + 1)); 
                                              break; 
                                    } 
                          } 
                } 
                return cookieValue; 
      } 
}; 