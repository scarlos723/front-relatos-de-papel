export interface Aggregations {
  categories_agg: Aggregation[];
  rating_agg: Aggregation[];
  price_agg: Aggregation[];
}

export interface Aggregation {
  key: string;
  count: number;
}
