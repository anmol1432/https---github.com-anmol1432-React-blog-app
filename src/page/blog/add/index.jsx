import React, { useState } from 'react'
import { Add_Blog } from "../../../action/Blog";
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";
import { Button, Form } from 'react-bootstrap';
import "./index.css";

const AddBlog = ({ dispatch }) => {
    let history = useHistory();
    const [blogValue, setBlogValue] = useState({
        title: '',
        content: ''
    })
    return (
        <>
            <div className='form-cont'>
                <h1 className='heading'>Write Blog ✏️ </h1>
                <div>
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Label column='lg'>Title 👾</Form.Label>
                            <Form.Control type="text"
                                placeholder="Title..."
                                size='lg'
                                onChange={(e) => setBlogValue((prev) => {
                                    return ({ ...prev, title: e.target.value })
                                })}
                                value={blogValue.title} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label column='lg'> Content Area</Form.Label>
                            <Form.Control as="textarea"
                                row={3}
                                onChange={(e) => setBlogValue((prev) => {
                                    return ({ ...prev, content: e.target.value })
                                })}
                                value={blogValue.content} />
                        </Form.Group>
                        <Form.Group className="done-btn">
                            <Button
                                onClick={() => {
                                    dispatch(Add_Blog(blogValue.title, blogValue.content))
                                    return history.push(`/blog/`);
                                }}
                                variant="success"
                                size='md'
                                type='button'>Done</Button>
                        </Form.Group>
                    </Form>
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
export default connect(mapStateToProps)(AddBlog);
