import "./search-box.styles.css";
import { ChangeEvent } from "react";

type searchBoxProps = {
  className: string;
  placeHolder?: string;
  onchangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

function SecrchBox({
  onchangeHandler,
  placeHolder,
  className,
}: searchBoxProps) {
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
