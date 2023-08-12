const express=require('express')
const router=express.Router()
const {addData,sdelete,updatesdata,getlist,getsdata,ddelete}=require('../controllers/sdata-controller')

router.post('/:form',addData)
router.get('',getlist)
router.get('/:form',getsdata)
router.put('/:form/:id',updatesdata)
router.delete('/:form/:id',sdelete)
router.delete('/:form',ddelete)

module.exports = router