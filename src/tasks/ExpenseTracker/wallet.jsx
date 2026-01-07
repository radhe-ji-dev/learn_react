import { useState } from 'react';

function Wallet({ balance, onAddMoney }) {
	// <- receive function as prop
	const [showModal, setShowModal] = useState(false);
	const [amount, setAmount] = useState('');

	return (
		<div>
			<h3>Balance: {balance}</h3>
			<button className='btn btn-primary' onClick={() => setShowModal(true)}>
				Add Money
			</button>

			{showModal && (
				<div className='modal d-block'>
					<div className='modal-dialog'>
						<div className='modal-content p-3'>
							<h5>Add Money</h5>
							<input
								type='number'
								placeholder='Amount'
								value={amount}
								onChange={(e) => setAmount(e.target.value)}
							/>
							<button
								className='btn-primary'
								onClick={() => {
									onAddMoney(Number(amount)); // <- call parent
									setAmount('');
									setShowModal(false);
								}}>
								Add
							</button>
							<button onClick={() => setShowModal(false)}>Cancel</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Wallet;
