const mongoose=require('mongoose');
const RequestSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
		ref:'user'
    },
    helper:{
        type:mongoose.Schema.Types.ObjectId,
		ref:'user'
    },
    created:{
        type:Date,
        required:true
    },
    userLocation:{
        lat:{
            type:Number,
            required:true
        },
        long:{
            type:Number,
            required:true
        }
    },
    helperLocation:{
        lat:{
            type:Number,
            required:true
        },
        long:{
            type:Number,
            required:true
        }
    },
    isOccupied:{
        type:Boolean,
        default:false
    },
    isActive:{
        type:Boolean,
        default:true
    }
});
module.exports=mongoose.model('request',RequestSchema);
//TODO
// createrequest(user)
// addhelper(user,helper) add helper and helper location, isOccupied to true again
//removehelper(user) =>empty helper and helper location, empty helper, isOccupied to false again
// deactivate()