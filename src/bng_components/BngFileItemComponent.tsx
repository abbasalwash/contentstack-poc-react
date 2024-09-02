import React from "react";
import { formatFileSizeFromBytes } from "../helper/file";

export interface IFileItem {
    icon: string
    title: string
    helpDescription: string
    fileSizeInBytes: string
    url: string
}

const BngFileItemComponent = (props: IFileItem) => {    
    const fileSize = formatFileSizeFromBytes(parseFloat(props.fileSizeInBytes));

    return (
        <div className="bng-file-item-component">
            <img src={props.icon} alt={props.helpDescription} />
            <div>
                <strong>{props.title}</strong>
                <div>{fileSize}</div>
                <a href={props.url} target="_blank" rel="noreferrer" className="button-link download">Download</a>
            </div>
        </div>
    ); 
}

export default BngFileItemComponent;