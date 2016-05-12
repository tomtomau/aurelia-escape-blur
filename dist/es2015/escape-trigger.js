var _class, _temp;

export let EscapeBlurCustomAttribute = (_temp = _class = class EscapeBlurCustomAttribute {

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
}, _class.inject = [Element], _temp);