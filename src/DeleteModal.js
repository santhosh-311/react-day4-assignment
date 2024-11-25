import { useState } from "react"
import { Modal } from "semantic-ui-react";

const DeleteItem=({deleteItem,id})=>{
    let[open,setOpen] = useState(false);
    return(
        <Modal
        onOpen={()=>setOpen(true)}
        onClose={()=>setOpen(false)}
        open={open}
        trigger={<button className="btn secondary">Delete</button>}
        >
            <p>Are you sure to delete the item?</p>
            <button className="btn primary" onClick={()=>{deleteItem(id); setOpen(false)}}>Confirm</button>
            <button className="btn secondary" onClick={()=>setOpen(false)}>Cancel</button>
        </Modal>
    )
}
export default DeleteItem;