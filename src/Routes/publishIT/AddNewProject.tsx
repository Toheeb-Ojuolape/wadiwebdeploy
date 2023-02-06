import { Box, Flex, Spacer, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoBack } from "../publishITComps/LeftContainer/back";

import { LeftContainer } from "../publishITComps/LeftContainer/LeftContainer";
import { ManuScriptReady } from "../publishITComps/LeftContainer/manuscriptReady";
import { PaymentDetails } from "../publishITComps/LeftContainer/paymentDetails";
import { ReviewInProgress } from "../publishITComps/LeftContainer/reviewInProgress";

import { TopTab } from "../publishITComps/LeftContainer/tobTabs";
import { RightContainer } from "../publishITComps/RightContainer/RightContainer";

export const AddNewProject = () => {
  const navigate = useNavigate();
  const [isMobile] = useMediaQuery("(max-width: 850px)");
  const [file, setFile] = useState<File[]>([]);
  const uploadFile = (file: any) => {
    setFile(file);
  };
  const [page, setPage] = useState(0);
  const [pageList, setPageList] = useState<number[]>([0]);

  const onClick = () => {
    setPage(page + 1);
    setPageList([...pageList, page + 1]);
  };

  const goBack = () => {
    if (page > 0) {
      setPage(page - 1);
      setPageList(pageList.slice(0, pageList.length - 1));
    } else {
      navigate(-1);
    }
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
                  uploadFile={uploadFile}
                  onClick={onClick}
                />
              )}
              {page === 1 && <PaymentDetails onClick={onClick} />}
              {page === 2 && <ReviewInProgress onClick={onClick} />}
              {page === 3 && <ManuScriptReady />}{" "}
            </Box>
          </Box>
          <Spacer />
          {!isMobile && (
            <Flex w={"240px"} mt={isMobile ? "20px" : ""}>
              <RightContainer />
            </Flex>
          )}
        </Flex>
      </Box>
    </Flex>
  );
};
