const express = require("express");
const app = express();

const surveyRoute = express.Router();
let Survey = require("../model/Survey");

// Add Survey
surveyRoute.route("/add-survey").post((req, res, next) => {
    Survey.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get all Survey
surveyRoute.route("/").get((req, res) => {
    Survey.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get Survey
surveyRoute.route("/read-survey/:id").get((req, res) => {
    Survey.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update Survey
surveyRoute.route("/update-survey/:id").put((req, res, next) => {
    Survey.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("Survey updated successfully!");
      }
    }
  );
});

surveyRoute.route("/response-survey/:id").put((req, res, next) => {
  Survey.findByIdAndUpdate(
  req.params.id,
  {
    $set: req.body,
  },
  (error, data) => {
    if (error) {
      return next(error);
      console.log(error);
    } else {
      res.json(data);
      console.log("Survey updated successfully!");
    }
  }
);
});
// Delete Survey
surveyRoute.route("/delete-survey/:id").delete((req, res, next) => {
    Survey.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = surveyRoute;
