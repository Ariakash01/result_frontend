// backend/routes/marksheetRoutes.js
const express = require('express');
const {
    createMarksheet,
    getMarksheets,
    getMarksheetById,
    deleteMarksheet,
    updateMarksheet,
    getAllMarksheets,getMarksheetss, updateMarksheetss
} = require('../controllers/marksheetController');
const marksheetsController = require('../controllers/marksheetController');

const protect = require('../middlewares/authMiddleware');

const router = express.Router();

// All routes below are protected
router.use(protect);

// GET /api/marksheets
router.get('/', getMarksheets);

// GET /api/marksheets/:id
router.get('/:id', getMarksheetById);

// POST /api/marksheets
router.post('/', createMarksheet);

// PUT /api/marksheets/:id
router.put('/:id', updateMarksheet);

// DELETE /api/marksheets/:id
router.delete('/:id', deleteMarksheet);






router.put('/:templateId/students', marksheetsController.updateStudentMarks);

// Route to update multiple students' marks in a marksheet
router.put('/app/:templateId', marksheetsController.updateMarks);




module.exports = router;
