import React from 'react';
import {connect} from 'react-redux';

export class CoinDataList extends React.Component {
    tableRows = () => {
        let result = [];
        Object.keys(this.props.coinData).map(key => {
                if(key !== '_id') {
                    result.push(
                        <tr>
                            <td className="rowTitle">{key}</td>
                            <td>{this.props.coinData[key]}</td>
                        </tr>
                    );
                }
            }
        )
        return result;
    }
    render() {
        return (
            <div>
                <table className="coinData-table">
                    {this.tableRows()}
                </table>
            </div>
        )
    }
}

const mapStateProps = (state) => {
    return {
        coinData: state.coinData
    }
}

export default connect(mapStateProps)(CoinDataList);