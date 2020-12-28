window.bIsMobile = false;
 
var insertVariant = {
    selectedOptions : '',
    selectedVariant : '',
    currentVariantId : 0,
    init : function(product){
        var self = this;
        if(Jssdk.util.getCookie(product.handle)) {
            currentVariantId = Jssdk.util.getCookie(product.handle);
        }else{
        	self.subVariantText(product, product.variants[product.variants.length-1].options);
            return;
        }
        self.selectedVariant = new $yhsd.SkuManager(product, currentVariantId).selectedOptions;
        self.getVariantText(product);
    },
    getVariantText : function(product){
        this.selectedOptions = '';
        for(var i = 0, len = product.options.length; i<len; i++){
            this.selectedOptions += product.options[i].name+':'+this.selectedVariant[i]+' ';
        }
        return this.insertVariant();
    },
    subVariantText : function(product, variant){
        this.selectedOptions = '';
        for(var i = 0, len = product.options.length; i<len; i++){
            this.selectedOptions += product.options[i].name+':'+variant[i].option_value+' ';
        }
        return this.insertVariant();
    },
    insertVariant : function(){
        $('#change_option .settings-pro_selected_option').text(this.selectedOptions);
    }
};

var post_nav = {
  init: function(){
    $(".post_nav_li > a").each(function(){
     if( window.location.origin + $(this).attr('href') === window.location.href || $(this).attr('href') == window.location.href  ){
        $(this).parent().addClass("active");
       $(this).addClass("this");
      }
    })
  }}
var indexLoader = {
init : function(){  
$(function(){    
  $('#loader-wrapper').delay(1500).fadeOut(200);
})}}; 

var pastNotice = {
    head : $('body'),
    init : function(){
       var self = this;        
       var top = '45';           
        self.toggle( $(document).scrollTop()>top );
        $(window).bind("scroll", function(){
            self.toggle( $(document).scrollTop()>top );
        });
                                                                                              
    },
   
    toggle : function(isScroll){
        isScroll ? this.head.addClass('is-past-notice') : this.head.removeClass('is-past-notice');      
    }  
};

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

      /* resize--line */
      return $('.resize--line').each(function(index, elem) {
        var _elem;
        _elem = $(elem);
        return _elem.css('line-height', _elem.height() + 'px');
      });
    }
  };

var Multimenu = {
  mainLink : $('.submenu__li'),
  subLink : $('.submenu__wrap'),
  init : function(){
    var self = this;
    var logo_width= $('.header__logo').outerWidth();
    self.mainLink.on('mouseenter', function(e){
      $(e.currentTarget).addClass('is-active');
    });
    self.mainLink.on('mouseleave', function(e){
      $(e.currentTarget).removeClass('is-active');
    });
    
     $(".submenu__inner").css({ 'padding-left':logo_width+75,});
     
  }
};

