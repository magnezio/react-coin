import React from 'react';
import {connect} from 'react-redux';

import {getCoins} from '../actions/coins';
import {getCoinData} from '../actions/coinData';

export class ExpenseListFilters extends React.Component {
    state = {
        coinName: undefined
    }
    componentDidMount() {
        this.props.getCoins();
    }
    getCoinData = (e) => {
        this.setState({coinName: e.target.value})
        this.props.getCoinData(e.target.value);
    }

    render() {
        return (
            <div>
                <select className="coinFilter" value={this.state.coinName} onChange={this.getCoinData}>
                    {
                        !this.state.coinName ? <option key="choose" value="">--Choose coin--</option> : ''
                    }
                    {
                        
                        this.props.coins.map((coin, index) => (
                            <option key={coin}>{coin}</option>
                        ))
                    }
                </select>
            </div>
        )
    }
}

const mapStateProps = (state) => {
    return {
        coins: state.coins
    }
}

const mapDispatchToProps = (dispatch) => ({
    getCoins: () => dispatch(getCoins()),
    getCoinData: (coinName) => dispatch(getCoinData(coinName))
});

export default connect(mapStateProps, mapDispatchToProps)(ExpenseListFilters);