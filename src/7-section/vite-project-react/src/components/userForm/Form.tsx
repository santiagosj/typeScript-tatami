import { ChangeEventHandler, MouseEventHandler, useState } from 'react';
import Input from '../Input';
import Button from '../Button';


export default function UserForm({ }) {
    const [input, setInput] = useState('');

    const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setInput(e.target.value)
    }

    const saludar: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        alert(`Hola ${input ?? 'master'}`);
    }

    return (
        <>
            <Input placeholder='Nombre' handleOnChange={handleOnChange} />
            <Input placeholder='Apellido' handleOnChange={handleOnChange} />
            <Button handleClick={saludar} >Saludar</Button>
        </>
    )
}