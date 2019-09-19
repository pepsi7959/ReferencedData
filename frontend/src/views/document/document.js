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

class Document extends Component {

   render() {
      return (
         <Fragment>
             <Row className="row-eq-height">
               <Col md="12">
                  <Card>
                     <CardBody>
                        <CardTitle>ค้นหาเอกสาร</CardTitle>
                        {/*<p className="mb-0">ใช้ในการค้นหาเอกสาร</p> */}
                        <div className="px-3">
                           <Form>
                              <div className="form-actions">
                              </div>
                              <Row className="justify-content-md-center">
                                 <Col md="6">
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
                              </Row>

                              <div className="form-actions center">
                                 <div className="float-none">
                                    <Button color="danger" className="mr-1" >
                                        <X size={16} color="#FFF" /> ยกเลิก
                                    </Button>
                                    <Button color="success" className="mr-1" onClick={this.onClickSearch} >
                                        <CheckSquare size={16} color="#FFF" /> ค้นหา
                                    </Button>
                                    <Button color="dark"  className="mr-1" onClick={this.onClickSearch} >
                                        <FileText size={16} color="#FFF" /> อัพโหลด
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
                        <CardTitle>จัดการเอกสาร</CardTitle>
                         <DataTable schema='document' titleTable="รายการเอกสาร"/>
                     </CardBody>
                  </Card>
               </Col>
            </Row>
         </Fragment>
      );
   }
}

export default Document;
