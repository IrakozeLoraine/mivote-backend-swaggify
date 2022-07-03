const candidateSchema = {
  Candidate: {
    type: 'object',
    properties: {
      _id: { type: 'string' },
      user_id: { type: 'string' },
      poll_id: { type: 'string' },
      votes: { type: 'number' },
      bio: { type: 'string' },
      goals: { type: 'string' },
      party: { type: 'string' },
      created_on: { type: 'string' },
    },
  },
};

module.exports = candidateSchema;
