import { useNavigate } from "react-router-dom";
import Button from "../button/button";
import { routePaths } from "../../../router/route-paths";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img
        src="https://res.cloudinary.com/dhjkntuy2/image/upload/v1740254020/Unique%20Solution/only-images/NotFound_zywghl.jpg"
        alt="Image is missing here"
        className="max-w-full h-auto object-contain"
      />
      <Button
        className="btn mt-4 px-6 py-3 text-md hover:bg-gray-600"
        onClick={() => navigate(routePaths.home.root)}
      >
        Go back
      </Button>
    </div>
  );
}
