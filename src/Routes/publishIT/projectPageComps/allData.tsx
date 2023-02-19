import { tableDataList } from "./dataTest";
import { ProjectComps } from "./projectComps";

export const AllProjectData = (props: any) => {
  return <ProjectComps data={tableDataList} projectData={props.projectData} />;
};
