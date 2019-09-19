import React, { Component, Fragment, useCallback} from "react";
import { Card, CardBody, CardTitle, Row, Col, Button, Alert, Form, CustomInput, FormGroup, Label, Input } from "reactstrap";
import {
   X,
   CheckSquare,
   User,
   Info,
   FileText,
   Mail,
   AlertOctagon
} from "react-feather";

import Dropzone from '../dropzone/Dropzone'

class UploadFile extends Component {
   render() {
      return (
        <Fragment>
        <Row className="row-eq-height">
          <Col md="12">
             <Card>
                <CardBody>
                   <CardTitle>นำเข้าข้อมูล</CardTitle>
                   <div className="px-3">
                   <div className="form-actions">
                    </div>
                    <Form>
                   <Row className="justify-content-md-center">
                    <Col md="auto">
                    <div className="form-body">
                      <Dropzone onFilesAdded={console.log} />
                      </div>
                    </Col>
                   </Row>
                   </Form>
                   </div>
                </CardBody>
             </Card>
          </Col>
       </Row>
    </Fragment>
      );
   }
}

export default UploadFile;
