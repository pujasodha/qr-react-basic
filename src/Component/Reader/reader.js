import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import './reader.css'
import { Column, Row } from 'simple-flexbox'


class Reader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            delay: 300,
            result: 'No result',
        }
        this.handleScan = this.handleScan.bind(this)
    }
    handleScan(data) {
        if (data) {
            this.setState({
                result: data,
            })
        }
    }
    handleError(err) {
        console.error(err)
    }
    render() {
        return (
            // <body>

            //     <div className='header'> <p>QR Code Scanner - React App</p></div>
            //     <Column flexGrow={1}>
            //         <Row horizontal='center'>
            //             <div className="qr-reader">
            //                 <QrReader
            //                     delay={this.state.delay}
            //                     onError={this.handleError}
            //                     onScan={this.handleScan}
            //                 />
            //                 <div className='result'>Result: {this.state.result}</div>
            //             </div>
            //         </Row>
            //     </Column>

            // </body>
            <body>
                <div className='header'> </div>

                <Column >
                    <Row horizontal='center' className='header'>
                        <h1>QR Code Scanner - React App</h1>
                    </Row>
                    <Row vertical='center'>
                        <Column >
                            <div className="qr-reader">
                                <QrReader
                                    delay={this.state.delay}
                                    onError={this.handleError}
                                    onScan={this.handleScan}
                                />
                                <div className='result'>Result: {this.state.result}</div>
                            </div>
                        </Column>
                        <Column >
                            <h3> Past QR Readings </h3>
                        </Column>
                    </Row>
                </Column>
            </body>
        )
    }
}

export default Reader