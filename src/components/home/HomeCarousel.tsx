import * as React from 'react';
import Slider from 'react-slick';
import '../../../../node_modules/slick-carousel/slick/slick.css';
import '../../../../node_modules/slick-carousel/slick/slick-theme.css';
import makeStyles from '@material-ui/core/styles/makeStyles';

const HomeCarousel = () => {
    const settings = {
        className: 'center',
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
    };

    const useStyles = makeStyles((theme) => ({
        carousel: {
            backgroundColor: '#fff',
            width: '60%',
            height: '60%',
            margin: '0 auto',
        },
    }));

    const classes = useStyles();

    return (
        <div className={classes.carousel}>
            <h2> Single Item</h2>
            <Slider {...settings}>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
            </Slider>
        </div>
    );
};

export default HomeCarousel;
