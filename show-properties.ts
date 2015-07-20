/**
 * Created by test on 20/06/2015.
 */
// TypeScript
import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
    selector: 'display'
})

@View({
    template: `
        <p>My name: {{ myName }}</p>
        <p>Friends:</p>
        <ul>
            <li *for="#name of names">
                {{ name }}
            </li>
        </ul>
`,
    directives: [For]
})


class DisplayComponent {
    myName: string;
    names: Array<string>;

    constructor() {
        this.myName = "Alice";
        this.names = ["Aarav", "Martín", "Shannon", "Ariana", "Kai"];
    }
}