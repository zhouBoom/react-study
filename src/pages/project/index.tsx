import { useCallback, useMemo, useState } from 'react';
import { Button, Grid, Notify, Select } from 'zent';
import { getColumns } from '../../config/project';

let datalist = []
for (let i = 0; i < 10; i++) {
    datalist.push({
      id: `id-${i}`,
      proName: `项目 ${i}`,
      descripton: `项目介绍-${i}`,
      phase: '1',
      total: i * 10
    });
}
const options = [
    { key: '1', text: 'N/A' },
    { key: '2', text: 'Design Devlopment' },
    { key: '3', text: 'Schematic Design' },
    { key: '4', text: 'Construction Administration' }
  ];

function Project() {
    const [datasets, setDatasets] = useState(datalist);

    const phaseOnChange = rowIndex => value => {
        setDatasets(prev => {
            return prev.map((row, idx) => {
                if(rowIndex == idx) {
                    console.log(row)
                    return {
                        ...row,
                        phase: value.key
                    }
                }
                return row;
              });
        })
    }
    
    const columns = useMemo(() => {
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
                const item = options.find(item => item.key == data.phase)
                return (
                <Select
                    placeholder="选择一项"
                    options={options}
                    value={item}
                    onChange={phaseOnChange(row)}
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
    ]}, [phaseOnChange]) 

    const addLine = () => {
      datasets.push({
        id: `id${datasets.length}`,
        proName: `项目`,
        descripton: `项目介绍`,
        phase: '2',
        total: 10
      })
      setDatasets([...datasets])
    }
    return (
        <>
          <Button onClick={addLine}>添加</Button>
          <Grid
            columns={columns}
            datasets={datasets}
            rowClassName={(data, index) => `${data.id}-${index}`}
            bordered
            scroll={{ x: 1400}}
            rowKey="id"
            size="large"
        />
        </>
        
    )
}

export default Project;