import React,{ useState } from "react";
import { RangeDatePicker } from 'react-google-flight-datepicker';
import { getDateFormat } from '../utils/date';

export default function DateView(props) {
    const [showCalender, setShowCalender] = useState(false);
    const [activeInd, setActiveInd] = useState(-1);
    const handleClick = (activeIndex) => {
      if(activeIndex >-1){
        if(activeIndex === activeInd && showCalender){
          setShowCalender(false);
        }else{
          setActiveInd(activeIndex);
          setShowCalender(true);
        }
      }
    }
    return (
      <>
        <style jsx>{`
          table {
            width: 100%;
          } 
          table caption {
            font-size: 1.5em;
            margin: 0.5em 0 0.75em;
          }
          table tr {
            padding: 0.35em;
            color: Black;
          }
          table th,
          table td {
            padding: 0.625em;
            text-align: center;
          }
          table th {
            text-transform: uppercase;
          }
          button {
            border-radius: 4px;
            border: none;
            padding: 4px 10px;
          }
  
          button:hover {
            transform: translateY(-1px);
            cursor: pointer;
          }
          .calender{
            margin-top: 30px;
            align-items: center;
            display: block;
            text-align: center;
            width: 100%;
          }
          .calender-heading{
            text-align: center;
            margin-bottom: 10px;
          }
        `}</style>
          <table>
            <caption>
              <span>👇</span>
            </caption>
            <thead>
              <tr>
                <th scope="col">Period No.</th>
                <th scope="col">Start Date</th>
                <th scope="col">End Date</th>
                <th scope="col">Calender View</th>
              </tr>
            </thead>
            <tbody>
              {props.periods.map((each,index) => (
                <tr key={index}>
                  <td data-label="Period-No.">{index+1}</td>
                  <td data-label="Start-Date">{each.start_time}</td>
                  <td data-label="End-Date">{each.end_time}</td>
                  <td data-label="Calender-View">
                    <button onClick={()=>handleClick(index)}>VIEW</button>
                  </td>
                </tr>
            ))}
            </tbody>
          </table>
          {showCalender && props.periods[activeInd] && 
            <div className='calender'>
              <div className='calender-heading'>
                Calender View for Period {activeInd+1}
              </div>
              <RangeDatePicker
                startDate={getDateFormat(props.periods[activeInd].start_time)}
                endDate={getDateFormat(props.periods[activeInd].end_time)}
                minDate={new Date(1900, 0, 1)}
                maxDate={new Date(2100, 0, 1)}
                dateFormat="D"
                monthFormat="MMM YYYY"
                startDatePlaceholder="Start Date"
                endDatePlaceholder="End Date"
                disabled={false}
                startWeekDay="monday"
              />
            </div>
          }
      </>
    )
  }
  