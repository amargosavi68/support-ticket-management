const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoString = "mongodb://localhost:27017/SupportTicketDB";

mongoose.connect(mongoString);
const database = mongoose.connection;

console.log(database);

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const ticketSchema = mongoose.Schema({
  prd_sr_num: {
    type: String
  },
  pur_date: {
    type: String
  },
  description: {
    type: String
  },
  status: {
    type: String
  }
})

const Ticket = mongoose.model('ticket', ticketSchema);


const app = express();

app.use(express.json());

app.use(cors())

app.use(bodyParser.json());


app.post("/add_ticket", async (req, res) => {
  try {
      const ticket = {...req.body, status: "open"}
      const resp = await Ticket.create(ticket);
      res.status(200).json({status: "open", msg: "Inserted"});
  } catch(error) {
      res.status(404).json({message: error.message});
  }
});


app.listen(5000, () => {
    console.log(`Server Started at ${5000}`)
})