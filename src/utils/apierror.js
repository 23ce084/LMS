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
        if(stack){
            this.statck = this.stack
        }
        else{
          Error .captureStackTrace(this,this.constructor)  
        }
    }
 }
}

export{apierror}