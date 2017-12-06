var $ = require('jquery');

// require('svgxuse');

// import './css-variables.polyfill';


$( document ).ready(function() {

    var openClass = 'is--open';

    $('[data-target]').click(function(e) {

        e.preventDefault();

        var action = $(this).data('action'); // take which action?

        var toggle = $(this);
        var toggleGroup = $(this).data('group'); // this group

        var targetName = $(this).data('target');

        var target = $('[data-id="'+ $(this).data('target') +'"]'); // the target
        var targetGroup = $(target).data('group'); // the target's group

        var targetsArray = $(this).data('target').split(' ');


        if (action === 'open') {

            closeGroupOpenMe(toggleGroup, this);

            targetsArray.forEach((targetInArray)=> {

                var target = $('[data-id="'+ targetInArray +'"]'); // the target
                var targetGroup = $(target).data('group'); // the target's group

                closeGroupOpenMe(targetGroup, target);

            });
        }

        else if (action === 'close') {

            $(this).removeClass(openClass);

            closeMyTargets(targetName);
            closingTargetChecks(target);
            $(target).removeClass(openClass);
        }

        else if (action === 'toggle') {

            if ($(this).is('.'+openClass)) {

                // close me
                $(this).removeClass(openClass);

                targetsArray.forEach((targetInArray)=> {

                    var target = $('[data-id="'+ $(this).data('target') +'"]'); // the target
                    $(target).removeClass(openClass);
                    closeMyTargets(target);

                });

            } else {

                closeGroupOpenMe(toggleGroup, this);

                targetsArray.forEach((targetInArray)=> {

                    var target = $('[data-id="'+ targetInArray +'"]'); // the target
                    var targetGroup = $(target).data('group'); // the target's group

                    closeGroupOpenMe(targetGroup, target);

                });
            }
        }

    });

    function closeGroupOpenMe(group, me) {

        // close this group
        $('[data-group="'+ group + '"]')
          .not(me)
          .removeClass(openClass);

        // open me
        $(me).addClass(openClass);

        openingTargetChecks(me);

    }

    function closeMyTargets(me) {

        $('[data-target="'+ me + '"]')
            .removeClass(openClass);

    }

    function openingTargetChecks(target) {

        var targetType = $(target).data('target-type');

        if (targetType == 'fullscreen') {
            $('body').css('overflow', 'hidden');
        }

        else if(targetType == 'team-member') {
            // scroll to target
        }
    }

    function closingTargetChecks(target) {

        var targetType = $(target).data('target-type');

        if (targetType == 'fullscreen') {
            $('body').css('overflow', 'visible');
        }
    }

    function showMoreAnswers() {
        $('#faqs').toggleClass('u-show-2');
        $('#faqs-button').hide();
    }

    $('#faqs-button').click(showMoreAnswers);


});
