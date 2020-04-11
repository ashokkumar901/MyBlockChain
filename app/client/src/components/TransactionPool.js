import React, { Component } from 'react';
import Transaction from './Transaction';
import { Link } from 'react-router-dom';

class TransactionPool extends Component {
    state = {
        transactionPool: {}
    };

    fetchTransactionPoolMap = () => {
        fetch('http://localhost:3001/transactions')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    transactionPool: json
                })
            });
    }

    componentDidMount() {
        this.fetchTransactionPoolMap();
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