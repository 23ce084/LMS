import { response } from "express"

class apiresponse{
    constructor(statuscode,data,message = "success"){
        this.statuscode = statuscode
        this.data = data
        this.message = message
        this.success = statuscode < 400
    }
}

// informational response(100-199)
// successful responses(200 - 299)
// redirection messages(300 - 399)
// client error responses(400 - 499)
// server error responses(500 -599)