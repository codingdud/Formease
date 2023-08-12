const express=require('express')
const router=express.Router()
const {fdataid,fdata,fdataAdd,fdataDelete,fdataUpdate}=require('../controllers/fdata-controller')

router.get('/:id',fdataid)
router.get('',fdata)
router.post('',fdataAdd)
router.put('/:id',fdataUpdate)
router.delete('/:id',fdataDelete)


module.exports = router


