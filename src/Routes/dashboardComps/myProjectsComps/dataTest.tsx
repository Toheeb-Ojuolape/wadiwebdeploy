const tableData = {
    id: 0,
    name: "Analysis of Land use",
    size: Math.floor(Math.random() * 100),
    status: ["Reviewed", "Rejected", "Successful"][
      Math.floor(Math.random() * 3)
    ],
    time: `${Math.floor(Math.random() * 12 + 1)}:${Math.floor(
      Math.random() * 60
    )} AM`,
    date: `${Math.floor(Math.random() * 31 + 1)}/08/${
      2021 + Math.floor(Math.random() * 2)
    }`,
   
    progress: Math.floor(Math.random() * 100),
  };
  
  //create a list conatining 100 tabaleDatas
 export const tableDataList: any = [];
  for (let i = 0; i < 10000; i++) {
    const tableDataInstance = { ...tableData };
    tableDataInstance.id = i;
    tableDataInstance.size = Math.floor(Math.random() * 100);
    tableDataInstance.status =  ["Reviewed", "Rejected", "Successful"][
      Math.floor(Math.random() * 3)
    ];
    tableDataInstance.time = `${Math.floor(Math.random() * 12 + 1)}:${Math.floor(
      Math.random() * 60
    )} AM`;
    tableDataInstance.date = `${Math.floor(Math.random() * 31 + 1)}/08/${
      2021 + Math.floor(Math.random() * 2)
    }`;
    tableDataInstance.progress = Math.floor(Math.random() * 100);
   
    tableDataList.push(tableDataInstance);
    // add a unique id to each tableData
  
    tableDataList.push(tableData);
  }
