import React, { Component } from 'react'
import Proptypes from 'prop-types'
import QrReader from 'react-qr-reader'
import './reader.css'


class Reader extends Component {
    static PropTypes = {
        addResult: PropTypes.func.isRequired,
        results: PropTypes.func.isRequired,
    };

    state = {
        delay: 300,
    };

    handleScan(data) {
        if (data) {
            this.setState({
                displayedResult: data,
            }
            this.props.addResult(data));
        }
    }


    handleerror = (err) => {
        console.log(err);
    };

    openImageDialog() {
        this.refs.qrReader1.openImageDialog()
    };

    render() {
        return (
            <React.Fragment>

                <div className='header'>

                    <p>QR Code Scanner - React App</p>
                </div>
                
                <div id='main'>
                    <div className="qr-reader" />
                    <QrReader
                        delay={this.state.delay}
                        onError={this.handleError}
                        onScan={this.handleScan}
                    />
                    {/* <div className='result'>Result: {this.state.result}</div> */}
                </div>

                <div id = 'results'>
                    <div className = 'results-header'>
                    Results 
                    </div>

                    <div className = 'results-div flexcol'>
                        <ol>
                            {props.results.length >=1 ? props.results.map(result => <li key = {result}>{result}</li>) : `No codes saved`}
                        </ol>
                    </div>
                </div>


            </React.Fragment>
        )
    }
}

export default Reader