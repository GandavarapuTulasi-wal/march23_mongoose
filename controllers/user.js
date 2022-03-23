const User = require('../models/user');
exports.getUsers = (request, response) => {
  User.find((err, users_list) => {
    if (err) {
      response.json(err);
    } else {
      response.json(users_list);
    }
  });
};
exports.createUser = (request, response) => {
  const userOb = new User(request.body);
  userOb.save((err) => {
    if (err) {
      response.json(err);
    } else {
      response.json({
        status: 1,
        data: { msg: `user added successfully` },
      });
    }
  });
};
exports.editUsers = (request, response) => {
  const newUser = request.body;
  User.findByIdAndUpdate(request.params.id, newUser, function (err) {
    if (err) {
      response.json(err);
    } else {
      response.json({
        status: 1,
        data: { msg: `user is updated with id ${request.params.id}` },
      });
    }
  });
};
exports.deleteUser = (request, response) => {
  User.findByIdAndDelete(request.params.id).exec((err) => {
    if (err) {
      response.json(err);
    } else {
      response.json({
        status: 1,
        data: { msg: `deleted user with id ${request.params.id}` },
      });
    }
  });
};
exports.getUserById = (request, response) => {
  User.findById(request.params.id).exec((err, user_data) => {
    if (err) {
      response.json(err);
    } else {
      response.json(user_data);
    }
  });
};
exports.findUserByUsername = (request, response) => {
  User.find({ username: request.params.username }).exec((err, user_data) => {
    if (err) {
      response.json(err);
    } else {
      response.json(user_data);
    }
  });
};
exports.findUserByName = (request, response) => {
  User.find({ name: request.params.name }).exec((err, user_data) => {
    if (err) {
      response.json(err);
    } else {
      response.json(user_data);
    }
  });
};
exports.findUserByDob = (request, response) => {
  User.find({ dob: request.params.dob }).exec((err, user_data) => {
    if (err) {
      response.json(err);
    } else {
      response.json(user_data);
    }
  });
};
exports.findUserByPassword = (request, response) => {
  User.find({ password: request.params.password }).exec((err, user_data) => {
    if (err) {
      response.json(err);
    } else {
      response.json(user_data);
    }
  });
};
