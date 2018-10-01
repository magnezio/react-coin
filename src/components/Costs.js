import React from 'react';
import io from 'socket.io-client';

import Row from './Row';

export default class Costs extends React.Component {
    constructor(props) {
      super(props);
      this.state = { fxRates: [] };
    }
    componentDidMount() {
        io("wss://ws.coincap.io/prices?assets=bitcoin,ethereum,monero,litecoin")
        .on("data", data => {
            console.log(data);
            this.setState({ fxRates: data });
        });
    //   io("wss://fx.now.sh").on("data", data => this.setState({ fxRates: data }));
    }
    render() {
        return (
            <div>
                {this.state.fxRates.map(rate => (
                    <Row key={rate.currencyPair} data={rate}></Row>)
                )}
            </div>
        )
    }
}