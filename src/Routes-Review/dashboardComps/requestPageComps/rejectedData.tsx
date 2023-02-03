import { rejectedList, tableDataList } from "./dataTest";
import { RequestComps } from "./requestComps";

export const RejectedData = (props: any) => {
    return (<RequestComps data={rejectedList}/>)
};
