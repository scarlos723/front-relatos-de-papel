import { Aggregation } from "../types/aggegation.types";

export const AggContainer = (props: {
  agregations: Aggregation[];
  aggName: string;
  handleAgg: (aggKey: string, data: string) => void;
}) => {
  const { agregations, aggName, handleAgg } = props;

  return (
    <div>
      <h3 className="mb-4 font-bold">{aggName}</h3>
      <ul className="flex flex-col gap-2 max-h-[400px] overflow-y-auto">
        {agregations.map((item, i) => (
          <li key={i}>
            <AggButton keyName={item.key} count={item.count} handleAgg={handleAgg} aggName={aggName} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const AggButton = (props: { keyName: string; count: number; handleAgg: (aggKey: string, data: string) => void; aggName: string }) => {
  return (
    <button className="bg-transparent text-sm text-white px-4 py-2 rounded border border-white hover:bg-gray-700" onClick={() => props.handleAgg(props.aggName, props.keyName)}>
      <span>{props.keyName} </span>
      <span>({props.count})</span>
    </button>
  );
};
