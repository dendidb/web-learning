$accordion = {

    // event function
    event: function(){

        $('body').on('click','.jsAccordion .accordion-item', function(event) {
            var _this   = $(this),
                _target = _this.find('.accordion-body');

            if (_this.hasClass('expanded')) {
                _target.slideUp(350).removeClass('show');
                _this.removeClass('expanded');
            } else {
                $('.jsAccordion .accordion-body').slideUp(350).removeClass('show');
                $('.jsAccordion .accordion-item').removeClass('expanded');
                _target.slideDown(350).addClass('show');
                _this.addClass('expanded');
            }

        });

        $('.jsSeeMoreStoreLocator').on('click', function(event) {
            var _this   = $(this),
                _target = _this.prev('.collapse-expand');

            if (_this.hasClass('show')) {
                _this.removeClass('show').text(_this.attr('data-more'));
                _target.removeClass('show');
                $("html, body").animate({scrollTop: _target.offset().top - 160 }, 0);
            } else {
                _this.addClass('show').text(_this.attr('data-less'));
                _target.addClass('show');
            }
        });

    },
    // end event function

    // init function
    init: function(){
        $accordion.event();
    }
    // end init function

};