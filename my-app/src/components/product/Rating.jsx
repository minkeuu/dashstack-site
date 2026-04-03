const stars = [1, 2, 3, 4, 5];
import Star from "../../assets/misc/Star.svg";
import GrayStar from "../../assets/misc/Gray Star.svg";
export default function Rating({ rating, number }) {
  return (
    <div className="flex items-center gap-1">
      {stars.map((num, i) => (
        <img
          key={i}
          src={num <= rating ? Star : GrayStar}
          alt=""
          className="w-4 h-4"
        />
      ))}
    <span className="text-white/80">({number})</span>
    </div>
  );
}
