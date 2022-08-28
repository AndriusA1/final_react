import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';

function ReactSimplyCarouselExample() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
            style: {
            alignSelf: 'center',
            background: '#a38f23',
            border: 'none',
            borderRadius: '30%',
            color: 'black',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
            style: {
            alignSelf: 'center',
            background: '#a38f23',
            border: 'none',
            borderRadius: '30%',
            color: 'black',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
            minWidth: 500,
          },
        ]}
        speed={800}
        easing="linear"
      >
        <div style={{ width: 500, height: 500, backgroundImage: `white`, backgroundSize:"cover",backgroundPosition: 'center'}}>
          username 1
        </div>
        <div style={{ width: 500, height: 500, backgroundImage: `white`, backgroundSize:"cover",backgroundPosition: 'center'}}>
          username 2
        </div>
        <div style={{ width: 500, height: 500, backgroundImage: `white`, backgroundSize:"cover",backgroundPosition: 'center'}}>
          username 3
        </div>
        <div style={{ width: 500, height: 500, backgroundImage: `white`, backgroundSize:"cover",backgroundPosition: 'center'}}>
          username 4
        </div>
       
      </ReactSimplyCarousel>
    </div>
  );
}

export default ReactSimplyCarouselExample;