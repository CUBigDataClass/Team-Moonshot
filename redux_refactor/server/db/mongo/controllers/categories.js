import _ from 'lodash';
import Category from '../models/categories';

/**
 * List
 */
export function all(req, res) {
  Category.find({}).exec((err, categories) => {
    if (err) {
      console.log('Error in first query');
      return res.status(500).send('Something went wrong getting the data');
    }

    return res.json(categories);
  });
}

/**
 * Add a Category
 */
export function add(req, res) {
  Category.create(req.body, (err) => {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    }
    console.log("ADDING CATEGORY");

    return res.status(200).send('OK');
  });
}

/**
 * Update a topic
 */
export function update(req, res) {
  const query = { id: req.params.id };
  const isIncrement = req.body.isIncrement;
  const isFull = req.body.isFull;
  const isOther = req.body.isOther;
  const omitKeys = ['id', '_id', '_v', 'isIncrement', 'isFull', 'isOther'];
  const data = _.omit(req.body, omitKeys);
  console.log(req.body);
  console.log(data);

  if (isFull) {
    Category.findOneAndUpdate(query, data, (err) => {
      if (err) {
        console.log('Error on save!');
        return res.status(500).send('We failed to save for some reason');
      }

      console.log("GOOD UPDATE");
      return res.status(200).send('Updated successfully');
    });
  } else {
    Category.findOneAndUpdate(query, { $inc: { count: isIncrement ? 1 : -1, } }, (err) => {
      if (err) {
        console.log('Error on save!');
        return res.status(500).send('We failed to save for some reason');
      }

      console.log('successful update');
      return res.status(200).send('Updated successfully');
    });
  }
}

/**
 * Remove a topic
 */
export function remove(req, res) {
  const query = { id: req.params.id };
  Category.findOneAndRemove(query, (err) => {
    if (err) {
      console.log('Error on delete');
      return res.status(500).send('We failed to delete for some reason');
    }

    return res.status(200).send('Removed Successfully');
  });
}

export default {
  all,
  add,
  update,
  remove
};
