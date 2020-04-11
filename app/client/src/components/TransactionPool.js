import React, { Component } from 'react';
import Transaction from './Transaction';
import { Link } from 'react-router-dom';
const POLL_INTERVAL_MS = 10000;

class TransactionPool extends Component {
    state = {
        transactionPool: {}
    };

    fetchTransactionPoolMap = () => {
        fetch(`${document.location.origin}/transactions`)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    transactionPool: json
                })
            });
    }

    componentDidMount() {
        this.fetchTransactionPoolMap();

        this.fetchTransactionPoolMapInterval = setInterval(
            () => this.fetchTransactionPoolMap(),
            POLL_INTERVAL_MS
        );
    }

    componentWillUnmount() {
        clearInterval(this.fetchTransactionPoolMapInterval);
    }

    render() {
        return (
            <div className='TransactionPool'>
                <div><Link to='/'>Home</Link></div>
                <h3>Transaction Pool</h3>
                {
                    Object.values(this.state.transactionPool).map(transaction => {
                        return (
                            <div key={transaction.id}>
                                <hr />
                                <Transaction transaction={transaction} />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default TransactionPool;