import Button from "../../components/Button";

function ButtonDemoPage() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="
      demo__container
      flex
      flex-col
      items-center
      justify-center
      min-h-screen
      bg-gray-100
      p-8
    ">
      <div className="
        demo__content
        bg-white
        rounded-lg
        shadow-lg
        p-10
        max-w-2xl
        w-full
      ">
        <h1 className="
          demo__title
          text-3xl
          font-bold
          text-gray-800
          mb-8
          text-center
        ">
          Blue Button Demo
        </h1>

        <div className="
          demo__section
          mb-8
        ">
          <h2 className="
            section__title
            text-xl
            font-semibold
            text-gray-700
            mb-4
          ">
            Default Button
          </h2>
          <div className="
            section__example
            flex
            gap-4
            flex-wrap
          ">
            <Button label="Click Me" onClick={handleClick} />
            <Button label="Submit Form" type="submit" />
            <Button label="Reset Form" type="reset" />
          </div>
        </div>

        <div className="
          demo__section
          mb-8
        ">
          <h2 className="
            section__title
            text-xl
            font-semibold
            text-gray-700
            mb-4
          ">
            Disabled Button
          </h2>
          <div className="
            section__example
            flex
            gap-4
            flex-wrap
          ">
            <Button label="Disabled Button" disabled={true} />
          </div>
        </div>

        <div className="
          demo__section
        ">
          <h2 className="
            section__title
            text-xl
            font-semibold
            text-gray-700
            mb-4
          ">
            Button States
          </h2>
          <div className="
            section__description
            text-gray-600
            space-y-2
          ">
            <p>• <strong>Default:</strong> Blue background (bg-blue-600)</p>
            <p>• <strong>Hover:</strong> Darker blue background (bg-blue-700)</p>
            <p>• <strong>Disabled:</strong> 50% opacity with no-cursor</p>
            <p>• <strong>Transition:</strong> Smooth color transition (200ms)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ButtonDemoPage;
