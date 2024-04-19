import "./styles.css";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Counter from "../../components/Counter/Counter";

function Lessons04() {
  const showMessage = () => {
    alert("Hello, user");
  };

  const showNameMessage = (userName) => {
    alert(`Hello, ${userName}`);
  };

  const onChange = (event, message) => {
    console.log(`${event.target.value} - ${message}`);
  };

  return (
    <div className="lesson04-container">
      {/* <Input onInputChange={(event) => onChange (event, "value")} />
      <Button name="Func Inner" onButtonClick={() => alert("Hi")} />
      <Button name="Func Outer" onButtonClick={showMessage} />
      <Button
        name="Func With Parametrs"
        onButtonClick={() => showNameMessage("Tom")}
      /> */}

      <Counter />
    </div>
  );
}

export default Lessons04;
