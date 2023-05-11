import { useRecoilState } from "recoil";
import { playState, playingTrackState } from "../atom/playAtom";

interface RecentlyPlayedProps {
  track: any;
  chooseTrack: any;
}
const RecentlyPlayed = ({ track, chooseTrack }: RecentlyPlayedProps) => {
  const [play, setPlay] = useRecoilState(playState);
  const [playingTrack, setPlayingTrack] =
    useRecoilState<any>(playingTrackState);
  const handlePlay = () => {
    chooseTrack(track);
    if (track.id === playingTrack.id) {
      setPlay(!play);
    }
  };
  return (
    <div className=" flex items-center space-x-3" onClick={handlePlay}>
      <img
        src={track.albumUrl}
        alt=""
        className="rounded-full w-[52px] h-[52px]"
      />
      <div className="">
        <h4 className="text-white text-[13px] mb-0.5 font-semibold hover:underline cursor-pointer truncate max-w-[50px]">
          {track.title}
        </h4>
        <h4 className="text-xs text-[#686868] font-bold cursor-pointer hover:underline">
          {track.artist}
        </h4>
      </div>
    </div>
  );
};

export default RecentlyPlayed;
