function CategorySummary({ expenses }) {
	// compute totals per category
	const categoryTotals = expenses.reduce((acc, expense) => {
		if (acc[expense.category]) {
			acc[expense.category] += Number(expense.amount);
		} else {
			acc[expense.category] = Number(expense.amount);
		}
		return acc;
	}, {});

	return (
		<div className='m-3'>
			<h5>Category-wise Totals</h5>
			{Object.keys(categoryTotals).length === 0 ? (
				<p>No expenses yet</p>
			) : (
				<ul className='list-group'>
					{Object.entries(categoryTotals).map(([category, total]) => (
						<li key={category} className='list-group-item'>
							{category}: ${total}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default CategorySummary;
