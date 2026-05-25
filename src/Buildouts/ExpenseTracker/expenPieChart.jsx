// ExpensePieChart.jsx
import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

function ExpensePieChart({ expenses }) {
	const [categoryData, setCategoryData] = useState([]);

	useEffect(() => {
		if (expenses && expenses.length > 0) {
			const aggregated = aggregateExpensesByCategory(expenses);
			setCategoryData(aggregated);
		}
	}, [expenses]);

	return (
		<div className='card shadow-sm p-3 mt-3'>
			<h5 className='card-title'>Expense Distribution</h5>
			<PieChart width={300} height={300}>
				<Pie
					data={categoryData}
					dataKey='amount'
					nameKey='category'
					cx='50%'
					cy='50%'
					outerRadius={80}
					label={true} // show category and value
				>
					{categoryData.map((item, index) => (
						<Cell
							key={`cell-${item.category}`}
							fill={COLORS[index % COLORS.length]}
						/>
					))}
				</Pie>
				<Tooltip />
				<Legend />
			</PieChart>
		</div>
	);
}

// Utility function to sum expenses by category
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

export default ExpensePieChart;
