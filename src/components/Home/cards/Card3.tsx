type Props = {
  type: string;
  text1: string;
  text2: string;
  image: string;
};
const Card3 = ({ type, text1, text2, image }: Props) => {
  return (
    <div className={"card-3 card-3-" + type}>
      <div>
        <img src={image} alt="card-3"/>
      </div>
      <p>{text1}</p>
      <span>{text2}</span>
    </div>
  );
};

export default Card3;
