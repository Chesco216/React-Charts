import { Chart, AxisOptions } from "react-charts"
import React from 'react'
import styles from './styles.module.css'

type DailyStars = {
   date: number,
   money?: number,
 }
 
 type Series = {
   label: string,
   data: DailyStars[]
 }
 
 const data: Series[] = [
   {
     label: 'date',
     data: [
       {
         date: 1,
       }
       // ...
     ]
   },
   {
     label: 'money',
     data: [
       {
          date: 2,
          money: 10
       },
       {
          date: 3,
          money: 10
       },
       {
          date: 4,
          money: 10
       },
       {
          date: 5,
          money: 10
       }
       // ...
     ]
   }
 ]

function App() {

   const primaryAxis = React.useMemo(
     (): AxisOptions<DailyStars> => ({
       getValue: datum => datum.date,
     }),
     []
   )
 
   const secondaryAxes = React.useMemo(
     (): AxisOptions<DailyStars>[] => [
       {
         getValue: datum => datum.stars,
       },
     ],
     []
   )

  return (
    <div className={styles.container}>
       <Chart
         options={{
           data,
           primaryAxis,
           secondaryAxes,
         }}
       />
    </div>
  )
}

export default App
