import { MdStarRate } from "react-icons/md";

export const StarsGroup = (props: { rating: number }) => {
  const { rating } = props;
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, index) => (
        <div
          key={index}
          className={`text-yellow-500 ${
            index < rating ? "text-yellow-500" : "text-gray-400"
          }`}
        >
          <MdStarRate />
        </div>
      ))}
    </div>
  );
};
