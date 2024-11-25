import { useState } from "react"
import { Modal } from "semantic-ui-react";

const UpdateModal=({updateItem,id})=>{
    let [open, setOpen] =useState(false);
    let [nPrice,setNPrice] = useState();

    return(
        <Modal
        onOpen={()=>setOpen(true)}
        onClose={()=>setOpen(false)}
        open={open}
        trigger={<button className="btn primary">Update</button>}
        >
            <input className="ip" type="text" required placeholder="Enter New Price" onChange={(e)=>setNPrice(e.target.value)}/><br/>
            <button className="btn primary" onClick={()=>{updateItem(id,nPrice); setOpen(false)}}>Confirm</button>
            <button className="btn secondary" onClick={()=>setOpen(false)}>Cancel</button>

        </Modal>
    )
}

export default UpdateModal;