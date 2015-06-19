/**
 * Created by test on 19/06/2015.
 */
/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';

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

@Component({
    selector: 'my-app'
})
@View({
    template: '<h1>Hello {{ name }}</h1>'
})

///////////////////////////////
// Component controller
///////////////////////////////

class MyAppComponent {
    name: string;

    constructor() {
        this.name = 'Angular 2 WTF';
    }
}
bootstrap(MyAppComponent);