import React from 'react'
import { Button } from 'react-bootstrap'

export default function FeaturedPosts() {
    return (
        <div>
            <hr />
            <div className="list py-5 font-color-primary text-left">
                <div className="d-flex justify-content-between w-100 mb-1 p-4 text-left">
                    <h3 className="h3 ">Featured</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24" /></g><g><path d="M16,9V4l1,0c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H7C6.45,2,6,2.45,6,3v0 c0,0.55,0.45,1,1,1l1,0v5c0,1.66-1.34,3-3,3h0v2h5.97v7l1,1l1-1v-7H19v-2h0C17.34,12,16,10.66,16,9z" fill-rule="evenodd" /></g></svg>        </div>

                <div className="list-item d-flex text-left">
                    <div className="featured-post-link d-flex justify-content-between w-100 side-nav-link p-4 text-left">
                        <figure>
                            <figcaption className='mb-2'>Company</figcaption>
                            <blockquote >
                                <p>A well-known quote, contained in a blockquote element.</p>
                            </blockquote>
                        </figure>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z" /></svg>
                    </div>
                </div>
                <div className="list-item d-flex text-left">
                    <div className="featured-post-link d-flex justify-content-between w-100 side-nav-link p-4 text-left">
                        <figure>
                            <figcaption className='mb-2'>Business</figcaption>
                            <blockquote >
                                <p>A well-known quote, contained in a blockquote element.</p>
                            </blockquote>
                        </figure>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z" /></svg>
                    </div>
                </div>
                <div className="list-item d-flex text-left">
                    <div className="featured-post-link d-flex justify-content-between w-100 side-nav-link p-4 text-left">
                        <figure>
                            <figcaption className='mb-2'>Designs</figcaption>
                            <blockquote >
                                <p>A well-known quote, contained in a blockquote element.</p>
                            </blockquote>
                        </figure>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z" /></svg>
                    </div>
                </div>
            </div>
            <Button variant='light' className='btn-outline-secondary w-75 p-3 m-3'> All Featured Posts</Button>
        </div>
    )
}
