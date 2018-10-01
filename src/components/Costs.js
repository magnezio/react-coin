import React from 'react';
import io from 'socket.io-client';

import Row from './Row';
import { relative } from 'upath';

export default class Costs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            priceBitcoin: 0, 
            ethereumPrice: 0
        };
    }
    componentDidMount = () => {
        
        var uri = 'wss://ws.coincap.io/prices/websocket?assets=bitcoin,ethereum';
        if (uri.indexOf('?') == -1) {
            uri += '?encoding=text';
        } else {
            uri += '&encoding=text';
        }
        var websocket = new WebSocket(uri);
        websocket.onmessage = (evt) => {
            this.setState((state) => { 
                return {
                    priceBitcoin: JSON.parse(evt.data).bitcoin || state.priceBitcoin,
                    ethereumPrice: JSON.parse(evt.data).ethereum || state.ethereumPrice
                }
            });
        };
        // const socket = io("wss://ws.coincap.io/prices/websocket?assets=bitcoin,ethereum");
        // socket.on("prices", data => {
        //     console.log(data);
        //     this.setState({ fxRates: data });
        // });
        // io("wss://fx.now.sh")
        // .on("data", data => {
        //     console.log(data);
        //     this.setState({ fxRates: data });
        // });
    }
    render() {
        return (
            <div>
                <p className="prices">
                    { this.state.priceBitcoin != 0 && <span>Bitcoin: {this.state.priceBitcoin}</span> }
                    { this.state.ethereumPrice != 0 && <span> Ethereum: {this.state.ethereumPrice}</span> }
                </p>
            </div>
        )
    }
}