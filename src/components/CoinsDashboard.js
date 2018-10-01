import React from 'react';

import CoinsListFilters from './CoinListFilters';
import CoinDataList from './CoinDataList';
import Costs from './Costs';

export default class CoinsDashboard extends React.Component {
    getCoinData = (coinName) => {
        console.log(coinName);
    }
    render() {
        return (
            <div>
                <Costs />
                <CoinsListFilters />
                <CoinDataList />
            </div>
        )
    }
}