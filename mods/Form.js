import Element from './Element.js';

export default class Form {
    constructor() {
        this.form = Element.create('form');
        this.label = Element.create('h1');
        this.input = Element.create('input');
        this.button = Element.create('button');
        this.button2 = Element.create('button');

        this.label.innerText = 'Enter a number between 1-10';

        Element.config(this.form, {
            action: '/'
        });
        
        Element.config(this.input, {
            placeholder:'Magic number',
            className: 'input',
            type: 'number'
        });

        this.button.innerText = 'Visualize';
        this.button2.innerText = 'Download';
    }

    build(parent) {
        if(!parent) { return };
        this.form.append(this.label,
                         this.input,
                         this.button,
                         this.button2);

        parent.append(this.form);
    }
}