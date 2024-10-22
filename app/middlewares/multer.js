import multer from "multer";

// Set up multer for form-data parsing
const upload = multer();

// Middleware to handle both JSON and form-data
const parser = (req, res, next) => {
  // Use express.json() for JSON payloads
  if (req.is("application/json")) {
    express.json()(req, res, next);
  } else {
    // Use multer for form-data
    upload.none()(req, res, next);
  }
};

export default parser;
