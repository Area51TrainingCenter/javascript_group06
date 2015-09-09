app.animation('.slide-animation', function () {
        return {
            addClass: function (element, className, done) {
                if (className == 'ng-hide') {
                    TweenMax.to(element, 0.5, {left: -element[0].clientWidth });                   
                }

            },
            removeClass: function (element, className, done) {
                if (className == 'ng-hide') {
                    element.removeClass('ng-hide');

                    TweenMax.set(element, { left: element[0].clientWidth });
                    TweenMax.to(element, 0.5, {left: 0 });                
                }

            }
        };
    });