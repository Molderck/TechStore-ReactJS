import React from 'react';
import Title from './Title';
import aboutBcg from '../../images/aboutBcg.jpeg';

export default function Info() {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <img src={aboutBcg} className="img-fluid img-thumbnail" alt="About" style={{ background: "var(--darkGrey)" }}></img>
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3">
                    </div>
                </div>
            </div>
            <Title title="About Us" />
        </section>
    )
}