var layoutPopContrl = {
  $layoutPop: $("#layoutPop"),
  $layoutCont: $("#layoutCont"),
  $layoutMask: $("#layoutMask"),
  open: function(content,_class,cb){
    var self = this;
    self.$layoutCont.addClass(_class).html(content);
    self.$layoutPop.fadeIn(200,function(){
      if (cb) {cb();}
    });
  },
  close: function(){
    var self = this;
    self.$layoutCont.removeClass().html("");
    self.$layoutPop.fadeOut();
  },
  initWechat: function(){
    var self = this;
    var $btn = $(".wechat-service");
    var html = '<div id="wechatPop" class="wechatPop"><img src="//asset.ibanquan.com/s/119892/0/weixin/s_w420.jpg?design_theme_id=0&v=1595211351_1595211351"></div>';
    $btn.click(function(){
      layoutPopContrl.open(html,'wechatPopWrap',null);
    })
  },
  initSearch: function(){
    var self = this;
    var $btn = $("#searchBtn");
    var html = '<div id="searchPop" class="searchPop"><input name="terms" type="text" placeholder="" autocomplete="off"><div id="searchSubmit" class="searchPop-submit"><i class="icon-angelchen icon-angelchenicon-2">æœç´¢</i></div></div>';
    function search(){
      $("#searchSubmit").click(function(){
        var terms = $("#searchPop input").val();
        if(terms){
          window.location.href = '/search?terms=' + terms;
        }
      });
      $('#searchPop input').bind('keyup', function(event) {
        if (event.keyCode == "13") {
          //å›žè½¦æ‰§è¡ŒæŸ¥è¯¢
          var terms = $("#searchPop input").val();
          if(terms){
            window.location.href = '/search?terms=' + terms;
          }
        }
      });
    }
    $btn.click(function(){
      layoutPopContrl.open(html,'searchPopWrap',search);
      $('#searchPop input').focus();
    })
  },
  init: function(){
    var self = this;
    // æœç´¢å¼¹çª—
    self.initSearch();
    // å¾®ä¿¡å¼¹çª—
    self.initWechat();
    self.$layoutMask.click(function(){
      self.close();
    })
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

  var skuSelect = {
  skuResHtml: '<span class="pro-detail-sub-each-select-res">:<em></em></span>',
  init: function(jssdk){     
     
    
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
};


var touchevents = {
init : function(){  
  
$(function(){    
    if (window.screen.width >1024) { 
  $('html').addClass('no-touchevents');
  }
  else
    $('html').addClass('touchevents');
})

}}; 
  
var invisible = {
  init: function(name,position){
    var self = this;
    var w_h = $(window).height();
    $(name).each(function(){

      var o_h = this.getBoundingClientRect().top;
      if( o_h < w_h/position ){
        $(this).addClass('is-in-view');
      }else{
        //$(this).removeClass('is-in-view');
      }
    });
  }
}; 
  



// JS SDK
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
        }
      });
    });
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
  _post_count: 5,
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

