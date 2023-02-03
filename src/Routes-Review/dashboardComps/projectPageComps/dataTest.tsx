const tableData = {
  id: 0,
  name: "Analysis of Land use",
  size: `${Math.floor(Math.random() * 600)} KB`,
  status: ["In review", "Uploaded", "Rejected", "Successful"][
    Math.floor(Math.random() * 4)
  ],
  time: `${Math.floor(Math.random() * 12 + 1)}:${Math.floor(
    Math.random() * 60
  )} AM`,
  date: `${Math.floor(Math.random() * 31 + 1)}/08/${
    2021 + Math.floor(Math.random() * 2)
  }`,
  plan: ["Regular", "Premium", "Standard"][Math.floor(Math.random() * 3)],
  price: `NGN${Math.floor(Math.random() * 100000) + 5000}`,
  progress: Math.floor(Math.random() * 100),
};

export const tableDataList: any = [];
for (let i = 0; i < 10000; i++) {
  const tableDataInstance = { ...tableData };
  tableDataInstance.id = i;
  tableDataInstance.size = `${Math.floor(Math.random() * 600)} KB`;
  tableDataInstance.status = [
    "In review",
    "Uploaded",
    "Rejected",
    "Successful",
  ][Math.floor(Math.random() * 4)];
  tableDataInstance.time = `${Math.floor(Math.random() * 12 + 1)}:${Math.floor(
    Math.random() * 60
  )} AM`;
  tableDataInstance.date = `${Math.floor(Math.random() * 31 + 1)}/08/${
    2021 + Math.floor(Math.random() * 2)
  }`;
  tableDataInstance.plan = ["Regular", "Premium", "Standard"][
    Math.floor(Math.random() * 3)
  ];
  tableDataInstance.price = `NGN${Math.floor(Math.random() * 100000) + 5000}`;
  tableDataInstance.progress =
    tableDataInstance.status === "Successful"
      ? 100
      : Math.floor(Math.random() * 100);

  tableDataList.push(tableDataInstance);

  tableDataList.push(tableData);
}

//create a list from the tableDataList where tableData.status is "Pending"
export const InReviewList = tableDataList.filter(
  (tableData: any) => tableData.status === "In review"
);

export const rejectedList = tableDataList.filter(
  (tableData: any) => tableData.status === "Rejected"
);

export const SuccessList = tableDataList.filter(
  (tableData: any) => tableData.status === "Successful"
);
