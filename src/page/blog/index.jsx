import React from 'react'
import Blog from "../../components/blog/index";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import './index.css';

const AllBlog = ({Blogs }) => {

    return (
        <>
            <div className='blog-lst'>
                <h1 className='heading'>Blogs </h1>
                {
                    Blogs.map((item) => {
                        return (<>
                            <Link to={`/blog/read/${item.id}`}><Blog title={item.title} content={item.content} /></Link>
                        </>)
                    })
                }
            </div>
        </>
    )
}

// Map Redux state to React component props
const mapStateToProps = (state) => ({
    Blogs: state.Blogs.Blogs,
})

// Connect Redux to React
export default connect(mapStateToProps)(AllBlog);