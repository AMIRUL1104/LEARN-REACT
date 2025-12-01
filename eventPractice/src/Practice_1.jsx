import PropTypes from "prop-types";
import Button from "./Button";

function practice_1() {
  return (
    <div className="flex gap-1.5 ">
      <Button message="Dancing">Dance</Button>
      <Button message="jumping">jump</Button>
    </div>
  );
}

Button.prototype = {
  message: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default practice_1;
