import {Server as NetServer} from "http"
import { NextApiRequest } from "next"
import {Server as ServerIO} from "socket.io"

import { NextApiResponseServerIo } from "@/types"

export const  config = {
    api :{
        bodyParser : false,
    },
}

const ioHandler =(req : NextApiRequest,res:NextApiResponseServerIo)=>{
    if(!res.socket.server.io){
        const path = "/api/socket/io"
        const httpSever : NetServer=res.socket.server as any
        const io =new ServerIO(httpSever,{
            path:path,
            addTrailingSlash:false,

        })
        res.socket.server.io = io
    }
    res.end()
}

export default ioHandler