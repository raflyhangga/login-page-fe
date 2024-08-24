type ComponentProps = {
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    label: string;
    isPassword?: boolean;
}

function TextInput({
    onChange,
    label,
    isPassword
}: ComponentProps): JSX.Element {
    return (
        <div className="w-full flex flex-col">
            <label htmlFor={`${label}`} className="text-xl mb-2" >{label}</label>
            <input 
                type={`${isPassword? "password" : "text"}`} 
                name={`${label}`} 
                title={`${label}`} 
                className="shadow-sm border-gray-500 border-2 rounded-lg my-2 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 p-2" 
                onChange={onChange}
            />
        </div>
    )
}

export default TextInput;