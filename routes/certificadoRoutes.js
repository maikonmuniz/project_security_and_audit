const router = require('express').Router()
const verifyToken = require("../helpers/verify-token")
const { upload } = require("../helpers/arquivo-upload")
const CertificadoController = require('../controllers/CertificadoController')

router.post('/registerCertificado', verifyToken, upload.single("file"), CertificadoController.register_file)
router.get('/registerAll', CertificadoController.register_all)


module.exports = router