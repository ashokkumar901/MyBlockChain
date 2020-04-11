import React from 'react';

const Transaction = ({ transaction }) => {
    const { input, outputs } = transaction;

    return (
        <div className='Transaction'>
            <div>From: {`${input.address.substring(0, 20)}...`} | Balance: {input.amount}</div>
            {
                outputs.map(recipient => (
                    <div key={recipient.address}>
                        To:{`${recipient.address.substring(0, 20)}...`} |Sent:{recipient.amount}
                    </div>
                ))
            }
        </div>
    );
}

export default Transaction;