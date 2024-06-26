//@ts-check

const express = require("express");
const app = express();
const Restaurant = require("../models/index")
const db = require("../db/connection");

//TODO: Create your GET Request Route Below: 
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/restaurants', async (req, res) => {
     const restaurants = await Restaurant.findAll({});
     res.json(restaurants);
    });

app.get('/restaurants/:id', async (req, res) => {
     const number = req.params.id;
     const restaurant = await Restaurant.findByPk(number);
     res.json(restaurant);
    });

app.post("/restaurants", async (req, res) => {
    const restaurant = await Restaurant.create(req.body);
    res.json(restaurant);
});

app.put("/restaurants/:id", async (req, res) => {
    const updatedrest = await Restaurant.update(req.body, {where: {id: req.params.id}})
    res.json(updatedrest)
})

app.delete("/restaurants/:id", async (req, res) => {
    const deleteRest = await Restaurant.destroy ({where: {id: req.params.id} })
    res.json(deleteRest)
})

module.exports = app;