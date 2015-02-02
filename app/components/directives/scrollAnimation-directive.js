'use strict';

goog.provide('scrollAnimation.animatorDirective');

goog.require('scrollAnimation.mainController');
goog.require('scrollAnimation.tweenCollection');




/**
 * @constructor
 * @param {!ng.$window} $window
 * @param {!scrollAnimation.tweenCollection} tweencollection
 * @ngInject
 */
scrollAnimation.animatorDirective = function ($window, tweencollection) {
    var window = $window;

    var tweens = tweencollection.getAllTweens();

    return {
        controller: scrollAnimation.mainController,
        restrict: 'A',
        controllerAs: 'homeCtrl',
        link: function (scope, element, attrs) {
            var getHor;
            var getVert;

            angular.element(window).bind("scroll", function () {
                getHor = window.pageYOffset;
                getVert = window.pageYOffset;
                console.log(getVert);
                for (var i = 0; i < tweens.length; i++) {
                    scrollTween(tweens[i]);
                }
            });

            var scrollTween = function (tweenName) {
                var progressNumber = 0;
                if (attrs.type == 'vertical') {
                    progressNumber = (1 / (attrs.endpoint - attrs.startpoint)) * (getVert - attrs.startpoint);
                } else {
                    progressNumber = (1 / (attrs.endpoint - attrs.startpoint)) * (getHor - attrs.startpoint);
                }

                if (progressNumber >= 0 && progressNumber <= 1) {
                    tweenName.progress(progressNumber);
                } else if (progressNumber < 0) {
                    tweenName.progress(0);
                } else if (progressNumber > 1) {
                    tweenName.progress(1);
                }
            }
        }
    }
};
