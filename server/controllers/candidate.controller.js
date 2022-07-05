const Candidate = require('../models/Candidate');
const User = require('../models/User');
const Poll = require('../models/Poll');

exports.createCandidate = async (req, res) => {
  try {
    const userExists = await User.findById(req.body.user_id);

    if (!userExists)
      return res.status(400).send({ message: 'User does not exist' });

    const pollToRunIn = await Poll.findById(req.body.poll_id);

    if (!pollToRunIn)
      return res.status(400).send({ message: 'Poll does not exist' });

    const newCandidate = new Candidate(req.body);
    await newCandidate.save();

    await Poll.findOneAndUpdate(
      { _id: req.body.poll_id },
      { $push: { candidates: { $each: [newCandidate.id] } } }
    );

    pollToRunIn.candidates.push(newCandidate.id);

    return res
      .status(201)
      .send({ message: 'Candidate created!', data: newCandidate });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.getCandidatesByPoll = async (req, res) => {
  try {
    const candidates = await Candidate.find({
      poll_id: req.params.poll_id,
    })
      .populate({ path: 'user_id', model: User })
      .populate({ path: 'poll_id', model: Poll })
      .lean()
      .exec();

    const newCandidates = candidates.map((candidate) => {
      candidate.user = candidate.user_id;
      candidate.poll = candidate.poll_id;
      delete candidate.user_id;
      delete candidate.poll_id;

      return candidate;
    });

    return res
      .status(200)
      .send({ message: 'Candidates retrieved!', data: newCandidates });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
