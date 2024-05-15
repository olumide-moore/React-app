interface ButtonProps {
  children: string;
  onClick: () => void;
  type?: 'primary' | 'secondary' | 'danger'
}

const Button = ({ children, onClick, type ='primary'}: ButtonProps) => {
  return (
    <button className={"btn btn-"+ type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
