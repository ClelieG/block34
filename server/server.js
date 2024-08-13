const express = require('express');
const app = express();
const { client, createTable, createCustomer, fetchCustomer, createRestaurant, fetchRestaurant, createReservation, fetchReservation, destroyReservation } = require('./db');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(require('morgan')('dev'));

app.get("/api/customers", async (req, res, next) => {
    try {
        res.send(await fetchCustomer())
    } catch (error) {
        next(error);
    }
});

app.get("/api/restaurants", async (req, res, next) => {
    try {
        res.send(await fetchRestaurant())
    } catch (error) {
        next(error);
    }
});

app.get("/api/reservations", async (req, res, next) => {
    try {
        res.send(await fetchReservations())
    } catch (error) {
        next(error);
    }
});

app.post("/api/customers/:id/reservations", async =>)