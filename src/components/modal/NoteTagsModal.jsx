import { useState } from "react";


const NoteTagsModal = ({noteModalRef,closeNoteModal,setIsOpenNoteModal,selectedNoteTag,setSelectedNoteTag}) => {
    
    const noteTags = ['我不遲到','友善攜寵','I人話少','E人搞威','不可中離','不說髒話'];
    
    const handleCheckbox = (tag) => {
        setSelectedNoteTag(prev=>{
            if (prev.includes(tag)) {
                return prev.filter(t=>t!==tag)
            }else{
                return [...prev,tag]
            }
        });
    };

    const handleSubmit = () => {
        setIsOpenNoteModal(false);
        closeNoteModal();        
    };


    return(<>
    <div className="modal" tabIndex="-1" ref={noteModalRef}>
        <div className="modal-dialog modal-md">
            <div className="modal-content">
            <div className="modal-header bg-brand-600 text-white">
                <h5 className="modal-title">劇會標籤</h5>
                <button
                type="button"
                className="btn-close btn-close-white"
                onClick={closeNoteModal}
                ></button>
            </div>
            <div className="modal-body">
                {
                    noteTags.map(tag=>
                        <span className="my-1 mx-1" key={tag}>
                            <input
                            type="checkbox"
                            className="btn-check"
                            name="note"
                            id={`noteTag-${tag}`}
                            onChange={()=>handleCheckbox(tag)}
                            checked={selectedNoteTag.includes(tag)}
                            />
                            <label
                            className={`brandBtn-2-sm ${selectedNoteTag.includes(tag)&&'active'}`}
                            htmlFor={`noteTag-${tag}`}
                            style={{cursor:'pointer'}}
                            >{tag}</label>
                        </span>
                    )
                }
            </div>
            <div className="modal-footer">
                <button
                type="button"
                className="brandBtn-1 w-100"
                onClick={handleSubmit}
                >挑好了</button>
            </div>
            </div>
        </div>
    </div>
    </>);
};

export default NoteTagsModal;