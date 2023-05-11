import { ThreeBounce } from "better-react-spinkit";
import Image from "next/image";

function Loader() {
  return (
    <div className="h-screen bg-black">
      <div className="pt-40 flex flex-col items-center space-y-4">
        <span className="relative w-[400px] h-[250px] lg:w-[550px] lg:h-[240px]">
          <Image
            src=" https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1024px-Spotify_logo_without_text.svg.png"
            layout="fill"
            objectFit="contain"
            className="animate-pulse"
          />
        </span>
        <ThreeBounce size={23} color="#15883e" />
      </div>
    </div>
  );
}

export default Loader;