import { useState } from 'react';
import Wallet from './wallet';
import AddExpense from './addExpense';
import CategorySummary from './categorySummary';
import ExpenseList from './expenseList';
import ExpensePieChart from './expenPieChart';
import ExpenseBarChart from './expenseBarGraph';
import { useLocalStorage } from './useLocalStorage'; // <-- our custom hook

function Dashboard() {
	// Persisted balance and expenses
	const [balance, setBalance] = useLocalStorage('balance', 1000);
	const [expenses, setExpenses] = useLocalStorage('expenses', []);

	// Add new expense
	const handleAddExpense = (expense) => {
		setExpenses((prev) => [...prev, expense]);
		setBalance((prev) => prev - Number(expense.amount));
	};
	const handleAddMoney = (amount) => {
		setBalance((prev) => prev + amount);
	};

	// Delete expense
	const handleDeleteExpense = (index) => {
		const deletedAmount = Number(expenses[index].amount);
		setExpenses((prev) => prev.filter((_, i) => i !== index));
		setBalance((prev) => prev + deletedAmount); // refund balance
	};

	// Edit expense
	const handleEditExpense = (index, updatedExpense) => {
		const oldAmount = Number(expenses[index].amount);
		setExpenses((prev) =>
			prev.map((exp, i) => (i === index ? updatedExpense : exp))
		);

		// Update balance accordingly
		const newAmount = Number(updatedExpense.amount);
		setBalance((prev) => prev + oldAmount - newAmount);
	};

	return (
		<div className='container mt-4'>
			{/* Top row: Wallet + Add Expense */}
			<h1>Expense Tracker</h1>
			<div className='row mb-4'>
				<div className='card col-md-6 mb-3'>
					<Wallet balance={balance} onAddMoney={handleAddMoney} />
				</div>
				<div className='card col-md-6 mb-3'>
					<AddExpense onAddExpense={handleAddExpense} expenses={expenses} />
				</div>
			</div>
			<div className='card row'>
				<div className='col'>
					<h2>Transactions</h2>
					<ExpenseList
						expenses={expenses}
						onDelete={handleDeleteExpense}
						onEdit={handleEditExpense}
					/>
				</div>
			</div>

			{/* Charts */}
			<div className='row mb-4'>
				<div className='col-md-6'>
					<div className='card p-3 shadow-sm'>
						<h5 className='card-title'>Expense Pie Chart</h5>
						<ExpensePieChart expenses={expenses} />
					</div>
				</div>
				<div className='col-md-6'>
					<div className='card p-3 shadow-sm'>
						<h5 className='card-title'>Expense Bar Chart</h5>
						<ExpenseBarChart expenses={expenses} />
					</div>
				</div>
			</div>

			{/* Bottom row: Expense List */}
		</div>
	);
}

export default Dashboard;
