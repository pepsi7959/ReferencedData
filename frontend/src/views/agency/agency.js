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

import React, { Component, Fragment } from "react";
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
import DataTable from "./../datatable/datatable"
import Dropzone from '../dropzone/Dropzone'

class Agency extends Component {
    constructor (props){
        super(props);
        this.state = {
            files: "",
            status: "idle",
            uploading: false,
            uploadProgress: {},
            successfullUploaded: false
          };
        this.onUpload = this.onUpload.bind(this);
        this.onFilesAdded = this.onFilesAdded.bind(this);
    }
    
    sendRequest(file) {
        return new Promise((resolve, reject) => {
          const req = new XMLHttpRequest();
    
          req.upload.addEventListener("progress", event => {
            if (event.lengthComputable) {
              const copy = { ...this.state.uploadProgress };
              copy[file.name] = {
                state: "pending",
                percentage: (event.loaded / event.total) * 100
              };
              this.setState({ uploadProgress: copy });
            }
          });
    
          req.upload.addEventListener("load", event => {
            const copy = { ...this.state.uploadProgress };
            copy[file.name] = { state: "done", percentage: 100 };
            this.setState({ uploadProgress: copy });
            resolve(req.response);
          });
    
          req.upload.addEventListener("error", event => {
            const copy = { ...this.state.uploadProgress };
            copy[file.name] = { state: "error", percentage: 0 };
            this.setState({ uploadProgress: copy });
            reject(req.response);
          });
    
          const formData = new FormData();
          formData.append("file", file, file.name);
    
          req.open("POST", "http://localhost:3002/v1/upload/agency");
          req.send(formData);
        });
      }

   onUpload = event =>{
    alert("Uploading file: " + this.state.file.name);
    this.sendRequest(this.state.file, {path: 'agency'});
   }

   onFilesAdded = file =>{
       alert("File:  " + file[0].name + " has been added");
       console.log(file[0].name);
       this.state = {file: file[0]};
   }

   onClickSearch = event => {
        alert("Ok");
   }

   render() {
      return (
        <Fragment>
        <Row className="row-eq-height">
          <Col md="12">
             <Card>
                <CardBody>
                   <CardTitle>ค้นหาหน่วยงาน</CardTitle>
                   {/*<p className="mb-0">ใช้ในการค้นหาเอกสาร</p> */}
                   <div className="px-3">
                      <Form>
                         <div className="form-actions">
                         </div>
                         <Row className="justify-content-md-center">
                            <Col sm="7" md="8">
                               <div className="form-body">
                                  <FormGroup>
                                     <Label for="eventInput1">กระทรวง หรือเทียบเท่า</Label>
                                     <Input type="text" id="eventInput1"   name="ministry" />
                                  </FormGroup>

                                  <FormGroup>
                                     <Label for="eventInput2">กรม หรือเทียบเท่า</Label>
                                     <Input type="text" id="eventInput2"   name="department" />
                                  </FormGroup>

                                  <FormGroup>
                                     <Label for="eventInput3">กอง หรือเทียบเท่า</Label>
                                     <Input type="text" id="eventInput3"   name="devision" />
                                  </FormGroup>
                               </div>
                            </Col> 
                            <Col sm="5" md="4">
                                <Dropzone file={this.state.file} onFilesAdded={this.onFilesAdded}/>
                                <Button color="info" onClick={this.onUpload}> อัพโหลด </Button>
                            </Col>
                         </Row>

                         <div className="form-actions center">
                            <div className="float-none">
                               <Button color="danger" className="mr-1" >
                                  <X size={16} color="#FFF" /> ยกเลิก
                               </Button>
                               <Button color="success" className="mr-1" onClick={this.onClickSearch} >
                                  <CheckSquare size={16} color="#FFF" /> ค้นหา
                               </Button>
                            </div>
                         </div>
                      </Form>	

                   </div>
                </CardBody>
             </Card>
          </Col>
       </Row>
       <Row className="row-eq-height">
          <Col md="12">
             <Card>
                <CardBody>
                   <CardTitle>จัดการหน่วยงาน</CardTitle>
                    <DataTable schema='agency' titleTable="รายการหน่วยงาน"/>
                </CardBody>
             </Card>
          </Col>
       </Row>
    </Fragment>
      );
   }
}

export default Agency;
