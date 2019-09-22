// MIT License

// Copyright 2019-present, Narongsak Mala <narongsak.mala@gmail.com>

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

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

  constructor(props) {
    super(props);
    this.state = {
      files: [],
      uploading: false,
      uploadProgress: {},
      successfullUploaded: false
    };
    this.onFilesAdded = this.onFilesAdded.bind(this);
    this.uploadFiles = this.uploadFiles.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
  }

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
