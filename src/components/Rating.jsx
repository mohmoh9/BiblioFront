export default function Rating({ rating, setRating }) {
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= rating ? "star active" : "star"}
          onClick={() => setRating(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
}
