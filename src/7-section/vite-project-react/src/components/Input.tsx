import { ChangeEventHandler } from "react"

interface InputProps {
    placeholder: string,
    handleOnChange: ChangeEventHandler<HTMLInputElement>
    value: string
}

export default function Input({ placeholder, handleOnChange, value }: InputProps) {
    return (
        <input
            value={value}
            type="text"
            placeholder={placeholder}
            onChange={handleOnChange}
        />
    )
}