import { useState } from 'react';

function ExpenseList({ expenses, onDelete, onEdit }) {
	const [editIndex, setEditIndex] = useState(null);
	const [editForm, setEditForm] = useState({
		title: '',
		amount: '',
		category: '',
		date: '',
	});

	const startEdit = (index) => {
		setEditIndex(index);
		setEditForm({ ...expenses[index] });
	};

	const handleChange = (e) => {
		setEditForm({ ...editForm, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onEdit(editIndex, editForm);
		setEditIndex(null);
	};

	return (
		<div className='m-3'>
			<h5>All Expenses</h5>
			{expenses.length === 0 ? (
				<p>No expenses yet</p>
			) : (
				<ul className='list-group'>
					{expenses.map((expense, index) => (
						<li
							key={index}
							className='list-group-item d-flex justify-content-between align-items-center'>
							{editIndex === index ? (
								<form className='d-flex gap-2 w-100' onSubmit={handleSubmit}>
									<input
										name='title'
										value={editForm.title}
										onChange={handleChange}
										className='form-control'
									/>
									<input
										name='amount'
										type='number'
										value={editForm.amount}
										onChange={handleChange}
										className='form-control'
									/>
									<select
										name='category'
										value={editForm.category}
										onChange={handleChange}
										className='form-control'>
										<option value=''>Select Category</option>
										<option value='Food'>Food</option>
										<option value='Travel'>Travel</option>
										<option value='Shopping'>Shopping</option>
									</select>
									<input
										name='date'
										type='date'
										value={editForm.date}
										onChange={handleChange}
										className='form-control'
									/>
									<button type='submit' className='btn btn-success btn-sm'>
										Save
									</button>
									<button
										type='button'
										className='btn btn-secondary btn-sm'
										onClick={() => setEditIndex(null)}>
										Cancel
									</button>
								</form>
							) : (
								<>
									<span>
										{expense.title} - ${expense.amount} ({expense.category}) on{' '}
										{expense.date}
									</span>
									<div>
										<button
											className='btn btn-primary btn-sm me-1'
											onClick={() => startEdit(index)}>
											Edit
										</button>
										<button
											className='btn btn-danger btn-sm'
											onClick={() => onDelete(index)}>
											Delete
										</button>
									</div>
								</>
							)}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default ExpenseList;
