import React, { Component } from 'react';
import Modal from '../../Components/Ui/Modal/Modal'
import Aux from '../Aux'

const withErrorHandling = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }
        componentWillMount() {
            this.resInterceptors = axios.interceptors.response.use(null, error => {
                this.setState({ error: error })
            })
            this.reqInterceptors = axios.interceptors.request.use(req => {
                this.setState({ error: null })
                return req
            }, error => {
                this.setState({ error: error })
            })
        }
        componentWillUnmount() {
            axios.interceptors.response.eject(this.resInterceptors);
            axios.interceptors.request.eject(this.reqInterceptors)
        }
        closeModal = () => {
            this.setState({ error: null })
        }
        render() {
            return (
                <Aux>
                    <Modal show={this.state.error} close={this.closeModal} >
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            )
        }
    }

}

export default withErrorHandling