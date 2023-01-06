import httpCommon from "../http-common";
import ITutorialData from "../types/Tutorial";

const getAll = () => {
    return httpCommon.get<Array<ITutorialData>>("/tutorials");
};

const get = (id: any) => {
    return httpCommon.get<ITutorialData>(`/tutorials/${id}`);
};

const create = (data: ITutorialData) => {
    return httpCommon.post<ITutorialData>("/tutorial");
};

const update = (id: any, data: ITutorialData) => {
    return httpCommon.put<any>(`/tutorial/${id}`, data);
};

const remove = (id: any) => {
    return httpCommon.delete<any>(`/tutorial/${id}`);
};

const removeAll = () => {
    return httpCommon.delete<any>(`/tutorials`);
};

const findByTitle = (title: string) => {
    return httpCommon.get<Array<ITutorialData>>(`/tutorials?title=${title}`);
};

const TutorialService = {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByTitle
};

export default TutorialService;