const User = require('../models/User')
const Certificado = require('../models/Certificado')
const getUserByToken = require('../helpers/get-user-by-token')
const getToken = require('../helpers/get-token')

module.exports = class CertificadoController{

    static async register_file(req, res){

        const token = getToken(req)
        const user = await getUserByToken(token)
        const {name} = req.body
        console.log(user)
 

        var dataCertificado = new Date()
        dataCertificado.setDate(dataCertificado.getDate() + 1);
        //.toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })
 
        console.log(dataCertificado)
  
        if(!req.file){

            res.status(422).json({message: "Por favor, faça uploado do certificado"})
            return

        }

        if(!name){
            res.status(422).json({message: "Por favor, insira o nome do certificado"})
            return
        }




        const certificadoUser = new Certificado({

            name: name,
            userId: user._id,
            email: user.email,
            DateSend: dataCertificado,

        })

        try {

            const newUser = await certificadoUser.save()

            await createUserToken(newUser, req, res)
            res.status(201).json({
                        message: "Salvo com sucesso!", newUser, status: 201
                        })
        

        }catch(error){

            res.status(500).json({message: error, catch: "erro"})

        }

    }

    static async register_all(req, res){
        const certificados = await Certificado.find()

        res.status(200).json({
            certificados: certificados,
        })
    }




}
