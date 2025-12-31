import CatAvatar from "../../components/CatAvatar";

function CatAvatarDemo() {
  return (
    <div className="min-h-screen bg-[#E8DCC4] flex items-center justify-center p-8">
      <div className="max-w-md w-full">
        <CatAvatar
          nickname="@MagicWizard🎩✨"
          realname="Wizard Cat Bot"
        />
      </div>
    </div>
  );
}

export default CatAvatarDemo;
