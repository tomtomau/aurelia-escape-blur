'use strict';

System.register([], function (_export, _context) {
    var _class, _temp, EscapeBlurCustomAttribute;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _export('EscapeBlurCustomAttribute', EscapeBlurCustomAttribute = (_temp = _class = function () {
                function EscapeBlurCustomAttribute(element) {
                    _classCallCheck(this, EscapeBlurCustomAttribute);

                    this.element = element;
                }

                EscapeBlurCustomAttribute.prototype.attached = function attached() {
                    var _this = this;

                    this.element.addEventListener('keyup', function (e) {
                        if (e.which == 27) {
                            _this.element.blur();
                        }
                    });
                };

                return EscapeBlurCustomAttribute;
            }(), _class.inject = [Element], _temp));

            _export('EscapeBlurCustomAttribute', EscapeBlurCustomAttribute);
        }
    };
});