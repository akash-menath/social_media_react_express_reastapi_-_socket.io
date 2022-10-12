import React from 'react'
import './TrendCard.css'
import {Trenddata} from '../../Data/TrendData.jsx'

function TrendCard() {
  return (
    <div className="TrendCard">
        <h1>Trends for you</h1>
        {Trenddata.map((trend)=>{
            return (
                <div className="trend">
                    <span># {trend.name}</span>
                    <span>{trend.shares}k shares</span>
                </div>
            )
        })}
    </div>
  )
}

export default TrendCard
