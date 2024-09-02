import React from "react";
import BngFileItemComponent from "../bng_components/BngFileItemComponent";
import { GroupedRelatedFile } from "../typescript/component";

function FileItemComponent (props: GroupedRelatedFile) {
    return (
        <BngFileItemComponent
            icon="/assets/icons/pdf-file-icon.svg"
            title={props.title}
            helpDescription={props.title}
            fileSizeInBytes={props.file_asset!.file_size}
            url={props.file_asset!.url} />
    );
}

export default FileItemComponent;