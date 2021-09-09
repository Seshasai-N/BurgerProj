import React, { Component } from 'react'
import Oders from '../../Components/Oders/Oders'
import axios from '../../axios.oders'
import Spinner from '../../Components/Ui/Spinner/Spinner'
export default class Odersinfo extends Component {
    state={
        oders:[],
        loading:true
    }
    componentDidMount(){
        const fetched =[]
axios.get('/oders.json').then(res=>{
   
  for(let key in res.data){
      fetched.push({
          ...res.data[key],
          id:key,
         
      })
  }  

this.setState({loading:false,oders:fetched})

}).catch(err=>{
    this.setState({loading:false})
})
    }
    render() {
       
       
        return (
            <div>
           {this.state.loading ?<Spinner/>:this.state.oders.map(order=>(
               
               <Oders
               price={order.price}
               ingredients={order.ingredients}
               customer={order.customer}
                key={order.id}/>
              
           )
           )}
            </div>
        )
    }
}
