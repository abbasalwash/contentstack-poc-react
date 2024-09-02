import React from "react";
import { formatFileSizeFromBytes } from "../helper/file";
import { useExtraParameterCtx } from "../context/extra-parameters-provider";

export interface IFileItem {
    icon: string
    title: string
    helpDescription: string
    fileSizeInBytes: string
    url: string
}

const BngFileItemComponent = (props: IFileItem) => {    
    const extraParameter = useExtraParameterCtx();
    const fileSize = formatFileSizeFromBytes(parseFloat(props.fileSizeInBytes));

    return (
        <div {...extraParameter} className="bng-file-item-component">
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