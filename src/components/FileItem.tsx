import { FileItem } from '../bng_components/FileItem'

export default function FileItemComponent({ props }: [type van import]) {
    return (
        <FileItem 
            icon="/assets/icons/pdf-file-icon.svg"
            title={blok.file.title || ""}
            helpDescription={blok.file.alt}
            fileSizeInBytes='2400'
            url={blok.file.filename} />
    );
};