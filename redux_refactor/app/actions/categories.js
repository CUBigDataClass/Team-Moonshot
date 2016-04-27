/* eslint consistent-return: 0, no-else-return: 0*/
import { polyfill } from 'es6-promise';
import request from 'axios';
import md5 from 'spark-md5';
import * as types from 'constants/index';

polyfill();

/*
 * Utility function to make AJAX requests using isomorphic fetch.
 * You can also use jquery's $.ajax({}) if you do not want to use the
 * /fetch API.
 * Note: this function relies on an external variable `API_ENDPOINT`
 *        and isn't a pure function
 * @param Object Data you wish to pass to the server
 * @param String HTTP method, e.g. post, get, put, delete
 * @param String endpoint
 * @return Promise
 */
function makeCategoryRequest(method, id, data, api = '/category') {
 var a = request[method](api + (id ? ('/' + id) : ''), data);
 console.log("MAKING REQUEST");
 console.log(api + (id ? ('/' + id) : ''));
 console.log(a);
 return a;
}

function destroy(index) {
  return { type: types.DESTROY_CATEGORY, index };
}

function click(index) {
  return { type: types.CLICK_TUTORIAL, index };
}

function submit(index) {
  return { type: types.CLICK_SUBMIT, index };
}

function grid(index) {
  return { type: types.CLICK_GRID, index };
}

export function typing(text) {
  return {
    type: types.TYPING,
    newCategory: text
  };
}

function selectCategory(data) {
  console.log("REQUESTING CATEGORY SELECTION");
  console.log(data);
  return {
    type: types.SELECT_CATEGORY,
    activeCategory:data
  };
}
/*
 * @param data
 * @return a simple JS object
 */
function createCategoryRequest(data) {
  return {
    type: types.CREATE_CATEGORY_REQUEST,
    id: data.id,
    name: data.name
    //items: data.items,
  };
}

function createCategorySuccess() {
  return {
    type: types.CREATE_CATEGORY_SUCCESS
  };
}

function createCategoryFailure(data) {
  return {
    type: types.CREATE_CATEGORY_FAILURE,
    id: data.id,
    error: data.error
  };
}

function createCategoryDuplicate() {
  return {
    type: types.CREATE_CATEGORY_DUPLICATE
  };
}

// This action creator returns a function,
// which will get executed by Redux-Thunk middleware
// This function does not need to be pure, and thus allowed
// to have side effects, including executing asynchronous API calls.
export function createCategory(name) {
  return (dispatch, getState) => {
    // If the text box is empty
    if (name.trim().length <= 0) return;

    const id = md5.hash(name);
    // Redux thunk's middleware receives the store methods `dispatch`
    // and `getState` as parameters
    const { category } = getState();
    const data = {
      id,
      name,
      items: [{
        id: 'hi',
        name: 'thing1',
        score: '999',
        votes: '111',
        date: Date.now
      },
      {
        id: 'hi1',
        name: 'thing2',
        score: '666',
        votes: '1111',
        date: Date.now
      }]
    };

    // Conditional dispatch
    // If the category already exists, make sure we emit a dispatch event
    if (category.categories.filter(categoryItem => categoryItem.id === id).length > 0) {
      // Currently there is no reducer that changes state for this
      // For production you would ideally have a message reducer that
      // notifies the user of a duplicate category
      return dispatch(createCategoryDuplicate());
    }

    // First dispatch an optimistic update
    dispatch(createCategoryRequest(data));

    return makeCategoryRequest('post', id, data)
      .then(res => {
        if (res.status === 200) {
          // We can actually dispatch a CREATE_TOPIC_SUCCESS
          // on success, but I've opted to leave that out
          // since we already did an optimistic update
          // We could return res.json();
          return dispatch(createCategorySuccess());
        }
      })
      .catch(() => {
        return dispatch(createCategoryFailure({ id, error: 'Oops! Something went wrong and we couldn\'t create your category'}));
      });
  };
}

// Fetch posts logic
export function fetchCategories() {
  console.log("attempting category fetch");
  return {
    type: types.GET_CATEGORIES,
    promise: makeCategoryRequest('get')
  };
}

export function destroyCategory(id, index) {
  return dispatch => {
    dispatch(destroy(index));
    return makeCategoryRequest('delete', id);
    // do something with the ajax response
    // You can also dispatch here
    // E.g.
    // .then(response => {});
  };
}

export function tutorial(id,index) {
  return dispatch => {
    dispatch(click(index));
  };
}

export function submission(id,index) {
  return dispatch => {
    dispatch(submit(index));
  };
}

export function gridclick(id,index) {
  return dispatch => {
    dispatch(grid(index));
  };
}

export function changeCategory(name) {
  return dispatch => {
    dispatch(selectCategory(name));
  }
}
