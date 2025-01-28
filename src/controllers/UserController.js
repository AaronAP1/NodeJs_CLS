const PersonsService = require('../services/UserService');
const service = new PersonsService();

const create = async ( req, res ) => {
    try { 
        const response = await service.create(req.body);
        console.log('[CONSOLE] EJECUTADO CORRECTAMENTE: POST /');
        res.json({ success: true, data: response});
    } catch (error) {
        console.error('[ERROR] FALLO EN POST /:', error);
        res.status(500).send({ success: false, message: error.message });
    }
}

const get = async ( req, res ) => {
    try {
        const response = await service.find();
        console.log('[CONSOLE] EJECUTADO CORRECTAMENTE: GET /lista');
        res.json(response);
    } catch (error) {
        console.error('[ERROR] FALLO EN GET /lista:', error);
        res.status(500).send({ success: false, message: error.message });
    }
}

const getById = async ( req, res ) => {
    try {
        const { id } = req.params;
        const response = await service.findOne(id);
        console.log(`[CONSOLE] EJECUTADO CORRECTAMENTE: GET /${req.params.id}`);
        res.json(response);
    } catch (error) {
        console.error(`[ERROR] FALLO EN GET /${req.params.id}:`, error);
        res.status(500).send({ success: false, message: error.message });
    }
}

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const response = await service.update(id,body);
        console.log(`[CONSOLE] EJECUTADO CORRECTAMENTE: PUT /${req.params.id}`);
        res.json(response);
    } catch (error) {
        console.error(`[ERROR] FALLO EN PUT /${req.params.id}:`, error);
        res.status(500).send({ success: false, message: error.message });
    }
}

const _delete = async (req, res) => {
    try {
        const { id } = req.params; 
        const response = await service.delete(id);
        console.log(`[CONSOLE] EJECUTADO CORRECTAMENTE: DELETE /${req.params.id}`);
        res.json(response);
    } catch (error) {
        console.error(`[ERROR] FALLO EN DELETE /${req.params.id}:`, error);
        res.status(500).send({ success: false, message: error.message });
    }
}

module.exports = {
    create, get, getById, update, _delete
};