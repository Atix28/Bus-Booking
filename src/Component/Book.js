import React, {Component} from 'react'
import { db } from '../services/firebase'
import { Link } from 'react-router-dom';



class Book extends Component{
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
              
            <br/>
            
          <Link className="btn green darken-3" to  ="/">Back</Link>

       

          <form>
          <ul className="collection">
            <li className="collection-item"> Book </li>
            <li className="collection-item">
                
                
                <div className="input-field col s6">
                    <input id="bno" type="number" className="validate" ref="bno" />
                    <label htmlFor="bno">Bus Number </label>
                </div>
                <div className="input-field col s6">
                    <input id="date" type="date" className="validate" ref="date" />
                    <label htmlFor="date">Select a Date </label>
                </div>
                    
                
                <div className="input-field col s6">
                    <input id="bticket" type="number" className="validate" required/>
                    <label htmlFor="bticket">Number of Tickets</label>
                </div>
                

                <label>Total Price</label>
                <div className="input-field col s12">
                    
                    <input disabled  id="disabled" type="text" className="validate"/>

                     <input disabled id="disabled" type="text" className="validate"/>
                    
                </div>
            </li>
            
          </ul>
          
         
          </form>
      </div>
    )
        
    }

}

export default Book;