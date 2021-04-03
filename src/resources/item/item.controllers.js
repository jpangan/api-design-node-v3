export const getItem = (req, res) => {
	res.status(200).json({ data: 'GOT THE ITEM' });
}

export const updateItem = (req, res) => {
	res.status(200).json({ data: 'UPDATED THE ITEM' });
}

export const createItem = (req, res) => {
	res.status(200).json({ data: 'CREATED THE ITEM' });
}

export const deleteItem = (req, res) => {
	res.status(200).json({ data: 'DELETED THE ITEM' });
}