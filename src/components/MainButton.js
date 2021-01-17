import React from 'react';
import { Button } from "antd";

const MainButton = (props) => {

    return (
        <Button
            onClick={() => { props.onClick() }}
            className={`${props.className ? props.className : ""} project-button`}
            type="primary"
            size={`${props.size ? props.size : "default"}`}
            icon={props.icon ? props.icon : " "}
            shape={props.shape ? props.shape : ""}
        >
            {props.btnName || " Button"}
        </Button>
    )
}

export default React.memo(MainButton);
