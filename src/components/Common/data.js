const countries = [
  { id: "vn", label: "Việt Nam" },
  { id: "us", label: "Mỹ" },
];
const regions = [
  {
    id: "vn",
    title: "Việt Nam",
    labels: [
      {
        id: 0,
        label: "Cau Giay",
      },
      {
        id: 1,
        label: "Thanh Xuan",
      },
      {
        id: 2,
        label: "Dong Da",
      },
    ],
  },
  {
    id: "us",
    title: "Mỹ",
    labels: [
      {
        id: 0,
        label: "California",
      },
      {
        id: 1,
        label: "Florida",
      },
      {
        id: 2,
        label: "Georgia",
      },
    ],
  },
];

const regulatoryAML = [
  { id: 0, label: "AML 0" },
  { id: 1, label: "AML 1" },
  { id: 2, label: "AML 2" },
];
const regulatorySec = [
  { id: 0, label: "Sec 0" },
  { id: 1, label: "Sec 1" },
  { id: 2, label: "Sec 2" },
];

export { countries, regions, regulatoryAML, regulatorySec };
