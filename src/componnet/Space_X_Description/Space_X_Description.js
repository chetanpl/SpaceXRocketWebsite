import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import '../Space_X_Description/Space_X_Description.css'
function Space_X_Description({ data }) {
  const { id } = useParams();
  const [serviceData, setserviceData] = useState([]);

  useEffect(() => {
    let filteredData = null;
    filteredData = data.filter((res) => {
      return res.id === id;
    })
    setserviceData(filteredData);
  }, [data])
  return (
    <div className='box'>
      <div className='spaceX'>
      <div className='spaceXName'>{serviceData[0]?.name}</div>
      <br/>
      <div className='spaceXDescription'>{serviceData[0]?.details ? serviceData[0]?.details : 'No Description Available..'}</div>
      <div className='spaceXImage'><img src={serviceData[0]?.links?.patch?.large} alt={serviceData[0]?.name}  height="50%" width="50%;" /></div>
    </div>
    </div>
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
)(Space_X_Description);
