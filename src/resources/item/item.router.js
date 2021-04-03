import { Router } from 'express'
import { createItem, deleteItem, getItem, updateItem } from './item.controllers';

const router = Router()

router
	.route('/:id')
	.post(createItem)
	.get(getItem)
	.put(updateItem)
	.delete(deleteItem)

export default router
