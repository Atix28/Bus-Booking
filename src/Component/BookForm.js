import React, {Component} from 'react'
import { db } from '../services/firebase'
import { Link } from 'react-router-dom';



class BookForm extends Component{
    constructor(props){
        super(props);
    
    this.state = {
        Total:'',
        busses: '',
        check:'',
        busno : this.props.match.params.bno
    }
    this.getBus = this.getBus.bind(this);


}

    componentDidMount(){

        this.getBus();
    }
    
    getBus(){
      

        console.log('Mounted')
        db.collection('Buses')
          .where("bno", "==", "1")
          .get()
          .then(    querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            console.log(data);
                  
                  
                
              })
             
              
              
              
            
             
          
          .catch(   error => console.log(error))
    }

    
    
    render(){
        return(
            <div>
              
            <br/>
            
          <Link className="btn green darken-3" to  ="/">Back</Link>

          
            <h3>Booking Details</h3>
          <form>
          <ul className="collection">
            <li className="collection-item">Bus Number : <b><h5>{this.state.busno}</h5></b> </li>
            <li className="collection-item">
                
                
                               
                <div className="input-field col s6">
                    <input id="date" type="date" className="validate" ref="date"  required/>
                    <label htmlFor="date">Select a Date </label>
                </div>
                    
                
                <div className="input-field col s6">
                    <input id="bticket" type="number" className="validate" required/>
                    <label htmlFor="bticket">Number of Tickets</label>
                </div>
                

                <label>Total Price</label>
                <div className="input-field col s12">
                    
                    <input disabled  id="disabled" type="text" className="validate"/>

                  
                    
                </div>
            </li>
            
          </ul>
          
         
          </form>
      </div>
    )
        
    }

}

export default BookForm;