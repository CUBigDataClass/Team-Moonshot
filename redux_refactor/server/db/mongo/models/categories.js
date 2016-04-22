/**
 * Schema Definitions
 *
 */
import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
  id: String,
  name: String,
  items: [{id: String, name: String, score: String, votes: String, date: { type: Date, default: Date.now }}],
});

// Compiles the schema into a model, opening (or creating, if
//	nonexistent) the 'Topic' collection in the MongoDB database
export default mongoose.model('Category', CategorySchema);

