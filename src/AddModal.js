import { useState } from "react"
import { Modal } from "semantic-ui-react"

const AddModal=({addItem})=>{

    let[open,setOpen] =useState(false)

    let[title,setTitle]=useState("")
    let[description,setDescription]=useState("")
    let[price,setPrice]=useState("")
    let[rating,setRating]=useState("")
    let[difficulty,setDifficulty]=useState("")
    let[image,setImage]=useState("")
    return(
        <Modal
        onOpen={()=>setOpen(true)}
        onClose={()=>setOpen(false)}
        open={open}
        trigger={<button className='btn primary'>Add Item</button>}
        >
            <div className="ip-container">
                <input class="ip" placeholder="Enter Title" onChange={(e)=> setTitle(e.target.value)}></input>
                <input class="ip" placeholder="Enter Description" onChange={(e)=> setDescription(e.target.value)}></input>
                <input class="ip" placeholder="Enter Price" onChange={(e)=> setPrice(e.target.value)}></input>
                <input class="ip" placeholder="Enter Rating" onChange={(e)=> setRating(e.target.value)}></input>
                <input class="ip" placeholder="Enter Difficulty" onChange={(e)=> setDifficulty(e.target.value)}></input>
                <input class="ip" placeholder="Enter Image" onChange={(e)=> setImage(e.target.value)}></input>
            </div>
            <div className="btn-container">
                <button class="btn" onClick={()=>{
                    addItem(title,description,image,price,rating,difficulty);
                    setOpen(false);
                }}>Confirm</button>
                <button class="btn secondary" onClick={()=>setOpen(false)}>Cancel</button>
            </div>
             
        </Modal>
    )
}

export default AddModal;