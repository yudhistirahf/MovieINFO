import React from 'react'

const Home = (props) => {
    return (
        <div className="container">
            <div className="row">
                <section className="col s4 offset-s4">
                    {props.popularitySort}
                </section>
            </div>
        </div>
    )
}

export default Home;