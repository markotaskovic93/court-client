import { PropsWithChildren } from "react"

interface IButton {
  onClick: () => void;
  disabled?: boolean | undefined;
  className?: string | undefined;
  variant?: 'CLASSIC' | 'PRIMARY' | 'SECONDARY';
}

const Button: React.FC<PropsWithChildren<IButton>> = ({
  children,
  onClick,
  disabled = false,
  className
}) => {

  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className={className}
    >
      { children }
    </button>
  )
}

export default Button;
