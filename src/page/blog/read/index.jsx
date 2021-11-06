import React from 'react'
import { Delete_Blog} from "../../../action/Blog";
import { connect } from 'react-redux'
import { useParams, useHistory } from "react-router-dom";
import { Button } from 'react-bootstrap';
import "./index.css";

const ReadBlog = ({ dispatch, Blogs }) => {
    let { blogId } = useParams();
    let history = useHistory();
    let blog = Blogs.filter((item) => item.id === parseInt(blogId))
    return (
        <>
            <div className="singleBlog">
                <div className="header">
                    {
                        blog.map((blog) => {
                            if (blog) {
                                return (<>
                                    <h1 className='title'>{blog.title}</h1>
                                    <p className='content'>{blog.content}</p>
                                    <div className="btns">
                                        <Button variant="success" size='sm' type='button' style={{ 'marginRight': '10px' }} onClick={() => history.push(`/blog/edit/${blogId}`)}>Edit</Button>
                                        <Button variant="danger" size='sm' type='button' onClick={() => {
                                            dispatch(Delete_Blog(blogId))
                                            return history.push("/blog");
                                        }}> Delete</Button>
                                    </div>
                                </>)
                            }
                            return (<h1 className='title'>Blog not found 👻</h1>)
                        })
                    }
                </div>
            </div>
        </>
    )
}

// Map Redux state to React component props
const mapStateToProps = (state) => ({
    Blogs: state.Blogs.Blogs,
})

// Connect Redux to React
export default connect(mapStateToProps)(ReadBlog);

