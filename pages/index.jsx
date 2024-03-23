import Head from 'next/head';

function HomePage() {
    return (
        <>
            <Head>
            <link
                href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900"
                rel="stylesheet"
            />
            </Head>
            <header className="header">
                <div className="header__logo-box">
                    <img src="/img/logo-white.png" alt="Logo" className="header__logo" />
                </div>

                <div className="header__text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary--main">Outdoors</span>
                        <span className="heading-primary--sub">is where life happens</span>
                    </h1>

                    <a href="#" className="btn btn--white btn--animated">Discover out tours</a>
                </div>
            </header>

            <main>
                <section className="section-about">
                    <div className="u-center-text u-margin-bottom-big">
                        <h2 className="heading-secondary">
                            Exciting tours for adventurous people
                        </h2>
                    </div>

                    <div className="row">
                        <div className="col-1-of-2">
                            <h3 className="heading-tertiary u-margin-bottom-small">
                                You're going to fall in love with nature
                            </h3>
                            <p className="paragraph">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui autem, sunt quas expedita ipsam tempora non error iusto ipsum quasi! Eligendi magni officiis nemo doloremque modi voluptas libero mollitia ad.
                            </p>

                            <h3 className="heading-tertiary u-margin-bottom-small">
                                Live adventures like you never have before
                            </h3>
                            <p className="paragraph">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni enim, sequi maxime eligendi labore totam, natus suscipit et praesentium id accusamus.
                            </p>

                            <a href="#" className="btn-text">
                                Learn more &rarr;
                            </a>

                        </div>
                        <div className="col-1-of-2">
                            <div className="composition">
                                <img src="/img/nat-1-large.jpg" alt="Photo 1" className="composition__photo composition__photo--p1" />
                                <img src="/img/nat-2-large.jpg" alt="Photo 2" className="composition__photo composition__photo--p2" />
                                <img src="/img/nat-3-large.jpg" alt="Photo 3" className="composition__photo composition__photo--p3" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-features">
                    <div className="row">
                        <div className="col-1-of-4">
                            <div className="feature-box">
                                <i className="feature-box__icon icon-basic-world"></i>
                                <h3 className="heading-tertiary u-margin-bottom-small">Explore the world</h3>
                                <p className="feature-box__text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quasi iure autem ullam voluptates.
                                </p>
                            </div>
                        </div>

                        <div className="col-1-of-4">
                            <div className="feature-box">
                                <i className="feature-box__icon icon-basic-compass"></i>
                                <h3 className="heading-tertiary u-margin-bottom-small">Meet nature</h3>
                                <p className="feature-box__text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quasi iure autem ullam voluptates.
                                </p>
                            </div>
                        </div>

                        <div className="col-1-of-4">
                            <div className="feature-box">
                                <i className="feature-box__icon icon-basic-map"></i>
                                <h3 className="heading-tertiary u-margin-bottom-small">Find your way</h3>
                                <p className="feature-box__text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quasi iure autem ullam voluptates.
                                </p>
                            </div>
                        </div>

                        <div className="col-1-of-4">
                            <div className="feature-box">
                                <i className="feature-box__icon icon-basic-heart"></i>
                                <h3 className="heading-tertiary u-margin-bottom-small">Live a healthier life</h3>
                                <p className="feature-box__text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quasi iure autem ullam voluptates.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                
            </main>
        </>
    );
}

export default HomePage;