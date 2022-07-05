const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");
const Ticket = require("../models/ticketModel");
const { restart } = require("nodemon");

// @desc     Get user ticket
// @route    GET /api/tickets
// @access   Private
const getTickets = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not find");
  }

  const tickets = await Ticket.find({ user: req.user.id });

  res.status(200).json(tickets);
});

// @desc     create user ticket
// @route    POST /api/tickets/
// @access   Private
const createTicket = asyncHandler(async (req, res) => {
  const { product, description } = req.body;

  if (!product || !description) {
    res.status(400);
    throw new Error("Please add a product and description");
  }

  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not find");
  }

  const ticket = await Ticket.create({
    product,
    description,
    user: req.user.id,
    status: "new",
  });

  res.status(200).json(ticket);
});

module.exports = { getTickets, createTicket };
