import { Button } from "../ui/button";

function NavBar() {
  return (
    <div className="h-20 bg-gray-100 border-b-2 border-gray-200 w-full flex justify-between items-center px-20 gap-10">
      <div className="flex-1 flex gap-10 justify-start">
        <div className="w-20 text-2xl text-gray-900">CalPoint</div>
        <div className="flex-1 flex items-center justify-start gap-5">
          <div>About</div>
          <div>Product</div>
        </div>
      </div>
      <div className="w-40 flex justify-end gap-5 items-center">
        <Button>SignIn</Button>
        <Button>SignUp</Button>
      </div>
    </div>
  );
}

export default NavBar;
