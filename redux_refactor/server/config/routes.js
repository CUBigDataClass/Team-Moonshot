/**
 * Routes for express app
 */
import unsupportedMessage from '../db/unsupportedMessage';
import { controllers } from '../db';

const usersController = controllers && controllers.users;
const categoriesController = controllers && controllers.categories;


export default (app) => {
 console.log(controllers);
 if (categoriesController) {
    app.get('/category', categoriesController.all);
    app.post('/category/:id', categoriesController.add);
    app.put('/category/:id', categoriesController.update);
    app.delete('/category/:id', categoriesController.remove);
  } else {
    console.warn(unsupportedMessage('categories routes'));
  }

};
