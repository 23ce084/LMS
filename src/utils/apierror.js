class apierror extends Error{
    constructor(
        statuscode,
        message  = "something went wrong",
        errors = [],
        statck =""
        
    ){
        super(message)
        this.status.code = statuscode
        this.data = nullthis.message = message
        this.success = false
        this.errors = errors
{
        if(statck){
            this.statck = statck
        }
        else{
          Error .captureStackTrace(this,this.constructor)  
        }
    }
 }
}

export{apierror}