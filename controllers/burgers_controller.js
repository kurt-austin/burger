const express = require('express')
const burgerFile = require('./../models/burger.js')


const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var router = express.Router();