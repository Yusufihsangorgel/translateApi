import express from 'express';

import translateController from '../controller/translateController.js';

const router = express.Router();

router.route('/translateWord').post(translateController.translateWord);

export default router;