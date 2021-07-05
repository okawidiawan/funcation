import React from 'react';
import ImageHero from 'assets/images/img-hero.jpg';
import ImageHero_ from 'assets/images/img-hero-frame.jpg';
import IconCities from 'assets/images/icons/icon_cities.svg';
import IconTraveler from 'assets/images/icons/icon_traveler.svg';
import IconDestination from 'assets/images/icons/icon_destination.svg';
import Button from 'elements/Button';
import formatNumber from 'utils/formatNumber';


export default function Hero(props) {
    function showMostPicked() {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: "smooth"
        })
    }

    return (
        <section className="container pt-4">
            <div className="row align-items-center">
                <div className="col-auto pr-2" style={{ width: 555 }}>
                    <h1 className="font-weight-bold line-height-1 mb-3">
                        forget the busy work, <br />
                        get <span style={{ color: '#294ADD' }}>fun</span> your next <span style={{ color: '#294ADD' }}>vacation</span>
                    </h1>
                    <p className="mb-4 font-weight-light text-gray-500" style={{ lineHeight: "170%" }}>
                        we provide what you need to enjoy your holiday with family.
                        <br />time to make another memorable moment
                        <br />money can return, but not with time
                    </p>
                    <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>
                        show me now
                    </Button>

                    <div className="row" style={{ marginTop: 60 }}>
                        <div className="col-auto" style={{ marginRight: 35 }}>
                            <img
                                width="36"
                                height="36"
                                src={IconTraveler}
                                alt={`${props.data.travelers} Travelers`}
                            />
                            <h6 className="mt-3">
                                {formatNumber(props.data.travelers)}{" "}
                                <span className="text-gray-500 font-weight-light">
                                    travelers
                                </span>
                            </h6>
                        </div>

                        <div className="col-auto" style={{ marginRight: 35 }}>
                            <img
                                width="36"
                                height="36"
                                src={IconCities}
                                alt={`${props.data.cities} Cities`}
                            />
                            <h6 className="mt-3">
                                {formatNumber(props.data.cities)}{" "}
                                <span className="text-gray-500 font-weight-light">
                                    cities
                                </span>
                            </h6>
                        </div>

                        <div className="col-auto">
                            <img
                                width="36"
                                height="36"
                                src={IconDestination}
                                alt={`${props.data.destination} Destination`}
                            />
                            <h6 className="mt-3">
                                {formatNumber(props.data.destination)}{" "}
                                <span className="text-gray-500 font-weight-light">
                                    destination
                                </span>
                            </h6>
                        </div>
                    </div>
                </div>

                <div className="col-6 pl-5">
                    <div style={{ width: 520, height: 408 }}>
                        <img
                            src={ImageHero}
                            alt="Room"
                            className="img-fluid position-absolute"
                            style={{ zIndex: 1, width: 520, height: 375 }}
                        />
                        <img
                            src={ImageHero_}
                            alt="Room Frame"
                            className="img-fluid position-absolute"
                            style={{ margin: '30px 0 0 30px', width: 520, height: 375 }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
