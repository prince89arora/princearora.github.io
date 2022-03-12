export type Row = {
  column: Array<any>;
};
export type Root = {
  rows: Array<Row>;
};
export type LayoutConfig = {
  root: Root;
};

export type ApplicationContext = {
  layoutConfig: LayoutConfig;
};
