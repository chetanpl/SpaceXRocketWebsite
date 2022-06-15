import React, { useEffect, useState } from 'react'
import Card from '../Card/Card';
import Header from '../Header/Header';
import '../UISpaceX/UiSpaceX.css';
import { connect } from 'react-redux';
import Clock from '../Clock/Clock'
function SpaceX({ data }) {
  const [serviceData, setServiceData] = useState([]);
  useEffect(function () {
    setServiceData(data);
  }, [data])
  
  if (serviceData.length > 0) {
    return (
      <>
        <Header />
        <div className='container'>
          <div className='bgImg'>
            <div className='bg_Text_Box'>
              <div className='bg_Text_Header'>Space X</div>
              <div className='bg_Text'>
                Space Exploration Technologies Corp. is an American aerospace manufacturer and space transportation services company headquartered in Hawthorne, California. It was founded in 2002 by Elon Musk with the goal of reducing space transportation costs to enable the colonization of Mars.
                </div>
                <div className='clock'><Clock/></div>
            </div>
          </div>
          {/* Launch and Rocket button in center */}
          <div className='LaunchRocket__Center'>
            <span><button>Launch</button></span>
            <span><button>rockets</button></span>
          </div>
          {/* Box rendering */}
          <Card serviceData={serviceData} />
        </div>
      </>
    )
  }
  return (
    <>
      <Header />
      <div className='container'>
        <div className='bgImg'>
          <div className='bg_Text_Box'>
            <div className='bg_Text_Header'>Space X</div>
            <div className='bg_Text'>
              Space Exploration Technologies Corp. is an American aerospace manufacturer and space transportation services company headquartered in Hawthorne, California. It was founded in 2002 by Elon Musk with the goal of reducing space transportation costs to enable the colonization of Mars.
            </div>
          </div>
        </div>
        {/* Launch and Rocket button in center */}
        <div className='LaunchRocket__Center'>
          <span><button>Launch</button></span>
          <span><button>rockets</button></span>
        </div>
      </div>
    </>
  )
}
const mapStateToProps = state => {
  return {
    data: state.data
  };
};

export default connect(
  mapStateToProps,
  null
)(SpaceX);