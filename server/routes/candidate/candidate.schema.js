const candidateSchema = {
  Candidate: {
    type: 'object',
    properties: {
      _id: { type: 'string' },
      user: { type: 'object' },
      poll: { type: 'object' },
      votes: { type: 'number' },
      bio: { type: 'string' },
      goals: { type: 'string' },
      party: { type: 'string' },
      created_on: { type: 'string' },
    },
  },
};

registerSchema('Candidate', candidateSchema, { orm: 'mongoose' });

module.exports = candidateSchema;
