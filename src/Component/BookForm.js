import React, {Component} from 'react'
import { db } from '../services/firebase'
import { Link } from 'react-router-dom';



class BookForm extends Component{
    constructor(props){
        super(props);
    
    this.state = {
        Total:'',
        busses: '',
        check:''
    }
    this.getBus = this.getBus.bind(this);


}

    componentDidMount(){

        this.getBus();
    }
    
    getBus(){
        const busno = this.props.match.params.bno;

        console.log('Mounted')
        db.collection('Buses')
          .get()
          .then(    snapshot => {
              const busses = []
              const check =[]
              snapshot.forEach( doc =>{
              
                  const data = doc.data()
                  
                  check.push(data)
               
                  busses.push(data)
                  
                  
                
              })
             
              this.setState({   busses: busses,
                                 check: check})
              
              console.log(snapshot)
              console.log(check)
              console.log(this.state.busses.bno)
              console.log(busno)
              
              
             
          })
          .catch(   error => console.log(error))
    }

    
    
    render(){
        return(
            <div>
              
            <br/>
            
          <Link className="btn green darken-3" to  ="/">Back</Link>

          
            <h3>444</h3>
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

export default BookForm;