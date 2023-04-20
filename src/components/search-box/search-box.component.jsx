import './search-box.styles.css';

function SecrchBox({onchangeHandler, placeHolder, className}) {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeHolder}
      id="inputValue"
      onChange={onchangeHandler}
    />
  );
}
export default SecrchBox;
