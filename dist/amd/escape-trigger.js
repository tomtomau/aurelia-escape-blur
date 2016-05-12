define(['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _class, _temp;

    var EscapeBlurCustomAttribute = exports.EscapeBlurCustomAttribute = (_temp = _class = function () {
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
    }(), _class.inject = [Element], _temp);
});