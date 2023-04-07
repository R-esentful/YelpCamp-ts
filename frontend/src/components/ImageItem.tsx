import { AiFillCloseCircle } from "react-icons/ai";

interface Image {
  source: string;
  remove: (name: string) => void;
}

function ImageItem({ source, remove }: Image) {
  return (
    <div className="relative w-[120px] h-[120px] flex justify-center content-center">
      <div>
        <button className="absolute top-1 right-2" onClick={() => remove(source)}>
          <AiFillCloseCircle size={20} color="#E93A45" />
        </button>
      </div>
      <img src={source} alt="" className="rounded-xl w-full max-h-full" />
    </div>
  );
}
export default ImageItem;
