const mongoose=require('mongoose')

const subscriberSchema= new mongoose.Schema({
    
    email:String,
   
})

const SubscriberModel = mongoose.model('subscribers',subscriberSchema)
module.exports=SubscriberModel