import { tableDataList } from "./dataTest";
import { TransComps } from "./transactionComps";

export const AllProjectData = (props: any) => {
  return <TransComps data={tableDataList} />;
};
