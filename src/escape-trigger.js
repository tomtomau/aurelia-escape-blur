export class EscapeBlurCustomAttribute {
    static inject = [Element];

    constructor(element) {
        this.element = element;
    }

    attached() {
        this.element.addEventListener('keyup', e => {
            if (e.which == 27) {
                this.element.blur();
            }
        });
    }
}