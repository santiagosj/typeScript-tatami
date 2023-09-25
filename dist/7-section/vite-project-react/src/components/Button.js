"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Button({ children, handleClick }) {
    return (<button onClick={handleClick} className="button is-primary">
            {children}
        </button>);
}
exports.default = Button;
//# sourceMappingURL=Button.js.map