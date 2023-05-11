import UsernameInput from "./UsernameInput";
const SignInModal = () => {
  return (
    <div className="modal-container w-screen h-screen bg-[#ddd] flex items-center justify-center ">
      <div className="modal bg-white min-h-[205px] min-w-[500px] flex flex-col px-5 py-3 rounded-2xl gap-y-4">
        <div className="modalHeader">
          <h2 className="text-xl font-bold">Welcome to CodeLeap network</h2>
        </div>
        <UsernameInput />
      </div>
    </div>
  );
};

export default SignInModal;
