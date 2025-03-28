const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InvestmentIdeaSchema = new Schema({
  riskLevel: {
    type: String,
    enum: ['Low', 'Medium', 'High'], 
    required: true
  },
  investmentOption: {
    type: String,
    required: true
  },
  expectedReturn: {
    type: String, 
    required: true
  }
});

const InvestmentIdea = mongoose.model('InvestmentIdea', InvestmentIdeaSchema);

module.exports = InvestmentIdea;