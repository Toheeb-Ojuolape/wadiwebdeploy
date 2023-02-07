const tableData = {
  id: 0,
  name: "1f0538a5050f46daa906c",

  activity: ["Credit", "Debit"][Math.floor(Math.random() * 2)],
  narration: "Lorem ipsum dolor sit amet",
  time: `${Math.floor(Math.random() * 12 + 1)}:${Math.floor(
    Math.random() * 60
  )} AM`,
  date: `${Math.floor(Math.random() * 31 + 1)}/08/${
    2021 + Math.floor(Math.random() * 2)
  }`,
  amount: `NGN${Math.floor(Math.random() * 100000) + 5000}`,
};

export const tableDataList: any = [];
for (let i = 0; i < 10000; i++) {
  const tableDataInstance = { ...tableData };
  tableDataInstance.id = i;

  tableDataInstance.activity = ["Credit", "Debit"][
    Math.floor(Math.random() * 2)
  ];
  tableDataInstance.time = `${Math.floor(Math.random() * 12 + 1)}:${Math.floor(
    Math.random() * 60
  )} AM`;
  tableDataInstance.date = `${Math.floor(Math.random() * 31 + 1)}/08/${
    2021 + Math.floor(Math.random() * 2)
  }`;

  tableDataInstance.amount = `NGN${Math.floor(Math.random() * 100000) + 5000}`;

  tableDataList.push(tableDataInstance);

  tableDataList.push(tableData);
}

//create a list from the tableDataList where tableData.status is "Pending"
export const Credit = tableDataList.filter(
  (tableData: any) => tableData.activity === "Credit"
);

export const Debit = tableDataList.filter(
  (tableData: any) => tableData.activity === "Debit"
);

