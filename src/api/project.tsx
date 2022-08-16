import client from "../utils/axios";

export async function getProjectList(id: number) {
    const res = await client.get(`/project/${id}`);
    return res;
}

export async function udpateProjectState(data: any) {
    const res = await client.post('/update/object/state', data);
    return res
}