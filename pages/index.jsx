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
                
                <section className="section-tours">
                    <div className="u-center-text u-margin-bottom-big">
                        <h2 className="heading-secondary">
                            Most popular tours
                        </h2>
                    </div> 
                    <div class="row">
                        <div class="col-1-of-3">
                            <div className="card">
                                <div className="card__side card__side--front card__side--front-1">
                                    <div className="card__picture card__picture--1">
                                        &nbsp;
                                    </div>
                                    <h4 className="card__heading">
                                        <span className="card__heading-span card__heading-span--1">
                                            The Sea Explorer  
                                        </span>
                                    </h4>
                                    <div className="card__details">
                                        <ul>
                                            <li>3 day tours</li>
                                            <li>Up to 30 people</li>
                                            <li>2 tour guides</li>
                                            <li>Sleep in cozy hotels</li>
                                            <li>Difficulty: easy</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card__side card__side--back card__side--back-1">
                                    <div className="card__cta">
                                        <div className="card__price-box">
                                            <p className="card__price-only">Only</p>
                                            <p className="card__price-value">$297</p>
                                        </div>
                                        <a href="#" className="btn btn--white">Book now!</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-1-of-3">
                        <div className="card">
                                <div className="card__side card__side--front card__side--front-2">
                                    <div className="card__picture card__picture--2">
                                        &nbsp;
                                    </div>
                                    <h4 className="card__heading">
                                        <span className="card__heading-span card__heading-span--2">
                                            The Forest Hiker  
                                        </span>
                                    </h4>
                                    <div className="card__details">
                                        <ul>
                                            <li>7 day tours</li>
                                            <li>Up to 40 people</li>
                                            <li>6 tour guides</li>
                                            <li>Sleep in provided tents</li>
                                            <li>Difficulty: medium</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card__side card__side--back card__side--back-2">
                                    <div className="card__cta">
                                        <div className="card__price-box">
                                            <p className="card__price-only">Only</p>
                                            <p className="card__price-value">$597</p>
                                        </div>
                                        <a href="#" className="btn btn--white">Book now!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-1-of-3">
                        <div className="card">
                                <div className="card__side card__side--front card__side--front-3">
                                    <div className="card__picture card__picture--3">
                                        &nbsp;
                                    </div>
                                    <h4 className="card__heading">
                                        <span className="card__heading-span card__heading-span--3">
                                            The Snow Adventurer 
                                        </span>
                                    </h4>
                                    <div className="card__details">
                                        <ul>
                                            <li>5 day tours</li>
                                            <li>Up to 15 people</li>
                                            <li>3 tour guides</li>
                                            <li>Sleep in provided tents</li>
                                            <li>Difficulty: hard</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card__side card__side--back card__side--back-3">
                                    <div className="card__cta">
                                        <div className="card__price-box">
                                            <p className="card__price-only">Only</p>
                                            <p className="card__price-value">$897</p>
                                        </div>
                                        <a href="#" className="btn btn--green">Book now!</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="u-center-text u-margin-top-huge">
                            <a href="#" className="btn btn--green">Discover all tours</a>
                    </div>    
                </section>

                    <section className="section-stories">
                        <div className="bg-video">
                            <video className="bg-video__content" autoPlay loop muted>
                                <source src="img/video.mp4" type="video/mp4" />
                                <source src="img/video.webm" type="video/webm" />
                                Your browser is not supported
                            </video>
                        </div>
                        <div className="u-center-text u-margin-bottom-big">
                            <h2 className="heading-secondary">
                                We made people genuinely happy
                            </h2>
                        </div>

                            <div className="row">
                                <div className="story">
                                    <figure className="story__shape">
                                        <img src="img/nat-8.jpg" alt="Person on a tour" className="story__img"/>
                                        <figcaption className="story__caption">Mary Smith</figcaption>
                                    </figure>
                                       <div className="story__text">
                                            <h3 className="heading-tertiary u-margin-bottom-small">
                                                I had the best week ever with my family
                                            </h3>
                                            <p>
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, molestiae possimus placeat neque, recusandae dolor esse soluta magnam accusamus aliquam vero cupiditate minima? Dignissimos ad aliquid!
                                            </p>
                                        </div> 
                                </div>
                            </div>

                            <div className="row">
                                <div className="story">
                                        <figure className="story__shape">
                                            <img src="img/nat-9.jpg" alt="Person on a tour" className="story__img"/>
                                            <figcaption className="story__caption">Jack Wilson</figcaption>
                                        </figure>
                                        <div className="story__text">
                                            <h3 className="heading-tertiary u-margin-bottom-small">
                                                WOW! My life is completely different now
                                            </h3>
                                            <p>
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, molestiae possimus placeat neque, recusandae dolor esse soluta magnam accusamus aliquam vero cupiditate minima? Dignissimos ad aliquid!
                                            </p>
                                        </div> 
                                </div>
                            </div>

                            <div className="u-center-text u-margin-top-huge">
                                <a href="#" className="btn-text">Read all stories &rarr; </a>
                            </div>
                    </section>

            </main>

            {/*  Row Column Template            
         <section class="grid-test">
            <div class="row">
                <div class="col-1-of-2">
                    Col 1 of 2
                </div>
                <div class="col-1-of-2">
                    Col 1 of 2
                </div>
            </div>

            <div class="row">
                <div class="col-1-of-3">
                    Col 1 of 3
                </div>
                <div class="col-1-of-3">
                    Col 1 of 3
                </div>
                <div class="col-1-of-3">
                    Col 1 of 3
                </div>
            </div>

            <div class="row">
                <div class="col-1-of-3">
                    Col 1 of 3
                </div>
                <div class="col-2-of-3">
                    Col 2 of 3
                </div>
            </div> 

            <div class="row">
                <div class="col-1-of-4">
                    Col 1 of 4
                </div>
                <div class="col-1-of-4">
                    Col 1 of 4
                </div>
                <div class="col-1-of-4">
                    Col 1 of 4
                </div>
                <div class="col-1-of-4">
                    Col 1 of 4
                </div>
            </div>

            <div class="row">
                <div class="col-1-of-4">
                    Col 1 of 4
                </div>
                <div class="col-1-of-4">
                    Col 1 of 4
                </div>
                <div class="col-2-of-4">
                    Col 2 of 4
                </div>
            </div>
            
            <div class="row">
                <div class="col-1-of-4">
                    Col 1 of 4
                </div>
                <div class="col-3-of-4">
                    Col 3 of 4
                </div>
         </section>
             */}
        </>
    );
}

export default HomePage;