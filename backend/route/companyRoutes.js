const express = require('express');
const { createCompany, getCompanyDetails, getAllCompanies } = require('../controllers/companyController');

const router = express.Router();

//create company for refNumber
router.route("/company/new").post(createCompany);

//get all companies
router.route("/company/all").get(getAllCompanies);

//get a single company
router.route("/company/:refNumber").get(getCompanyDetails);

module.exports = router;