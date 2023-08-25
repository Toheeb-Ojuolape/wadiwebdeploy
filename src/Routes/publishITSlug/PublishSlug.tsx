import { Box, Flex, Spacer, useMediaQuery } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GoBack } from "./Components/LeftContainer/back";
import { LeftContainer } from "./Components/LeftContainer/LeftContainer";
import { ManuScriptReady } from "./Components/LeftContainer/manuscriptReady";
import { PaymentDetails } from "./Components/LeftContainer/paymentDetails";
import { ReviewInProgress } from "./Components/LeftContainer/reviewInProgress";
import { TopTab } from "./Components/LeftContainer/tobTabs";
import { RightContainer } from "./Components/RightContainer/RightContainer";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../db";
import { Project } from "../../Interface/ProjectInterface";

export const PublishSlug = (props: any) => {
  const history = useNavigate();
  interface ProjectData {
    manuscriptTitle?: string;
    researchField?: string;
    nameofJournal?: string;
    projectType?: string;
  }

  const [isMobile] = useMediaQuery("(max-width: 850px)");
  const [file] = useState<File[]>([]);
  const [progressLoading] = useState(0);
  const [projectData, setProjectData] = useState<ProjectData>();
  const [loading] = useState(false);
  const [project, setProject] = useState<Project>();
  const [page, setPage] = useState(props.page);
  const [pageList, setPageList] = useState<number[]>([0]);

  useEffect(() => {
    const docRef = doc(db, "projects", props.subroute);
    getDoc(docRef).then((response) => {
      if (response.exists()) {
        const projectData = response.data() as Project;
        setProject(projectData);
        setPage(response.data().step);
      }
    });
  }, [props]);

  const handleChange = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    setProjectData({ ...projectData, [name]: value });
    console.log(projectData);
  };

  const handleTabsChange = (index: number) => {
    setPage(index);
  };

  const onClick = () => {
    setPage(page + 1);
    setPageList([...pageList, page + 1]);
  };

  const goBack = () => {
    history(-1);
  };
  return (
    <Flex className="animate__animated animate__fadeIn" flexDirection={"row"}>
      <Box padding={"20px"} width={"100vw"} flexDirection={"column"}>
        <Box w="100px">
          <GoBack goBack={goBack} />
        </Box>
        <Flex flexDirection={"row"} flexWrap="wrap" mt="20px">
          <Box
            pt="0px"
            pl="0px"
            borderRadius="md"
            bg="white"
            w={!isMobile ? "60%" : "100%"}
          >
            <Flex>
              {pageList.map((page, index) => {
                return <TopTab key={index} />;
              })}
            </Flex>
            <Box className="flex  items-center justify-center">
              {page === 0 && (
                <LeftContainer
                  file={file}
                  handleChange={handleChange}
                  loading={loading}
                  progressLoading={progressLoading}
                />
              )}
              {page === 1 && <ReviewInProgress onClick={onClick} />}
              {page === 2 && project && (
                <PaymentDetails
                  userData={props.userData}
                  project={project}
                  onClick={onClick}
                />
              )}
              {page === 3 && <ReviewInProgress onClick={onClick} />}
              {page === 4 && project && (
                <ManuScriptReady project={project} />
              )}{" "}
            </Box>
          </Box>
          <Spacer />
          {!isMobile && (
            <Flex w={"240px"} mt={isMobile ? "20px" : ""}>
              <RightContainer
                tabIndex={page}
                handleTabsChange={handleTabsChange}
              />
            </Flex>
          )}
        </Flex>
      </Box>
    </Flex>
  );
};
