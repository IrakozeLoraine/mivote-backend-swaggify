const userSchema = {
  User: {
    type: 'object',
    properties: {
      _id: { type: 'string' },
      names: { type: 'string' },
      phone: { type: 'string' },
      dob: { type: 'string' },
      created_on: {
        type: 'string',
      },
    },
  },
};

registerSchema('User', userSchema, { orm: 'mongoose' });

module.exports = userSchema;
