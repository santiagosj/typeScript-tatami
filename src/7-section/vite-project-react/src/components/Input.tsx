import { ChangeEventHandler } from "react"

interface InputProps {
    placeholder: string,
    handleOnChange: ChangeEventHandler<HTMLInputElement>
}

export default function Input({ placeholder, handleOnChange }: InputProps) {
    return (
        <input
            type="text"
            placeholder={placeholder}
            onChange={handleOnChange}
        />
    )
}