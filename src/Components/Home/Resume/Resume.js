import React from 'react';
import file from "../../../images/resume.pdf";

const Resume = () => {

    return (
        <div>
            <iframe
                style={{ width: "100%", height: "100vh" }}
                src={file}
                type='application/pdf'
                title='title'
            />
        </div>
    );
}

export default Resume;