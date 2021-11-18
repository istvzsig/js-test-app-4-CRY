import Form from './Form.js';

export default class Application {
    constructor(name) {
        this.name = name || 'Application';
        this.ROOT_DIV = document.getElementById('__root__');
        
        this.ROOT_DIV.setAttribute('application-name', this.name);

        this.form = new Form();
    }

    start() {
        this.form.build(this.ROOT_DIV);
    }
}
