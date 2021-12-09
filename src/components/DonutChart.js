import React from 'react'
import '../App.css'

export default class DonutChart extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      value:0,
      valuelabel:'Completed',
      size:150,
      strokewidth:30,
      pembagi:200
    }
  }

  render() {  
    const halfsize = (this.state.size * 0.5);
    const radius = halfsize - (this.state.strokewidth * 0.5);
    const circumference = 2 * Math.PI * radius;
    const strokeval = ((this.props.greeting * circumference) / this.state.pembagi);
    const dashval = (strokeval + ' ' + circumference);
    const trackstyle = {strokeWidth: this.state.strokewidth};
    const indicatorstyle = {strokeWidth: this.state.strokewidth, strokeDasharray: dashval}
    const rotateval = 'rotate(-90 '+halfsize+','+halfsize+')';
    return (
      <svg width={this.state.size} height={this.state.size} className="donutchart">
        <circle r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={trackstyle} className="donutchart-track"/>
        <circle r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={indicatorstyle} className="donutchart-indicator"/>
        <text className="donutchart-text" x={halfsize} y={halfsize} style={{textAnchor:'middle'}} >
          <tspan className="donutchart-text-val">{(this.props.greeting / this.state.pembagi).toFixed(3) * 100}</tspan>
          <tspan className="donutchart-text-percent">%</tspan>
        </text>
      </svg>
    )
  }
}