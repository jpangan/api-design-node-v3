import { Router } from 'express'
import { createUser, deleteUser, getUser, updateUser } from './user.controllers'

const router = Router()

router
	.route('/')
	.get(createUser)

// /api/user
router
	.route('/:id')
	.get(getUser)
	.put(updateUser)
	.delete(deleteUser)

export default router
