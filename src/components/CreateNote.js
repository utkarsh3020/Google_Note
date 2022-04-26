import React,{useState} from 'react'

function CreateNote({onAdd}) {
     const [isExpanded, setExpanded] = useState(false);
     const [note, setNote] = useState({
       title: "",
       content: "",
     })

     function handleChange(e) {
       const {name, value} = e.target;
       setNote((preValue) => {
         return{
           ...preValue,
           [name] : value,
         };
       });
     }

     function handleExpanded(){
       setExpanded(true);
     }


     function submitButton(e) {
       onAdd(note);
       setNote({
         title: "",
         content: "",
       });
       e.preventDefault();
     }

  return (
    <div className='createNote'>
        <form>
            {isExpanded && (
              <input type="text" value={note.title} onChange={handleChange} placeholder='Title' name='title' />
            )}
            <p>
              <textarea name='content' value={note.content} onClick={handleExpanded} onChange={handleChange} rows={isExpanded ? 3 : 1} placeholder='write something here...'></textarea>
            </p>
            <button className='addBtn' onClick={submitButton}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/></svg>
            </button>
        </form>
    </div>
  )
}

export default CreateNote