import { Router } from 'express'
import { getList, createList, updateList, deleteList } from './list.controllers'

const router = Router()

router
  .route('/:id')
  .post(createList)
  .get(getList)
  .put(updateList)
  .delete(deleteList)

export default router
