export default class Element {
    static create(type) {
        const elem = document.createElement(type || 'div');

        return elem;
    }

    static config(elem, config={}) {
        for(let prop in config) {
            elem[prop] = config[prop];
        }
    }
}
