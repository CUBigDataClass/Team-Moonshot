import {
  TYPING,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_FAILURE,
  DESTROY_CATEGORY,
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILURE,
  CLICK_TUTORIAL,
  CLICK_SUBMIT,
  CLICK_GRID,
  SELECT_CATEGORY} from 'constants/index';


export default function category(state = {
  categories: [],
  newCategory: '',
  submission: true,
  gridclick: true,
  activeCategory: ''
}, action) {
  switch (action.type) {
    case TYPING:
      return Object.assign({}, state,
        { newCategory: action.newCategory }
      );
    case GET_CATEGORIES_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case GET_CATEGORIES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        categories: action.req.data
      });
    case GET_CATEGORIES_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      });
    case CREATE_CATEGORY_REQUEST:
      return {
        categories: [...state.categories, { id: action.id, name: action.name, items: action.items }],
        newCategory: ''
      };
    case CREATE_CATEGORY_FAILURE:
      return {
        categories: [...state.categories.filter((tp) => tp.id !== action.id)],
        newCategory: state.newCategory
      };
    case DESTROY_CATEGORY:
      return {
        categories: [...state.categories.filter((tp, i) => i !== action.index)],
        newCategory: state.newCategory
      };

    case CLICK_TUTORIAL:
      var tutorialVal;
      if (state.tutorial) {
        tutorialVal = !state.tutorial;
      }
      else {
        tutorialVal = true;
      }
      return Object.assign({}, state, {
        tutorial: tutorialVal,
      });

      case CLICK_SUBMIT:
      return Object.assign({}, state, {
          submission: !state.submission,
      });

      case CLICK_GRID:
      return Object.assign({}, state, {
          gridclick: !state.gridclick,
      });

      case SELECT_CATEGORY:
        return Object.assign({}, state, {
          activeCategory:[...state.categories.filter((tp) => tp.name === action.activeCategory)]
        });

    default:
      return state;
  }
}
