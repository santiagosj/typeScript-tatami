import { ChangeEventHandler, MouseEventHandler, useState } from 'react';
import Input from '../Input';
import Button from '../Button';

export type UserFormState = {
    name: string,
    username: string
}

const InitialFormValue: UserFormState = {
    name: '',
    username: ''
}

interface UserFormProps {
    handleSubmit: (user: UserFormState) => void,
}

export default function UserForm({ handleSubmit }: UserFormProps) {

    const [form, setForm] = useState(InitialFormValue);

    //Currying

    const handleOnChange: (inputName: string) => ChangeEventHandler<HTMLInputElement> = (inputName) => (e) => {
        setForm({ ...form, [inputName]: e.target.value });
    }

    // name --> agregar en el componente input la propiedad name:string

    //  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    //     const name = e.target.name as keyof UserFormState;
    //     setForm({...form, [name]: e.target.value})
    //  }

    const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        handleSubmit(form);
        setForm(InitialFormValue)
    }

    return (
        <>
            <Input value={form.name} placeholder='Nombre' handleOnChange={handleOnChange('name')} />
            <Input value={form.username} placeholder='Apellido' handleOnChange={handleOnChange('username')} />
            <Button handleClick={handleClick} >Enviar</Button>
        </>
    )
}