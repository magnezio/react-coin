import React from 'react';
import {connect} from 'react-redux';

import CoinsListFilters from './CoinListFilters';
import CoinDataList from './CoinDataList';

export default class CoinsDashboard extends React.Component {
    getCoinData = (coinName) => {
        console.log(coinName);
    }
    render() {
        return (
            <div>
                <CoinsListFilters />
                <CoinDataList />
            </div>
        )
    }
}

// export default connect(undefined, undefined)(CoinsDashboard);