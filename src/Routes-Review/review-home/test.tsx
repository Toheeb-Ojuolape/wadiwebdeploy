import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import './test.css'

const Row = ({ index, style }: any) => (
  <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
    Row {index}
  </div>
);
export const Example = () => (
  <AutoSizer>
    {({ height, width }) => (
      <List
        className="List"
        height={height}
        itemCount={1000}
        itemSize={35}
        width={width}
      >
        {Row}
      </List>
    )}
  </AutoSizer>
);
