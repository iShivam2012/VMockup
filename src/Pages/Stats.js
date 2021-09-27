import { useEffect, useState } from "react";

const Stats = () => {
    const [statsData, setStatsData] = useState()
    useEffect(()=>{
        fetch('http://localhost:7000/data').then(
            (response) => {
                return response.json()
            }
        ).then((data)=>{
            console.log(data);
        setStatsData(data);
        })
    },[])

    console.log("Stats ", statsData)
    let xValues = [];
    let yValues = [];

    if(statsData){ 
    for(let i =0; i< statsData.length; i++){
        xValues.push(statsData[i].country);
        yValues.push(statsData[i].visits)
    }
}
    
    console.log("x ", xValues)
    console.log("y ", yValues)
    
    // Unable to install the chart.js  library locally 

    // const chart = new Chart("myChart", {
    //   type: "line",
    //   data: {
    //     labels: xValues,
    //     datasets: [{
    //       fill: false,
    //       lineTension: 0,
    //       backgroundColor: "rgba(0,0,255,1.0)",
    //       borderColor: "rgba(0,0,255,0.1)",
    //       data: yValues
    //     }]
    //   },
    //   options: {
    //     legend: {display: false},
    //     scales: {
    //       yAxes: [{ticks: {min: 6, max:16}}],
    //     }
    //   }
    // })

    return(
        <div>
            <h1>Stats</h1>
            <h3>Stats Model</h3>
            {/* {chart()} */}
        </div>
    )
}
export default Stats;