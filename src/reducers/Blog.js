export const initialState = {
    loading: true,
    Blogs: [{
        title: 'what is javascript 🤹‍♂️ ?',
        content: 'javascript is awesome programming language',
        id: 1
    },
    {
        title: 'what is React ⚛️',
        content: 'React is awesome UI framework React is awesome UI framework',
        id: 2
    },
    {
        title: 'what is Vscode 💻',
        content: 'Vscode is awesome Code editor',
        id: 3
    }
    ]
}

const Blog = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BLOG':
            const newAddedBlog = [...state.Blogs, { ...action.payload, id: state.Blogs.length + 1 }] 
            return { ...state, Blogs: [...newAddedBlog], loading: true }
        case 'EDIT_BLOG':
            const { title, content, id } = action.payload
            const editedBlogList = state.Blogs.map((item) => {
                if (parseInt(id) === item.id) {
                    return ({ title, content, id })
                }
                return item
            })
            return { ...state, Blogs: [...editedBlogList], loading: false }
        case 'DELETE_BLOG':
            const updatedBlogList = state.Blogs.filter((item) => parseInt(action.payload.id) !== item.id)
            return { ...state, Blogs: [...updatedBlogList], loading: true }
        default:
            return state
    }
}


export default Blog 
