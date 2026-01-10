import { useState } from 'react';

function Wallet({ balance, onAddMoney }) {
	const [showModal, setShowModal] = useState(false);
	const [amount, setAmount] = useState('');

	return (
		<div>
			<h3>Wallet Balance: ₹{balance}</h3>
			<button className='btn btn-primary' onClick={() => setShowModal(true)}>
				+ Add Income
			</button>

			{showModal && (
				<div className='modal d-block'>
					<div className='modal-dialog'>
						<div className='modal-content p-3'>
							<h5>Add Balance</h5>
							<input
								type='number'
								value={amount}
								onChange={(e) => setAmount(e.target.value)}
							/>
							<button
								className='btn btn-primary'
								onClick={() => {
									if (!amount) return;
									onAddMoney(Number(amount));
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
