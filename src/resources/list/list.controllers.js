// import { crudControllers } from '../../utils/crud'
// import { List } from './list.model'

//export default crudControllers(List)


export const getList = (req, res) => {
	res.status(200).json({ data: 'GOT THE LIST' });
}

export const updateList = (req, res) => {
	res.status(200).json({ data: 'UPDATED THE LIST' });
}

export const createList = (req, res) => {
	res.status(200).json({ data: 'CREATED THE LIST' });
}

export const deleteList = (req, res) => {
	res.status(200).json({ data: 'DELETED THE LIST' });
}