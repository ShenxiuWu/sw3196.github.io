$(function () {
    $(".index_2_nav li").click(function () {
        var i = $(this).index();
        if ($(this).is(".on")) {

        } else {
            $(this).addClass("on").siblings().removeClass("on");
            $(".index_2_tab").eq(i).addClass("on").siblings().removeClass("on");
        }
    })
    var imgm = $("img[data-murl]");
    var imgp = $("img[data-purl]");

    $(window).scroll(function (e) {
        var bh = $(window).scrollTop()
        if (bh > 10) {
            $('.proNav').addClass("kur");
        } else {
            $('.proNav').removeClass("kur");
        }
    })


    $(window).load(function () {




        var width = document.body.clientWidth;

        if (width > 1000) {
            $(".navOption").hover(function () {
                $(this).children("i").fadeIn();
                $(this).next(".sunNav").slideDown();

            });
            $(".header .nav li").mouseleave(function () {
                $(this).children().children("i").stop(true, true).fadeOut();
                $(this).children(".sunNav").stop(true, true).slideUp();
            });
            imgp.each(function (num, e) {
                var _this = $(this);
                _this.attr("src", _this.data("purl"));
            });

            $("#exhibition_6 .outter").each(function () {
                center($(this));

            })
            $(".proShowC .text").each(function () {
                center($(this));

            })
            $(".about-address h3").click(function () {
                $(".about-address").removeClass("on");
                $(this).parent().parent().addClass("on");
                $(this).next().slideDown();

            });

        } else {
            $('.fakeloader').show();
            setTimeout(addCla, 400);
            function addCla() {
                $('body').addClass('loaded');
                $('.fakeloader').fadeOut();                
                //添加show
            };
            $(".navOption").click(function () {
                $(this).next(".sunNav").slideToggle();

            });
            imgm.each(function (num, e) {
                var _this = $(this);
                _this.attr("src", _this.data("murl"));
            });
            $("#exhibition_6 .outter").each(function () {
                center($(this));

            })

            $(".proNavBox p").click(function () {
                $(this).next().slideToggle();
            })


        }



    });
    $(window).on('resize', function () {


        windowWidth = $(window).width();
        if (windowWidth < 1000) {

            imgm.each(function (num, e) {
                var _this = $(this);
                _this.attr("src", _this.data("murl"));
            });
            //$('.fakeloader').show();
            //setTimeout(addCla, 400);
            //function addCla() {
            //    $('body').addClass('loaded');
            //    $('.fakeloader').fadeOut();
            //    //添加show
            //};
            $("#exhibition_6 .outter").each(function () {
                center($(this));

            })
        }
        else {

            imgp.each(function (num, e) {
                var _this = $(this);
                _this.attr("src", _this.data("purl"));
            });
            $("#exhibition_6 .outter").each(function () {
                center($(this));

            })

        }
    });



    var imgsrc = null;

    $(".polaroiols .fdj").click(function () {
        imgsrc = $(this).parent().prev().children().attr("src");
        $(".tk").fadeIn();
        $(".tk .img").children().attr("src", imgsrc);
        return false;
    })
    $(".tk .none").click(function () {
        imgsrc = null;
        $(".tk").fadeOut();
        $(".tk .img").children().attr("src", imgsrc);
        return false;
    })
    $(".tk .close").click(function () {
        imgsrc = null;
        $(".tk").fadeOut();
        $(".tk .img").children().attr("src", imgsrc);
        return false;
    })

    $(".proDeTit span").click(function () {
        $(".List").slideToggle();
    })


    //$.validator.setDefaults({
    //    /*关闭键盘输入时的实时校验*/
    //    onkeyup: null,
    //    /*添加校验成功后的执行函数--修改提示内容，并为正确提示信息添加新的样式(默认是valid)*/
    //    success: function (label) {
    //        /*label的默认正确样式为valid，需要通过validClass来重置，否则这里添加的其他样式不能被清除*/
    //        label.text('').addClass('valid');
    //    },
    //    /*重写校验元素获得焦点后的执行函数--增加[1.光标移入元素时的帮助提示,2.校验元素的高亮显示]两个功能点*/
    //    onfocusin: function (element) {
    //        this.lastActive = element;

    //        /*1.帮助提示功能*/
    //        this.addWrapper(this.errorsFor(element)).hide();
    //        var tip = $(element).attr('tip');
    //        if (tip && $(element).parent().children(".tip").length === 0) {
    //            $(element).parent().append("<label class='tip'>" + tip + "</label>");
    //        }

    //        /*2.校验元素的高亮显示*/
    //        $(element).addClass('highlight');

    //        // Hide error label and remove error class on focus if enabled
    //        if (this.settings.focusCleanup) {
    //            if (this.settings.unhighlight) {
    //                this.settings.unhighlight.call(this, element, this.settings.errorClass, this.settings.validClass);
    //            }
    //            this.hideThese(this.errorsFor(element));
    //        }
    //    },
    //    /*重写校验元素焦点离开时的执行函数--移除[1.添加的帮助提示,2.校验元素的高亮显示]*/
    //    onfocusout: function (element) {
    //        /*1.帮助提示信息移除*/
    //        $(element).parent().children(".tip").remove();

    //        /*2.校验元素高亮样式移除*/
    //        $(element).removeClass('highlight');

    //        /*3.替换下面注释的原始代码，任何时候光标离开元素都触发校验功能*/
    //        this.element(element);

    //        /*if ( !this.checkable( element ) && ( element.name in this.submitted || !this.optional( element ) ) ) {
    //            this.element( element );
    //        }*/
    //    }
    //});

})

function center(cE) {
    var h = cE.height();
    cE.css({
        "margin-top": -(+h) / 2,
    });
};





