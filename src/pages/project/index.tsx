import { useState } from 'react';
import { Button, Grid, Notify } from 'zent';
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

function Project() {
    const [datasets, setDatasets] = useState(datalist);
    const addLine = () => {
      datasets.push({
        id: `id`,
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
            columns={getColumns()}
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