const express = require ('express');

const controller = express.Router();

controller.get('/:num', (request, response) => {
    try {
        const { num } = request.params;
        const numBy3 = num*3
        return response.status(200).json({ num: numBy3 })
    } catch (err) {
        response.status(500).json({ error: err.message })
    }
})