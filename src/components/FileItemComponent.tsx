import BngFileItemComponent from "../bng_components/BngFileItemComponent";
import { FileItemType } from "../typescript/generated";

const FileItemComponent = (props: FileItemType) => (
    <BngFileItemComponent
        icon="/assets/icons/pdf-file-icon.svg"
        title={props.title}
        helpDescription={props.file!.file.title}
        fileSizeInBytes={props.file!.file.file_size}
        url={props.file!.file.url} />
);

export default FileItemComponent;