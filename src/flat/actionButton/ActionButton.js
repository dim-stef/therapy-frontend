import './actionButton.css';

function ActionButton({onClick, text, ...rest}){
  return(
    <button className="action-button" {...rest}>{text}</button>
  )
}

export default ActionButton;
