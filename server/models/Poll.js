const mongoose = require('mongoose');
const { registerSchema } = require('swaggiffy');

const PollSchema = mongoose.Schema({
  name: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  candidates: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Candidate' }],
  description: { type: String, required: true },
  location: { type: String, required: true },
  status: {
    type: String,
    enum: ['ONGOING', 'CLOSED', 'CANCELLED', 'PENDING'],
    default: 'PENDING',
  },
  created_on: {
    type: Date,
    default: Date.now(),
  },
});

registerSchema('Poll', PollSchema, { orm: 'mongoose' });

module.exports = mongoose.model('Poll', PollSchema);
