export const TAG_ADD = 'TAG_ADD';
export const TAG_EDIT = 'TAG_EDIT';
export const TAG_DELETE = 'TAG_DELETE';

export const addTag = (tag) => {
    return {
        type: TAG_ADD,
        tag,
    };
};

export const editTag = (tag) => {
    return {
        type: TAG_EDIT,
        tag,
    };
};

export const deleteTag = (id) => {
    return {
        type: TAG_DELETE,
        id,
    };
};
