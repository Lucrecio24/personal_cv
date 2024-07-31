import "./graph.css"
import meme from "../assets/graphmeme.jpg"
import {Data1 , Data2 , Data3 , Data4} from "../data/graph"
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


function Graphs() {
  return (
    <div className="graphs-all">
        <div className="desc">
            <h1>My graphs</h1>
        </div>
        {/*<img className="graph-meme" src={meme}></img>*/}
        <div className="graphs-grid">
            <div className="graph-box">
              <HighchartsReact highcharts={Highcharts} options={Data1()} />
            </div>
            <div className="graph-box">
              <HighchartsReact highcharts={Highcharts} options={Data2()} />
            </div>
            <div className="graph-box">
              <HighchartsReact highcharts={Highcharts} options={Data3()} />
            </div>
            <div className="graph-box">
              <HighchartsReact highcharts={Highcharts} options={Data4()} />
            </div>
        </div>
    </div>
  )
}

export default Graphs