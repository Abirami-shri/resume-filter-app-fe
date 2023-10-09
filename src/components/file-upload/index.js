import React, { useEffect, useState } from "react";
import { Upload, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import _isEmpty from "lodash/isEmpty";

const FileUpload = ({ storeFile, show = false, file, disabled }) => {
  const [fileList, setFileList] = useState(file);
  useEffect(() => {
    storeFile(fileList);
  }, [fileList]);
  useEffect(() => {
    if (_isEmpty(show)) setFileList([]);
  }, [show]);

  useEffect(() => {
    setFileList(file);
  }, [file]);

  return (
    <Upload
      accept=".zip"
      // accept=".zip, .pdf, .doc"
      fileList={fileList}
      beforeUpload={(file) => {
        setFileList([file]);
      }}
      disabled={disabled}
      onRemove={() => setFileList([])}
      maxCount={1}
      customRequest={(options) => {
        const data = new FormData();
        data.append("file", options.file);
        // return data;
        const { onSuccess, onError, file } = options;
        const canvas = document.createElement("canvas");
        return new Promise((resolve, reject) => {
          canvas.toBlob((blob) => {
            if (!blob) {
              reject(new Error("Canvas is empty"));
              onError("upload failed.");
              return;
            }
            resolve(blob, data);
            // setFileList(blob);
            onSuccess("uploaded.");
          }, "file/xlsx");
        });
      }}
    >
      <Button icon={<FontAwesomeIcon icon={faUpload} />}>
        Click To Upload
      </Button>
    </Upload>
  );
};

export default FileUpload;
