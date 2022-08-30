import { useState, useEffect } from 'react';

const Trello = () => {
	const [data, setData] = useState({
		boards: [
			{
				name: 'Board 1',
				columns: [
					{
						name: 'Col 1',
						items: ['Item 1', 'Item 2'],
					},
					{
						name: 'Col 2',
						items: ['Item 3', 'Item 4'],
					},
					{
						name: 'Col 3',
						items: ['Item 5'],
					},
				],
			},
			{
				name: 'Board 2',
				columns: [
					{
						name: 'Col 1',
						items: ['Item 1', 'Item 2', 'Item 3'],
					},
					{
						name: 'Col 2',
						items: ['Item 4'],
					},
					{
						name: 'Col 3',
						items: ['Item 5'],
					},
				],
			},
		],
	});

	// useEffect(() => {
	// console.log(indexedDB.open('trello', 1));
	// }, []);

	const addCard = (name, boardId, colId) => {
		const newData = JSON.parse(JSON.stringify(data));
		console.log(newData.boards[boardId].columns[colId].items);
		newData.boards[boardId].columns[colId].items = [
			...newData.boards[boardId].columns[colId].items,
			name,
		];
		setData(newData);
	};

	return (
		<>
			<h1>Trello Clone</h1>
			{data.boards.map((board, index) => (
				<div key={index}>
					<h2>{board.name}</h2>
					<ul
						style={{
							display: 'flex ',
							gap: '1rem',
							listStyle: 'none',
							padding: '0',
						}}
					>
						{board.columns.map((column, index) => (
							<Column
								addCard={addCard}
								key={index}
								columnId={index}
								column={column}
							/>
						))}
					</ul>
				</div>
			))}
		</>
	);
};

function Column({ column, columnId, addCard }) {
	const [cardName, setCardName] = useState('');

	const handleAddCard = (e) => {
		e.preventDefault();
		addCard(cardName, 0, columnId);
		setCardName('');
	};

	return (
		<div style={{ background: '#ccc', padding: '1rem', height: 'max-content' }}>
			<h3>{column.name}</h3>
			<ul style={{ listStyle: 'none', padding: '0' }}>
				{column.items.map((item, index) => (
					<li
						key={index}
						style={{
							background: '#fff',
							padding: '1rem',
							marginBottom: '1rem',
						}}
					>
						{item}
					</li>
				))}
				<li>
					<form onSubmit={handleAddCard}>
						<input
							style={{
								background: '#fff',
								padding: '1rem',
							}}
							value={cardName}
							onChange={(e) => setCardName(e.target.value)}
							placeholder='Add Card'
						/>
					</form>
				</li>
			</ul>
		</div>
	);
}

export default Trello;
