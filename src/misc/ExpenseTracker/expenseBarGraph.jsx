import React, { useState, useEffect } from 'react';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	CartesianGrid,
	Cell,
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

function ExpenseBarChart({ expenses }) {
	const [categoryData, setCategoryData] = useState([]);

	useEffect(() => {
		if (expenses && expenses.length > 0) {
			const aggregated = aggregateExpensesByCategory(expenses);
			setCategoryData(aggregated);
		}
	}, [expenses]);

	return (
		<div className='card shadow-sm p-3 mt-3'>
			<h5 className='card-title'>Category-wise Expenses</h5>
			<BarChart width={500} height={300} data={categoryData}>
				<CartesianGrid strokeDasharray='3 3' />
				<XAxis dataKey='category' />
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar dataKey='amount' name='Expense'>
					{categoryData.map((item, index) => (
						<Cell
							key={`cell-${item.category}`}
							fill={COLORS[index % COLORS.length]}
						/>
					))}
				</Bar>
			</BarChart>
		</div>
	);
}

// Utility function outside component
function aggregateExpensesByCategory(expenses) {
	const result = {};
	expenses.forEach((exp) => {
		if (result[exp.category]) {
			result[exp.category] += exp.amount;
		} else {
			result[exp.category] = exp.amount;
		}
	});

	return Object.keys(result).map((category) => ({
		category,
		amount: result[category],
	}));
}

export default ExpenseBarChart;
