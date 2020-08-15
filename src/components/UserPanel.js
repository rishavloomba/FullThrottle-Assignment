import React, { useState } from 'react';
import useSwr from 'swr'
import Modal from './Modal';
import Card from './Card';
import { fetcher } from '../utils/fetcher';

export default function UserPanel() {
  const [openModal, setOpenModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const { data, error } = useSwr(`/api/users`, fetcher);

  const handleClick = (activeIndex) => {
    if(activeIndex > -1){
      setActiveIndex(activeIndex);
      setOpenModal(true);
    }  
  }

  if (error) return <div>Failed to load Users</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
      <style jsx>{`
        .user-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-top: 5%;
        }
        .header {
          color: Black;
          font-family: 'Righteous', serif;
          font-size: 56px;
          margin-bottom: 64px;  
        }
        .user-list {
          height: 500px; 
          overflow-x: hidden; 
          overflow-y: auto; 
          text-align:justify;
          box-shadow: 0 0 4px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(8,8,8,0.15);
        }
        .user-list::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        <div className="user-container">
          <div className="header">Full Throttle Users</div>
          <div className='user-list'>
          {data.members.map((each,index)=>(
            <Card 
              key={index} 
              name={each.real_name} 
              address={each.tz} 
              handleClick={()=>{handleClick(index)}}
            />
          ))}
          </div>
        </div>
        {openModal && 
         data.members[activeIndex] && 
         <Modal 
          data={data.members[activeIndex]} 
          onClose={()=>setOpenModal(false)} 
         />
        }
    </>
  )
}
