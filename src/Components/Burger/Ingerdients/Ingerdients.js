import React, { Component } from 'react';
import  './ingerdients.css'
import PropTypes from 'prop-types';
class Ingerdients extends Component {
  
    render() {
        let ingerdient = null;

        switch (this.props.type) {
            case ('bread-bottom'):
                ingerdient = <div className='BreadBottom'></div>;
                break;
            case ('bread-top'):
                ingerdient = (
                    <div className='BreadTop'>
                        <div className='Seeds1'></div>
                        <div className='Seeds2'></div>
                    </div>
                );
                break;
            case ('meat'):
                ingerdient = <div className='Meat'></div>;
                break;
            case ('cheese'):
                ingerdient = <div className='Cheese'></div>;
                break;
            case ('bacon'):
                ingerdient = <div className='Bacon'></div>;
                break;
            case ('salad'):
                ingerdient = <div className='Salad' ></div>;
                break;
                case ('red'):
                    ingerdient = <div className='RedSalad' ></div>;
                    break;
            default:
                ingerdient = <div></div>;
        }
      
        return ingerdient;
    };
}
Ingerdients.proptype = {
    type: PropTypes.string.isRequired
};

export default Ingerdients