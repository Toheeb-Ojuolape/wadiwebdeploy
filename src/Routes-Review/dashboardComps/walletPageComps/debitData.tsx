import { Credit, Debit, tableDataList } from "./dataTest";
import { TransComps } from "./transactionComps";

export const DebitData = (props: any) => {
  return <TransComps data={Debit} />;
};
