const tableData = {
  id: 0,
  name: "Analysis of Land use",
  size: `${Math.floor(Math.random() * 600)} KB`,
  status: [
    "Pending",
    "Uploaded",
    "Rejected",
    "Successful",
    "Reviewed",
  ][
    Math.floor(Math.random() * 5)
  ],
  time: `${Math.floor(Math.random() * 12 + 1)}:${Math.floor(
    Math.random() * 60
  )} AM`,
  date: `${Math.floor(Math.random() * 31 + 1)}/08/${
    2021 + Math.floor(Math.random() * 2)
  }`,
  plan: ["Regular", "Premium", "Standard"][Math.floor(Math.random() * 3)],
  price: `NGN${Math.floor(Math.random() * 100000) + 5000}`,
};

//create a list conatining 100 tabaleDatas
export const tableDataList: any = [];
for (let i = 0; i < 10000; i++) {
  const tableDataInstance = { ...tableData };
  tableDataInstance.id = i;
  tableDataInstance.size = `${Math.floor(Math.random() * 600)} KB`;
  tableDataInstance.status = [
    "Pending",
    "Uploaded",
    "Rejected",
    "Successful",
    "Reviewed",
  ][Math.floor(Math.random() * 5)];
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
  tableDataList.push(tableDataInstance);
  // add a unique id to each tableData

  tableDataList.push(tableData);
}
