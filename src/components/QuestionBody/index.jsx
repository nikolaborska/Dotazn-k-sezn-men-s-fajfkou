import { Icon } from '../Icon/index';
import './style.css';

export const QuestionBody = ({text, type}) => {
  return (
    <div className="question__body">
      <p className="question__text">
        {text}
      </p>
      <Icon type={type} />
    </div>
  );
};
