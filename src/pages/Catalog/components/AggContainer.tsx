import { Aggregation } from "../types/aggegation.types";

export const AggContainer = (props: {
  agregations: Aggregation[];
  aggName: string;
  handleAgg: (aggKey: string, data: string, active: boolean) => void;
  querie: string | null;
}) => {
  const { agregations, aggName, handleAgg } = props;

  return (
    <div>
      <h3 className="mb-4 font-bold">{aggName}</h3>
      <ul className="flex flex-col gap-2 max-h-[400px] overflow-y-auto">
        {agregations.map((item, i) => (
          <li key={i}>
            <AggButton
              keyName={item.key}
              count={item.count}
              handleAgg={handleAgg}
              aggName={aggName}
              querie={props.querie}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

const AggButton = (props: {
  keyName: string;
  count: number;
  handleAgg: (aggKey: string, data: string, active: boolean) => void;
  aggName: string;
  querie?: string | null;
}) => {
  const handleClick = () => {
    props.handleAgg(
      props.aggName,
      props.keyName,
      props.querie !== props.keyName
    );
  };

  return (
    <button
      className={` text-sm text-white px-4 py-2 rounded border border-white hover:bg-gray-700 ${
        props.querie === props.keyName ? "bg-gray-700" : "bg-transparent"
      }`}
      onClick={handleClick}
    >
      <span>{props.keyName} </span>
      <span>({props.count})</span>
    </button>
  );
};
