const addBlog = 'ADD_BLOG'
const deleteBlog = 'DELETE_BLOG'
const editBlog = 'EDIT_BLOG'

export const Add_Blog = (title, content, id) => {
    return ({
        type: addBlog,
        payload: {
            title,
            content
        }
    })
}

export const Edit_Blog = (title, content, id) => {
    return ({
        type: editBlog,
        payload: {
            title,
            content,
            id,
        }
    })
}

export const Delete_Blog = (id) => {
    return ({
        type: deleteBlog,
        payload: { id: id }
    })
}