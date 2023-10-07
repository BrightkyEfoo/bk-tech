import Rating from "@mui/material/Rating";
import { FaQuoteLeft } from "react-icons/fa";
type Props = {
  image: string;
  desc: string;
  name: string;
  subDesc: string;
  stars: number;
};
const Card5 = ({ desc, image, name, stars, subDesc }: Props) => {
  return (
    <div className="service-about-5">
      <div>
        <FaQuoteLeft size={40} />
        <img src={image} alt="" />
      </div>
      <p className="simple-about-p">{desc}</p>
      <div>
        <h5>{name}</h5>
        <p>{subDesc}</p>
        <Rating name="read-only" value={stars} readOnly={true} />
      </div>
    </div>
  );
};

export default Card5;
