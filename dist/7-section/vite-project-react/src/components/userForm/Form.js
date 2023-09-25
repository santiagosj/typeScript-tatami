"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Input_1 = __importDefault(require("../Input"));
const Button_1 = __importDefault(require("../Button"));
const InitialFormValue = {
    name: '',
    username: ''
};
function UserForm({ handleSubmit }) {
    const [form, setForm] = (0, react_1.useState)(InitialFormValue);
    const handleOnChange = (inputName) => (e) => {
        setForm(Object.assign(Object.assign({}, form), { [inputName]: e.target.value }));
    };
    const handleClick = (e) => {
        e.preventDefault();
        handleSubmit(form);
        setForm(InitialFormValue);
    };
    return (<>
            <Input_1.default value={form.name} placeholder='Nombre' handleOnChange={handleOnChange('name')}/>
            <Input_1.default value={form.username} placeholder='Apellido' handleOnChange={handleOnChange('username')}/>
            <Button_1.default handleClick={handleClick}>Enviar</Button_1.default>
        </>);
}
exports.default = UserForm;
//# sourceMappingURL=Form.js.map