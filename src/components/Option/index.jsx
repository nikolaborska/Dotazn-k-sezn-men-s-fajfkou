import { Icon } from '../Icon/index';
import './style.css';

export const Option = ({type, text, onSelected}) => {
  const handleClick = () => {
    console.log("Možnost kliknuta")
    onSelected();
  };
  return (
    <div onClick={handleClick} className="option">
      <Icon type={type} />
      <div>{text}</div>
    </div>
  );
};
