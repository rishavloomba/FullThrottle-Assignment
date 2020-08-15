import React from 'react';
import DataView from './DateView';

export default function Modal(props) {
  const { real_name: name, activity_periods: periods, id } = props.data || {};
  const handleClick = (e) => {
    props.onClose && props.onClose(e);
  };
  return (
    <>
      <style jsx>{`
        .modal {
          width: 800px;
          background: white;
          border: 1px solid #ccc;
          transition: 1.1s ease-out;
          position: absolute;
          left: 50%;
          top: 50%;
          z-index: 2;
          transform: translateX(-50%) translateY(-50%);
        }
        .backdrop {
          width: 100%;
          height: 100%;
          opacity: 0.3;
          background: grey;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
        }
        .header-container {
          border-bottom: 1px solid #ccc;
          padding: 1rem;
          margin: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 24px;
        }
        .modal .content {
          padding: 1rem;
          overflow-y: scroll;
        }
        .close-icon {
          cursor: pointer;
          position: relative;
          margin-left: 30px;
          top: -1px;
        }
        .modal .content::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div className="backdrop" onClick={handleClick} />
      <div className="modal" id="modal">
        <div className="header-container">
          <span>{name} Details</span>
          <span className="close-icon" onClick={handleClick}>
            x
          </span>
        </div>
        <div className="content">
          <DataView periods={periods} id={id} />
        </div>
      </div>
    </>
  );
}
