import React from 'react'
import Timelineboxes from './Timelineboxes'

function Timelinecontainer() {
  return (
    <div className='container'>
        <div className='timeline'>
            <ul>
                <li>
                    <Timelineboxes></Timelineboxes>
                </li>
                <li>
                    <Timelineboxes></Timelineboxes>
                </li>
                <li>
                    <Timelineboxes></Timelineboxes>
                </li>
                <li>
                    <Timelineboxes></Timelineboxes>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Timelinecontainer