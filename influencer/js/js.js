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
                //���show
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
            //    //���show
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
    //    /*�رռ�������ʱ��ʵʱУ��*/
    //    onkeyup: null,
    //    /*���У��ɹ����ִ�к���--�޸���ʾ���ݣ���Ϊ��ȷ��ʾ��Ϣ����µ���ʽ(Ĭ����valid)*/
    //    success: function (label) {
    //        /*label��Ĭ����ȷ��ʽΪvalid����Ҫͨ��validClass�����ã�����������ӵ�������ʽ���ܱ����*/
    //        label.text('').addClass('valid');
    //    },
    //    /*��дУ��Ԫ�ػ�ý�����ִ�к���--����[1.�������Ԫ��ʱ�İ�����ʾ,2.У��Ԫ�صĸ�����ʾ]�������ܵ�*/
    //    onfocusin: function (element) {
    //        this.lastActive = element;

    //        /*1.������ʾ����*/
    //        this.addWrapper(this.errorsFor(element)).hide();
    //        var tip = $(element).attr('tip');
    //        if (tip && $(element).parent().children(".tip").length === 0) {
    //            $(element).parent().append("<label class='tip'>" + tip + "</label>");
    //        }

    //        /*2.У��Ԫ�صĸ�����ʾ*/
    //        $(element).addClass('highlight');

    //        // Hide error label and remove error class on focus if enabled
    //        if (this.settings.focusCleanup) {
    //            if (this.settings.unhighlight) {
    //                this.settings.unhighlight.call(this, element, this.settings.errorClass, this.settings.validClass);
    //            }
    //            this.hideThese(this.errorsFor(element));
    //        }
    //    },
    //    /*��дУ��Ԫ�ؽ����뿪ʱ��ִ�к���--�Ƴ�[1.��ӵİ�����ʾ,2.У��Ԫ�صĸ�����ʾ]*/
    //    onfocusout: function (element) {
    //        /*1.������ʾ��Ϣ�Ƴ�*/
    //        $(element).parent().children(".tip").remove();

    //        /*2.У��Ԫ�ظ�����ʽ�Ƴ�*/
    //        $(element).removeClass('highlight');

    //        /*3.�滻����ע�͵�ԭʼ���룬�κ�ʱ�����뿪Ԫ�ض�����У�鹦��*/
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





