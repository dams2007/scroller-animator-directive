'use strict';

goog.provide('scrollAnimation.tweenCollection');



/**
 * ...
 * @constructor
 * @param {!ng.$document} $document
 * @ngInject
 */
scrollAnimation.tweenCollection = function ($document) {

    this.arrayTweenCollection = [];
    this.arrayTimeline = [];
    var arrayContainer;

    /**
     * Records all animations of each elements in arrayTimeline.
     *
     * @return {array}
     */
    this.getAllTweens = function () {
        arrayContainer = angular.element(document.querySelectorAll('[scroll-animator]'));

        this.arrayTweenCollection = [{
            animation1: TweenMax.staggerTo(arrayContainer[0], 1, {
                css: {
                    left: '100px',
                    autoAlpha: 0
                }
            }, 0.7),
            animation2: TweenLite.to(arrayContainer[0], 1, {
                css: {
                    left: '1500px',
                    autoAlpha: 0
                }
            })
        }, {
            animation1: TweenLite.fromTo(arrayContainer[1], 1, {
                css: {
                    left: '10%',
                    autoAlpha: 0
                }
            }, {
                css: {
                    left: '60%',
                    autoAlpha: 1
                }
            }),
            animation2: TweenMax.staggerFrom(arrayContainer[1], 1, {
                css: {
                    autoAlpha: 0
                }
            }, 0.7)
        }, {
            animation1: TweenMax.staggerTo(arrayContainer[2], 1, {
                css: {
                    left: '2000px',
                    autoAlpha: 0
                }
            }, 0.7),
            animation2: TweenLite.to(arrayContainer[2], 1, {
                css: {
                    left: '100px',
                    autoAlpha: 1
                }
            })
        }];

        for (var i = 0; i < arrayContainer.length; i++) {
            var timeline = new TimelineMax({
                paused: true
            });
            timeline.append(this.arrayTweenCollection[i].animation1);
            timeline.append(this.arrayTweenCollection[i].animation2);
            this.arrayTimeline.push(timeline);
        };
        return this.arrayTimeline;
    }
};
