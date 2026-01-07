import { useState } from 'react';

function AddExpense({ onAddExpense }) {
	// receive callback
	const [showModal, setShowModal] = useState(false);
	const [form, setForm] = useState({
		title: '',
		amount: '',
		category: '',
		date: '',
	});

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!form.title || !form.amount || !form.category || !form.date) {
			alert('All fields are required');
			return;
		}

		// send expense to parent
		onAddExpense(form);

		// clear form
		setForm({
			title: '',
			amount: '',
			category: '',
			date: '',
		});

		setShowModal(false);
	};

	return (
		<div>
			<button className='btn btn-primary' onClick={() => setShowModal(true)}>
				Add Expense
			</button>

			{showModal && (
				<>
					<div className='modal d-block'>
						<div className='modal-dialog'>
							<div className='modal-content p-4'>
								<h5>Add Expense</h5>

								<form onSubmit={handleSubmit}>
									<input
										className='form-control mb-3'
										name='title'
										placeholder='Title'
										value={form.title}
										onChange={handleChange}
									/>
									<input
										type='number'
										className='form-control mb-3'
										name='amount'
										placeholder='Amount'
										value={form.amount}
										onChange={handleChange}
									/>
									<select
										className='form-control mb-3'
										name='category'
										value={form.category}
										onChange={handleChange}>
										<option value=''>Select Category</option>
										<option value='Food'>Food</option>
										<option value='Travel'>Travel</option>
										<option value='Shopping'>Shopping</option>
									</select>
									<input
										type='date'
										className='form-control mb-3'
										name='date'
										value={form.date}
										onChange={handleChange}
									/>
									<button type='submit' className='btn btn-primary w-100'>
										Add Expense
									</button>
								</form>

								<button
									className='btn btn-link mt-3 w-100 '
									onClick={() => setShowModal(false)}>
									Cancel
								</button>
							</div>
						</div>
					</div>

					<div className='modal-backdrop show'></div>
				</>
			)}
		</div>
	);
}

export default AddExpense;
