import { Aggregation } from "../types/aggegation.types";

export const AggContainer = (props: {
  agregations: Aggregation[];
  aggName: string;
}) => {
  const { agregations, aggName } = props;
  return (
    <div>
      <h3 className="mb-4 font-bold">{aggName}</h3>
      <ul className="flex flex-col gap-2 max-h-[400px] overflow-y-auto">
        {agregations.map((item, i) => (
          <li key={i}>
            <AggButton keyName={item.key} count={item.count} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const AggButton = (props: { keyName: string; count: number }) => {
  return (
    <button className="bg-transparent text-sm text-white px-4 py-2 rounded border border-white hover:bg-gray-700">
      <span>{props.keyName} </span>
      <span>({props.count})</span>
    </button>
  );
};
