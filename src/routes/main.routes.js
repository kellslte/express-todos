// import depencies
import { Router } from 'express';
import { createTodo, deleteTodo, getTodo, getTodos, updateTodo } from '../controllers/todo.controllers.js'
import todoValidationMiddleware from '../middleware/todo.middleware.js';

// configure router
const router = Router();

// define routes
// todo routes
router.get('/todos', getTodos);
router.get( '/todos/:id', getTodo )
router.post( '/todos', todoValidationMiddleware, createTodo );
router.put( '/todos/:id', todoValidationMiddleware, updateTodo );
router.delete( '/todos/:id', deleteTodo );

// authentication routes
router.get('/auth/user')
router.post('/auth/register')
router.post('/auth/login')
router.put('/auth/user/update-profile/:id')

// export handler
export default router;