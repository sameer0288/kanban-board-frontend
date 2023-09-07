import Dropdown from "react-bootstrap/Dropdown";
import React, { useState } from "react";
import Model from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import parse from "html-react-parser";
import {
  MODAL_ACTION_CLOSE,
  MODAL_ACTION_CONFIRM,
} from "../../utilities/constant";

const ConfirmModel = (props) => {
  const { title, content, show, onAction } = props;
  return (
    <>
      <Model
        show={show}
        onHide={() => onAction(MODAL_ACTION_CLOSE)}
        backdrop="static"
      >
        <Model.Header closeButton>
          <Model.Title>{title}</Model.Title>
        </Model.Header>
        <Model.Body>{parse(content)}</Model.Body>
        <Model.Footer>
          <Button
            variant="secondary"
            onClick={() => onAction(MODAL_ACTION_CLOSE)}
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => onAction(MODAL_ACTION_CONFIRM)}
          >
            Confirm
          </Button>
        </Model.Footer>
      </Model>
    </>
  );
};
export default ConfirmModel;
