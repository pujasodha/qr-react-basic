import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QrReader from 'react-qr-reader';
import './reader.css';



class Reader extends Component {
    static propTypes = {
        addResult: PropTypes.func.isRequired,
        results: PropTypes.array.isRequired,
    };

    state = {
        delay: 300,
        // displayedResult: 'No result', 
    };

    handleScan = (data) => {
        if (data) {
            this.setState({
                displayedResult: data,
            },
                this.props.addResult(data));
        }
    }

    handleError = (err) => {
        console.error(err);
    }

    openImageDialog() {
        this.refs.qrReader1.openImageDialog()
    }

    render() {
        const { props, state } = this;

        return (
            <React.Fragment>

                <div className='header'>
                    <p>QR Code Scanner - React Based App</p>
                </div>

                <div id='main'>
                    <div className="qr-reader " >
                        <QrReader
                            delay={state.delay}
                            onError={this.handleError}
                            onScan={this.handleScan}
                        />
                        {/* <div className="displayedResult">Result: {state.displayedResult}</div> */}
                    </div>


                    <div id='results'>
                        <div className='results-header'>
                            Results
                </div>
                        <div className='results-div flexcol'>
                            <ol>
                                {props.results.length >= 1 ? props.results.map(result => <li key={result}>{result}</li>) : `No codes scanned`}
                            </ol>
                        </div>
                    </div>
                </div>



            </React.Fragment>
        );
    }
}

export default Reader;
