import React from 'react';
import developer from './assets/Images/crew.jpg';
import designer from './assets/Images/ship.jpg';
import Page2 from './Page2';
import Page3 from './Page3'

function Gallery() {
    const cardListStyles = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        maxWidth: '1250px',
        margin: '150px auto',
        padding: '20px',
        gap: '20px'
    };

    const cardItemStyles = {
        background: '#fff',
        padding: '26px',
        borderRadius: '8px',
        boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.04)',
        listStyle: 'none',
        cursor: 'pointer',
        textDecoration: 'none',
        border: '2px solid transparent',
        transition: 'border 0.5s ease'
    };

    const cardItemHoverStyles = {
        border: '2px solid #000'
    };

    const arrowStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: 'rotate(-35deg)',
        height: '40px',
        width: '40px',
        color: '#000',
        border: '1px solid #000',
        borderRadius: '50%',
        marginTop: '40px',
        transition: '0.2s ease'
    };

    const arrowHoverStyles = {
        background: '#000',
        color: '#fff'
    };

    return (
        <div style={cardListStyles}>
            <a href="/Page2" style={cardItemStyles}>
                <img src={developer} alt="Card Image" style={{ width: '100%', aspectRatio: '16/9', borderRadius: '8px', objectFit: 'cover' }} />
                <span style={{ display: 'inline-block', background: '#F7DFF5', marginTop: '32px', padding: '8px 15px', fontSize: '0.75rem', borderRadius: '50px', fontWeight: '600', color: '#B22485' }}>Developer</span>
                <h3 style={{ color: '#000', fontSize: '1.438rem', marginTop: '28px', fontWeight: '600' }}>A developer codes software and websites.</h3>
                <div style={{ ...arrowStyles, ...arrowHoverStyles }}>
                    <i className="fas fa-arrow-right card-icon"></i>
                </div>
            </a>
            <a href="/Page3" style={cardItemStyles}>
                <img src={designer} alt="Card Image" style={{ width: '100%', aspectRatio: '16/9', borderRadius: '8px', objectFit: 'cover' }} />
                <span style={{ display: 'inline-block', background: '#d1e8ff', marginTop: '32px', padding: '8px 15px', fontSize: '0.75rem', borderRadius: '50px', fontWeight: '600', color: '#2968a8' }}>Designer</span>
                <h3 style={{ color: '#000', fontSize: '1.438rem', marginTop: '28px', fontWeight: '600' }}>A designer is a design expert.</h3>
                <div style={{ ...arrowStyles, ...arrowHoverStyles }}>
                    <i className="fas fa-arrow-right card-icon"></i>
                </div>
            </a>
        </div>
    );
}

export default Gallery;
