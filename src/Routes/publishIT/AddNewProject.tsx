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
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../db";
import slugify from "slugify";
import moment from "moment";
import Swal from "sweetalert2";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { getProject } from "../../store/projectReducer";

export const AddNewProject = (props:{page: number}) => {
  const history = useNavigate();
  interface ProjectData {
    manuscriptTitle?: string;
    researchField?: string;
    nameofJournal?: string;
    projectType?: string;
  }

  const navigate = useNavigate();
  const [isMobile] = useMediaQuery("(max-width: 850px)");
  const [file, setFile] = useState<File[]>([]);
  const [progressLoading, setProgressLoading] = useState(0);
  const [projectData, setProjectData] = useState<ProjectData>();
  const [uploadedFile, setUploadedFile] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const uploadFile = (fileData: any) => {
    setFile(fileData);
    setProgressLoading(10);
    const storage = getStorage();
    const file = new Blob([fileData], { type: "application/msword" }); // fileData is the contents of the .doc file
    const storageRef = ref(storage, projectData?.manuscriptTitle);

    uploadBytes(storageRef, file)
      .then(() => {
        console.log("File uploaded successfully!");
        setProgressLoading(100);
        getDownloadURL(storageRef)
          .then((url) => {
            console.log("Download URL: ", url);
            setUploadedFile(url);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.error("Error uploading file: ", error);
      });
  };

  const handleChange = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    setProjectData({ ...projectData, [name]: value });
    console.log(projectData);
  };

  const submitProject = () => {
    const manuscriptTitle: string | undefined = projectData?.manuscriptTitle;

    if (
      projectData?.manuscriptTitle === undefined ||
      projectData?.researchField === undefined ||
      projectData?.nameofJournal === undefined ||
      projectData?.projectType === undefined ||
      uploadedFile === ""
    ) {
      Swal.fire({
        icon: "info",
        title: "Submission Incomplete",
        text: "You need to fill in all the details of your project before you can submit",
        confirmButtonColor: "#2b5fd0",
      });
      return;
    }

    setLoading(true);
    const slug: string | undefined = manuscriptTitle
      ? slugify(manuscriptTitle, {
          replacement: "-",
          lower: true,
          remove: /[$*_+~.()'"!?\-:@]/g,
        })
      : "";

    const projectPayload = {
      title: projectData?.manuscriptTitle,
      slug: slug,
      field: projectData?.researchField,
      journal: projectData?.nameofJournal,
      type: projectData?.projectType,
      date: moment(Date.now()).format("LLL"),
      file: uploadedFile,
      status: "Under Review",
      progress: "10",
      step: 2,
      author: localStorage.getItem("wadiKey"),
      timestamp: Date.now(),
    };

    console.log(projectPayload);

    const docRef = doc(db, "projects", slug);
    setDoc(docRef, projectPayload)
      .then(() => {
        setLoading(false);
        dispatch(getProject());
        Swal.fire({
          icon: "success",
          title: "Manuscript Uploaded Successfully",
          text: "You have successfully uploaded your manuscript for review. You would receive a follow-up email from us regarding the status of your submission",
          confirmButtonColor: "#2b5fd0",
        }).then(() => {
          history("/dashboard/home");
        });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };
  const [page, setPage] = useState(props.page);

  const [pageList, setPageList] = useState<number[]>([0]);

  // const handleTabsChange = (index: number) => {
  //   setPage(index);
  // };

  const onClick = () => {

    // setPage(page + 1);
    // setPageList([...pageList, page + 1]);
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
                return <TopTab  key={index} />;
              })}
            </Flex>
            <Box className="flex  items-center justify-center">
              {page === 0 && (
                <LeftContainer
                  file={file}
                  uploadFile={uploadFile}
                  handleChange={handleChange}
                  onClick={submitProject}
                  loading={loading}
                  progressLoading={progressLoading}
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
              <RightContainer
                tabIndex={page}
                // handleTabsChange={handleTabsChange}
              />
            </Flex>
          )}
        </Flex>
      </Box>
    </Flex>
  );
};
