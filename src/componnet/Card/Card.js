import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Card/Card.css'
import Pagination from '../Pagination/Pagination';
export default function Card({ serviceData }) {

  function RenderUI() {
    const perPageTiles= 9;
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(perPageTiles);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = serviceData.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (<>
      <ul className="box_Gallery">
        {currentPosts.map(res => {
          return (
            <li key={res.id}>
              <div className='cart_box'>
                <Link className='link' target="_blank" to={`description/${res.id}`}> <div className='spacex_Img'><img src={res?.links?.patch?.small} alt={res.name} height="70px" width="70px" /></div></Link>
                <div className='img_Description'>
                  <div><Link className='link' target="_blank" to={`description/${res.id}`}><strong>{res.name}</strong></Link></div>
                  <br />
                  <div><Link className='link' target="_blank" to={`description/${res.id}`}><small className='ellipsis'>{res.details ? res.details : 'No Description Available..'}</small>  </Link></div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
      <div id='Pagination'>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={serviceData.length}
            paginate={paginate}
          />
      </div>
    </>)
  }

  return (<>
    {RenderUI()}
  </>
  )
}
