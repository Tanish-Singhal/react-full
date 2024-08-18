const Card = ({ resData }) => {
  return (
    <div className="flex m-2 p-2 border w-72 text-white">
      <div>
        <img
          src={
            import.meta.env.VITE_SWIGGY_IMG_URL + resData.info.cloudinaryImageId
          }
        />
        <p>Name: {resData.info.name}</p>
        <p>Rating: {resData.info.avgRating}</p>
        <br />
        <p>Location: {resData.info.locality}</p>
        <br />
        <p>Cuisines: {resData.info.cuisines.join(", ")}</p>
      </div>
    </div>
  );
};

export const RatingBannerCard = (Card) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-rose-500 text-white font-bold p-2">
          4.5+
        </label>
        <Card {...props} />
      </div>
    );
  };
};

export default Card;
