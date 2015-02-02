'use strict';

goog.require('scrollAnimation.tweenCollection');
goog.require('scrollAnimation.mainController');
goog.require('scrollAnimation.animatorDirective');

/**
 * Main app.
 */

angular.module('app', [])
    .service('tweencollection', scrollAnimation.tweenCollection)
    .controller('homeController', scrollAnimation.mainController)
    .directive('scrollAnimator', scrollAnimation.animatorDirective)