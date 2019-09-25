import React, {Component} from 'react'
import { db } from '../services/firebase'



class Bus extends Component{
    state = {
        busses: null
    }

    componentDidMount(){

        console.log('Mounted')
        db.collection('Buses')
          .get()
          .then(    snapshot => {
              const busses = []
              snapshot.forEach( doc =>{
                  const data = doc.data()
                  busses.push(data)
              })
              this.setState({   busses: busses})
              console.log(snapshot)
          })
          .catch(   error => console.log(error))
    } 
    render(){
        return(
         <div>
                <h1>List Of Busses</h1>
                {
                    this.state.busses && 
                    this.state.busses.map(  bus =>{
                        return(
                            <div class="row">
                                <div class="col s12 m7">
                                     <div class="card">
                                        <div class="card-image">
                                         <img src="images/sample-1.jpg"/>
                                         <span class="card-title">Card Title</span>
                                         </div>
                                         <div class="card-content">
                                         <p> Name of the Bus : {bus.bname}   </p>
                                         <p> Name of the Bus : {bus.bname}   </p>
                                         <p> Bus Number      : {bus.bno}     </p>
                                         <p> Bus Ticket Price: {bus.bprice}  </p>
                                         <p> No of Seats      : {bus.bseat}   </p>
                                                </div>
                                         <div class="card-action">
                                          <a href="#">This is a link</a>
                                            </div>
                                        </div>
                                        </div>
                                    </div>                
                        )
                    })
                }
            </div>
        )
    }

}

export default Bus;