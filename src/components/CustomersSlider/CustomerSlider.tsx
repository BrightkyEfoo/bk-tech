import "./style.scss";
import { useCustomerSlider } from "../../hooks/useCustomerSlider";
import { data } from "./mock-data";

const CustomerSlider = () => {
  const selected = useCustomerSlider(data);

  return (
    <div
      className="section6-container-sub-right"
      id="section6-container-sub-right-slider"
    >
      {data.map((el, i) => {
        return <CustomerDetails key={i} {...el} />;
      })}
      <Pagination lenght={data.length} selected={selected} />
    </div>
  );
};

type CustomerDetailsProps = {
  text: string;
  photo: string;
  name: string;
  poste: string;
};
const CustomerDetails = ({
  text,
  photo,
  name,
  poste,
}: CustomerDetailsProps) => {
  return (
    <div className="customer-details-container">
      <p>{text}</p>
      <img src={photo} alt="" />
      <div>
        <p className="name">{name}</p>
        <p className="poste">{poste}</p>
      </div>
      <span>"</span>
    </div>
  );
};

type PaginationProps = { lenght: number; selected: number };
const Pagination = ({ lenght, selected }: PaginationProps) => {
  return (
    <div className="pagination-container">
      {Array(lenght)
        .fill(0)
        .map((el, i) => {
          return (
            <div
              key={i}
              className={
                i === selected ? "pagination-selected" : "pagination-simple"
              }
            >
              <span></span>
            </div>
          );
        })}
    </div>
  );
};

export default CustomerSlider;
