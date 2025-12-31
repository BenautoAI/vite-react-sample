import Avatar from "../../components/Avatar"
import FeedGrid from "../../components/Grids/Index"
import BlueButton from "../../components/BlueButton"

function FeedPage() {
  const handleButtonClick = () => {
    alert('Blue button clicked!');
  };

  return (
    <>
      <div>
        <Avatar
          realname="Felipe Aguiar" nickname="@Felipao__DIO🚀" />
      </div>
      <div className="mt-6 flex justify-center">
        <BlueButton 
          text="Click Me" 
          onClick={handleButtonClick}
        />
      </div>
      <div className="mt-10">
        <FeedGrid />
      </div>
    </>
  );
}

export default FeedPage;