import PropTypes from "prop-types";
import Button from "./Button";
import H2 from "./TaskNo";
function practice_1() {
  return (
    <>
      <H2>task 1</H2>
      <div className="flex gap-1.5 ">
        <Button message="Dancing">Dance</Button>
        <Button message="jumping">jump</Button>
      </div>
    </>
  );
}

Button.prototype = {
  message: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default practice_1;
