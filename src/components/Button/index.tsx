interface IButtonProps {
    label: string;
}

const Button = ({label}: IButtonProps) => {
    return <button className="bg-green-500 p-2 rounded-md"> {label}</button>
}



export default Button;