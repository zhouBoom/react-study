import { Select } from "zent";

const options = [
    { key: '1', text: 'N/A' },
    { key: '2', text: 'Design Devlopment' },
    { key: '3', text: 'Schematic Design' },
    { key: '4', text: 'Construction Administration' }
  ];
export function getColumns() {
  return [
    {
        title: "项目ID",
        name: "id",
        width: 100,
        fixed: true,
    },
    {
      title: "项目名称",
      name: "proName",
      width: 100
    },
    {
        title: "阶段",
        name: "phase",
        width: 300,
        bodyRender(data, { row }) {
            const item = {
                key: '2', text: 'Design Devlopment'
            }
            return (
            <Select
                placeholder="选择一项"
                options={options}
                value={item}
                clearable
            />
            );
          },
      },
    {
        title: "介绍",
        name: "descripton",
        width: 100
    },
    {
        title: "TOTAL",
        name: "total",
        width: 100
    },
    {
        title: '',
        name: 'vacation',
        children: [
            {
                title: "SUN",
                name: "sum",
                width: 60, 
            },
            {
                title: "MON",
                name: "mon",
                width: 60, 
            },
        ]
    },
    {
        title: 'DAY OF THE WEEK',
        name: 'weekday',
        children: [
            {
                title: "TUE",
                name: "tue",
                width: 60, 
            },
            {
                title: "WED",
                name: "wed",
                width: 60, 
            },
            {
                title: "THU",
                name: "thu",
                width: 60, 
            },
            {
                title: "FRI",
                name: "fri",
                width: 60, 
            },
            {
                title: "SAT",
                name: "sat",
                width: 60, 
            }
        ]
    }
  ];
};