// Start Function
$(document).ready(function(){
   function addRightNow(sType) {
        var handleProduct = function (PRODUCT, sType) {
            if (!PRODUCT) {
                return
            }
            var oPro = {
                variant_id: PRODUCT.variants[0].id,
                is_check: true,
                quantity: 1
            };
            var _product = {};
            var variants;
            var selectedOption;
            var currentVariant;
            var skuManager = new $yhsd.SkuManager(PRODUCT, PRODUCT.variants[PRODUCT.variants.length-1].id);
            
            skuManager.get(function (options, selectedVariant) {
            	_product.options = options;
                currentVariant = selectedVariant;
                checkSelected();
                renderPop();
            });
            function checkSelected() {
                if (currentVariant) {
                    currentVariant.feature_image ? _product.img = currentVariant.feature_image.src : _product.img = PRODUCT.feature_image.src;
                    _product.stock = currentVariant.stock;
                    _product.price = currentVariant.price;
                } else {
                    _product.img = PRODUCT.feature_image.src;
                    _product.stock = 0;
                    PRODUCT.price_max === PRODUCT.price_min ? _product.price = PRODUCT.price_min : _product.price = PRODUCT.price_min + '-' + PRODUCT.price_max;
                    $.each(PRODUCT.variants, function (index, variant) {
                        _product.stock += variant.stock;
                    });
                }
                setTimeout(function () {
                    if (currentVariant && currentVariant.stock === 0 && currentVariant.stock_type === 'B') {
                        $('.addCart-proListbtn').addClass('nostock-active-proList');
                        $('.noStock-proListbtn').addClass('nostock-active-proList');
                    } else {
                        $('.addCart-proListbtn').removeClass('nostock-active-proList');
                        $('.noStock-proListbtn').removeClass('nostock-active-proList');
                    }
                }, 50)
            }
            function renderPop() {
                if( sType === 'all' ){
                     _addBtns = '<button class="btn btn-md btn-primary two-width" type="button" id="yhsd-cart-edit-add">åŠ å…¥è´­ç‰©è½¦</button><button class="btn btn-md btn-primary add two-width" id="yhsd-cart-edit-submit" type="submit">ç«‹å³è´­ä¹°</button>';
                }else if(sType === 'add'){
                    _addBtns = '<button class="btn btn-md btn-primary" type="button" id="yhsd-cart-edit-add">åŠ å…¥è´­ç‰©è½¦</button>';
                }else{
                    _addBtns = '<button class="btn btn-md btn-primary add" id="yhsd-cart-edit-submit" type="submit">ç«‹å³è´­ä¹°</button>';
                }
               
                var sContent = '' +
                    '<div class="edit-product-info">' +
                    '    <div id="edit-product-cont" class="edit-product-cont"></div>' +
                    '    <div class="ctrl-btns">' +
                    '       <div class="addCart-proListbtn">' + _addBtns + '</div>' +
                    '       <div class="noStock-proListbtn">' +
                    '         <a class="btn-noStock" href="javascript:void(0);">å·²å”®ç½„</a>' +
                    '       </div>' +
                    '    </div>' +
                    '</div>' +
                    '<a href="javascript:void(0);" class="close-popup"><svg t="1594111840654" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2067" width="20" height="20"><path d="M566.97558594 521.09667969L856.8828125 231.18945312c14.63378906-14.63378906 14.63378906-38.75976563 0-53.39355468l-1.58203125-1.58203125c-14.63378906-14.63378906-38.75976563-14.63378906-53.39355469 0L512 466.51660156 222.09277344 176.21386719c-14.63378906-14.63378906-38.75976563-14.63378906-53.39355469 0l-1.58203125 1.58203125c-15.02929688 14.63378906-15.02929688 38.75976563 0 53.39355469l289.90722656 289.90722656L167.1171875 811.00390625c-14.63378906 14.63378906-14.63378906 38.75976563 0 53.39355469l1.58203125 1.58203125c14.63378906 14.63378906 38.75976563 14.63378906 53.39355469 0L512 576.07226563 801.90722656 865.97949219c14.63378906 14.63378906 38.75976563 14.63378906 53.39355469 0l1.58203125-1.58203125c14.63378906-14.63378906 14.63378906-38.75976563 0-53.39355469L566.97558594 521.09667969z" fill="#2c2c2c" p-id="2068"></path></svg></a>';
                var fnHandle = function () {
                    var submitBtn = $('#yhsd-cart-edit-submit');
                    var addBtn = $('#yhsd-cart-edit-add');
                    $('.edit-product-info').on('click', '.input', function () {
                        if (!currentVariant || +$(this).attr('data-block') === 0) {
                            $(this).text(1);
                            return false;
                        }
                        var self = $(this), oldVal = +$(this).text();
                        if ( isIosWechat() ) {
                            var name = prompt("è¯·è¾“å…¥è´­ä¹°æ•°é‡");
                            var newVal = parseInt(name);
                            if (!newVal || newVal === oldVal || newVal < 1) {
                                name = oldVal;
                                return;
                            } else {
                                if (newVal >= currentVariant.stock) {
                                    name = currentVariant.stock;
                                } else {
                                    oPro.quantity = newVal;
                                }
                            }
                            self.text(name);
                        } else {
                        	$.prompt({
                                title: 'è¯·è¾“å…¥è´­ä¹°æ•°é‡',
                                input: self.text(),
                                onOK: function (input) {
                                	var newVal = parseInt($('#weui-prompt-input').val());
                                    if (!newVal || newVal === oldVal || newVal < 1) {
                                        $('#weui-prompt-input').prop('value', oldVal);
                                        return;
                                    } else {
                                        if (newVal >= currentVariant.stock) {
                                            $('#weui-prompt-input').prop('value', currentVariant.stock);
                                        } else {
                                        	oPro.quantity = newVal;
                                        }
                                    }
                                    self.text($('#weui-prompt-input').val());
                                }
                            });
                        }
                    });
                    $('.edit-product-info').on('click', '.quantity-selector .icon-add', function () {
                        var _input = $(this).prev();
                        if (!currentVariant || +_input.text() >= currentVariant.stock) {
                            return;
                        }
                        _input.text(+_input.text() + 1);
                    });
                    $('.edit-product-info').on('click', '.quantity-selector .icon-minus', function () {
                        var _input = $(this).next();
                        if (!currentVariant || +_input.text() === 1) {
                            return;
                        }
                        _input.text(+_input.text() - 1);
                    });
                    render();
                    $('.edit-product-info').on('click', '.btn', function () {
                    	var current_scroll_top = $('#edit-product-cont .sku').scrollTop();
                        var nIndex = +$(this).parent().attr('data-index') + 1;
                        if ($(this).hasClass('selected')) {
                            skuManager.unselect(nIndex, function (options, selectedVariant) {
                                _product.options = options;
                                currentVariant = selectedVariant;
                                checkSelected();
                                render();
                                $('#edit-product-cont .sku').scrollTop(current_scroll_top);
                            });
                        } else if ($(this).hasClass('disabled')) {
                            return
                        } else {
                            skuManager.select(nIndex, $(this).html(), function (options, selectedVariant) {
                                _product.options = options;
                                currentVariant = selectedVariant;
                                checkSelected();
                                render();
                                $('#edit-product-cont .sku').scrollTop(current_scroll_top);
                            });
                        }
                        if(currentVariant) {
                            insertVariant.subVariantText(PRODUCT, currentVariant.options);
                        }
                    });
                    submitBtn.on('click', function () {
                        handleBtn($(this), false);
                    });
                    addBtn.on('click', function () {
                        handleBtn($(this), true);
                    });

                    function handleBtn($btn, isAdd) {
                        if (!currentVariant || currentVariant.id === 0) {
                            $.alert("è¯·æ‚¨é€‰æ‹©å•†å“å±žæ€§", "æç¤º");
                        } else {
                        	try {
                        		oPro.quantity = $('.quantity-selector .input').text() - 0;
                        	} catch(e) {
                        		oPro.quantity = 1;
                        	}
                            var oSend = {
                                variant_id: currentVariant.id,
                                quantity: oPro.quantity,
                                is_check: true
                            };
                            Jssdk.cart.add(oSend, function (data) {
                                if (data.res.code === 200 || data.res.code === 212) {
                                    if (isAdd) {
                                        $.toast("åŠ å…¥è´­ç‰©è½¦æˆåŠŸ");
                                        Jssdk.cart.get(function (data) {
                                            Jssdk.events.publish('flashTopCart', data);
                                        });
                                    } else {
                                       setTimeout(function(){
							             window.location.href = '/cart'
							            },400)
                                    }
                                } else {
                                    $.toast("åŠ å…¥è´­ç‰©è½¦å¤±è´¥", "text");
                                }
                            });
                            $.closePopup();
                        }
                    }
                };
                $('#fastbuy .weui-popup__modal').html(sContent);
                fnHandle();
            }
            function render() {
            	var sContent = '' +
                    '<div class="info">' +
                    '<div class="window-map">' +
                    '    <img id="sku-image" src="#{item_image}">' +
                    '</div>' +
                    '    <div><span class="price">ï¿¥<small id="sku-price">#{item_price}</small></span></div>' +
                    '</div>' +
                    '#{item_sku}' +
                    '<div class="quantity">è´­ä¹°æ•°é‡' +
                    '   <div class="quantity-selector yhsd-font-text">' +
                    '     <span class="fontuetop icon-minus"><svg t="1594112125753" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1210" width="12" height="12"><path d="M893.21 546.38H132.38c-19.09 0-34.58-15.49-34.58-34.58s15.49-34.58 34.58-34.58h760.83c19.09 0 34.58 15.49 34.58 34.58s-15.48 34.58-34.58 34.58z" p-id="1211" fill=""></path></svg></span>' +
                    '     <span class="yhsd-font-text input" style="padding:0;" data-block="#{item_stock}">1</span>' +
                    '     <span class="fontuetop icon-add"><svg t="1594112066337" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="988" width="12" height="12"><path d="M894.42 477.43H548.58V131.6c0-19.09-15.49-34.58-34.58-34.58s-34.58 15.49-34.58 34.58v345.83H133.58c-19.09 0-34.58 15.49-34.58 34.58s15.49 34.58 34.58 34.58h345.83v345.83c0 19.09 15.49 34.58 34.58 34.58s34.58-15.49 34.58-34.58V546.6H894.4c19.09 0 34.58-15.49 34.58-34.58s-15.47-34.59-34.56-34.59z" p-id="989" fill=""></path></svg></span>' +
                    '   </div>' +
                    '   <span id="sku-stock" class="stock yhsd-font-text">(åº“å­˜#{item_stock}ä»¶)</span>' +
                    '</div>'
                var itemSkus = '';
                if (_product.options.length > 0) {
                    itemSkus = '<div class="sku">';
                    $.each(_product.options, function (index, item) {
						
                        var _item = '<div class="sku-item"><div class="left">';
                        _item += item.name;
                        _item += 'ï¼š</div><div class="right" data-index="' + index + '">';
                        var itemValues = item.values;
                        $.each(itemValues, function (idx, val) {

                            _item += '<a href="javascript:void(0);" class="btn btn-xs btn-default ' + val.state + '">' + val.name + '</a>';
                        });
                        _item += '</div></div>';
                        itemSkus += _item;
                    });
                    itemSkus += '</div>';
                }
                if (typeof _product.price === 'string') {
                    var arr = _product.price.split('-');
                    var nPrice = $yhsd.Util.yuan(arr[0]) + ' - ' + $yhsd.Util.yuan(arr[1]);
                } else {
                    var nPrice = (_product.price / 100).toFixed(2).split(".");
                    nPrice = nPrice[0]+'<sub>.'+nPrice[1]+'</sub>';
                }
                sContent = sContent.replace(/#\{item_image\}/g, _product.img)
                    .replace(/#\{item_price\}/g, nPrice)
                    .replace(/#\{item_stock\}/g, _product.stock)
                    .replace(/#\{item_sku\}/g, itemSkus);
                $('#edit-product-cont').html(sContent);
                $('#sku-image').on('click', function () {
                    var photoBrowse = $.photoBrowser({
                        items: [
                            $(this).attr('src')
                        ]
                    });
                    photoBrowse.open();
                });
            }
        };
        handleProduct(window.CurrentProduct, sType)
    };
  
  bIsMobile = $('body').hasClass('is_mobile');
  var oRouteCustom = {};
  oRouteCustom['index'] = function(path) { 
    
    indexLoader.init();
   var navFix=$("header");   
   $(window).scroll(function(){ 
   var hero_height=$('.hero__image').outerHeight();     
   var nav_height=$('.is-home .header').outerHeight();  
  if($(this).scrollTop() >= hero_height){ 
  navFix.addClass("is-past-top"); 
  } 
    else{ 
  navFix.removeClass("is-past-top"); 
  }    
   });
     new Swiper('.js-homeFeatured', { 
       observer:true,
       observeParents:true,
       loop:true,
       autoplay: {
       delay: 4000,
       disableOnInteraction: false,
      },
       speed:600,         
       slidesPerView:'auto',
       centeredSlides : true,
       initialSlide :1,
       watchOverflow: true,
       spaceBetween: 0, 
       navigation: {
       nextEl: '.home__carousel__next',
       prevEl: '.home__carousel__prev',
       }
  });
   var campaigns1_swiper =  new Swiper('.campaigns1', { 
       observer:true,
       observeParents:true,
       loop:true,
       autoplay: {
       delay: false === true ? 4000 : 500000,
       },
       speed:600,         
       slidesPerView:'auto',                                     
       watchOverflow: true,
       spaceBetween: 0
  });

     $('#campaigns1_prev').click(function(){
    campaigns1_swiper.slidePrev();
     })
    $('#campaigns1_next').click(function(){
    campaigns1_swiper.slideNext();
     })

  };
  oRouteCustom['all'] = function(path){
    reSize.init();
    pastNotice.init();
    Multimenu.init();
    layoutPopContrl.init();
    touchevents.init();
    Account.current();
    invisible.init('.justhidden',1);  
    $(window).scroll(function(){
    invisible.init('.justhidden',1.2);
    }); 
    
  };
  oRouteCustom['productDetail'] = function(path){
    yhsd.ready(function(jssdk){ 
        skuSelect.init(jssdk);
      });
     if(window.CurrentProduct.options.length > 0) insertVariant.init(window.CurrentProduct);
        $('.weui-tabbar .tabbar_btn,#change_option').on('click', function () {
            addRightNow($(this).attr('data-type'))
        })

  };

  oRouteCustom['postAll'] = function(path) {
    postList.init();
    post_nav.init();
  };
  oRouteCustom['postDetail'] = function(path) {
    postDetail.init();
  };
  $yhsd.route.init(oRouteCustom);
  cartFix();
});

function goBack(){
  document.referrer === '' ?
          window.location.href = '/' :
          window.history.go(-1);
 }

  $(document).ready(function () {
    var ua = window.navigator.userAgent.toLowerCase();
     if(ua.match(/MicroMessenger/i) == 'micromessenger'){
   wx.miniProgram.getEnv(function(res) {
    if (res.miniprogram) {      
       $("#go_back").css({ 'display':'block'}); 
      
    }else {
    $("#go_back").css({ 'display':'none'}); 
       }
        })
       }else{
     $("#go_back").css({ 'display':'none'});
      };
               var fnCookie = {
                 set: function(email) {
                   document.cookie = "email_subscribe_list=" + (email || 'hidden') + ";path=/;expires=" + new Date(Date.now() + 43200000).toUTCString()
                   return document.cookie
                 },
                 has: function(email) {
                   return (document.cookie.indexOf(email || null) > -1)
                 }
               }
               var $btn = $('.mc-embedded-subscribe')

               $btn.on('click', function (evt) {
                 evt.preventDefault()

                 var $form = $(evt.target).parent()

                 // æ‰‹æœºç«¯åŽ»æŽ‰æ–°å»ºæ ‡ç­¾
                 if (/Mobile/i.test(navigator.userAgent)) {
                   $form.attr('target', '_self')
                 }

                 var email = $form.find('.mce-EMAIL').val() || null
                 var reEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
                 if (reEmail.test(email)) {
                   if (fnCookie.has(email)) {
                     alert('è¿™ä¸ªåœ°å€å·²ç»è®¢é˜…è¿‡å•¦ï¼')
                   } else {
                     fnCookie.set(email)
                     $form.submit()
                   }
                 } else {
                   alert('é‚®ä»¶æ ¼å¼ä¸æ­£ç¡®')
                 }
               })
             })

!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var i=function(){function t(t){var e=this;this.listener=function(t){(t.matches?e.matchFns:e.unmatchFns).forEach((function(t){t()}))},this.toggler=window.matchMedia(t),this.toggler.addListener(this.listener),this.matchFns=[],this.unmatchFns=[]}return t.prototype.add=function(t,e){this.matchFns.push(t),this.unmatchFns.push(e),(this.toggler.matches?t:e)()},t}(),o=function(t){return Array.prototype.slice.call(t)},r=function(t,e){return o((e||document).querySelectorAll(t))},s=("ontouchstart"in window||navigator.msMaxTouchPoints,navigator.userAgent.indexOf("MSIE")>-1||navigator.appVersion.indexOf("Trident/")>-1),a="mm-spn",c=function(){function t(t,e,n,i,o){this.node=t,this.title=e,this.slidingSubmenus=i,this.selectedClass=n,this.node.classList.add(a),s&&(this.slidingSubmenus=!1),this.node.classList.add(a+"--"+o),this.node.classList.add(a+"--"+(this.slidingSubmenus?"navbar":"vertical")),this._setSelectedl(),this._initAnchors()}return Object.defineProperty(t.prototype,"prefix",{get:function(){return a},enumerable:!0,configurable:!0}),t.prototype.openPanel=function(t){var e=t.parentElement;if(this.slidingSubmenus){var n=t.dataset.mmSpnTitle;e===this.node?this.node.classList.add(a+"--main"):(this.node.classList.remove(a+"--main"),n||o(e.children).forEach((function(t){t.matches("a, span")&&(n=t.textContent)}))),n||(n=this.title),this.node.dataset.mmSpnTitle=n,r("."+a+"--open",this.node).forEach((function(t){t.classList.remove(a+"--open"),t.classList.remove(a+"--parent")})),t.classList.add(a+"--open"),t.classList.remove(a+"--parent");for(var i=t.parentElement.closest("ul");i;)i.classList.add(a+"--open"),i.classList.add(a+"--parent"),i=i.parentElement.closest("ul")}else{var s=t.matches("."+a+"--open");r("."+a+"--open",this.node).forEach((function(t){t.classList.remove(a+"--open")})),t.classList[s?"remove":"add"](a+"--open");for(var c=t.parentElement.closest("ul");c;)c.classList.add(a+"--open"),c=c.parentElement.closest("ul")}},t.prototype._setSelectedl=function(){var t=r("."+this.selectedClass,this.node),e=t[t.length-1],n=null;e&&(n=e.closest("ul")),n||(n=this.node.querySelector("ul")),this.openPanel(n)},t.prototype._initAnchors=function(){var t=this;this.node.addEventListener("click",(function(e){var n=e.target,i=!1;(i=(i=(i=i||function(t){return!!t.matches("a")}(n))||function(e){var n;return!!(n=e.closest("span")?e.parentElement:!!e.closest("li")&&e)&&(o(n.children).forEach((function(e){e.matches("ul")&&t.openPanel(e)})),!0)}(n))||function(e){var n=r("."+a+"--open",e),i=n[n.length-1];if(i){var o=i.parentElement.closest("ul");if(o)return t.openPanel(o),!0}return!1}(n))&&e.stopImmediatePropagation()}))},t}(),u="mm-ocd",d=function(){function t(t,e){var n=this;void 0===t&&(t=null),this.wrapper=document.createElement("div"),this.wrapper.classList.add(""+u),this.wrapper.classList.add(u+"--"+e),this.content=document.createElement("div"),this.content.classList.add(u+"__content"),this.wrapper.append(this.content),this.backdrop=document.createElement("div"),this.backdrop.classList.add(u+"__backdrop"),this.wrapper.append(this.backdrop),document.body.append(this.wrapper),t&&this.content.append(t);var i=function(t){n.close(),t.preventDefault(),t.stopImmediatePropagation()};this.backdrop.addEventListener("touchstart",i),this.backdrop.addEventListener("mousedown",i)}return Object.defineProperty(t.prototype,"prefix",{get:function(){return u},enumerable:!0,configurable:!0}),t.prototype.open=function(){this.wrapper.classList.add(u+"--open"),document.body.classList.add(u+"-opened")},t.prototype.close=function(){this.wrapper.classList.remove(u+"--open"),document.body.classList.remove(u+"-opened")},t}(),l=function(){function t(t,e){void 0===e&&(e="all"),this.menu=t,this.toggler=new i(e)}return t.prototype.navigation=function(t){var e=this;if(!this.navigator){var n=(t=t||{}).title,i=void 0===n?"Menu":n,o=t.selectedClass,r=void 0===o?"Selected":o,s=t.slidingSubmenus,a=void 0===s||s,u=t.theme,d=void 0===u?"light":u;this.navigator=new c(this.menu,i,r,a,d),this.toggler.add((function(){return e.menu.classList.add(e.navigator.prefix)}),(function(){return e.menu.classList.remove(e.navigator.prefix)}))}return this.navigator},t.prototype.offcanvas=function(t){var e=this;if(!this.drawer){var n=(t=t||{}).position,i=void 0===n?"left":n;this.drawer=new d(null,i);var o=document.createComment("original menu location");this.menu.after(o),this.toggler.add((function(){e.drawer.content.append(e.menu)}),(function(){e.drawer.close(),o.after(e.menu)}))}return this.drawer},t}();e.default=l;window.MmenuLight=l}]);
jQuery.cookie=function(name,value,options){if(typeof value!='undefined'){options=options||{};if(value===null){value='';options=$.extend({},options);options.expires=-1}var expires='';if(options.expires&&(typeof options.expires=='number'||options.expires.toUTCString)){var date;if(typeof options.expires=='number'){date=new Date();date.setTime(date.getTime()+(options.expires*24*60*60*1000))}else{date=options.expires}expires='; expires='+date.toUTCString()}var path=options.path?'; path='+(options.path):'';var domain=options.domain?'; domain='+(options.domain):'';var secure=options.secure?'; secure':'';document.cookie=[name,'=',encodeURIComponent(value),expires,path,domain,secure].join('')}else{var cookieValue=null;if(document.cookie&&document.cookie!=''){var cookies=document.cookie.split(';');for(var i=0;i<cookies.length;i++){var cookie=jQuery.trim(cookies[i]);if(cookie.substring(0,name.length+1)==(name+'=')){cookieValue=decodeURIComponent(cookie.substring(name.length+1));break}}}return cookieValue}};