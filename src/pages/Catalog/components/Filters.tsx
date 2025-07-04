const Filters = (props: {
  queries: object;
  cleanFilter: (query: string) => void;
}) => {
  const { queries, cleanFilter } = props;
  return (
    <div>
      <h5 className="mb-2">
        <strong>Filtros:</strong>
      </h5>
      {(Object.keys(queries) as (keyof typeof queries)[]).map(
        (item) =>
          queries[item] && (
            <div
              className="flex items-center justify-between mb-4 text-gray-500 border border-gray-500  px-2 rounded-md"
              key={item}
            >
              <h3 className="font-bold">{queries[item]}</h3>
              <button
                className="text-red-300 hover:text-red-100"
                onClick={() => {
                  cleanFilter(item);
                }}
              >
                Limpiar X
              </button>
            </div>
          )
      )}
    </div>
  );
};

export default Filters;
