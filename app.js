if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by test on 19/06/2015.
 */
/// <reference path="typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
/*
    @Component and @View annotations
    A component annotation describes details about the component. An annotation can be identified by its at-sign (@).
    The @Component annotation defines the HTML tag for the component by specifying the component's CSS selector.
    The @View annotation defines the HTML that represents the component. The component you wrote uses an inline template,
    but you can also have an external template.
    To use an external template, specify a templateUrl property and give it the path to the HTML file.
*/
////////////////////////////////
// Annotation section
////////////////////////////////
var MyAppComponent = (function () {
    function MyAppComponent() {
        this.name = 'Angular 2 WTF';
    }
    MyAppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app'
        }),
        angular2_1.View({
            template: '<h1>Hello {{ name }}</h1>'
        }), 
        __metadata('design:paramtypes', [])
    ], MyAppComponent);
    return MyAppComponent;
})();
angular2_1.bootstrap(MyAppComponent);
