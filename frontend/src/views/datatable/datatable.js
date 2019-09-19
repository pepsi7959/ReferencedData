import React, { Component, Fragment } from "react";
import MaterialTable from 'material-table';
import DocumentSchema from './../../schemas/document';
import AgencySchema from './../../schemas/agency';
import ProcessSchema from './../../schemas/process'

class DataTable extends Component {
    componentWillMount(){
        if ( this.props.schema == 'document' ){
            this.columns = DocumentSchema;
        } else if ( this.props.schema == 'agency' ) {
            this.columns = AgencySchema;
        } else if ( this.props.schema == 'process' ) {
            this.columns = ProcessSchema;
        }
    }

    render() {
        
        return (
        <MaterialTable
            title={this.props.titleTable}
            columns={this.columns}
            data={this.props.src}
            actions={[
            {
                icon: 'save',
                tooltip: 'Save User',
                onClick: (event, rowData) => alert("You saved " + rowData.name)
            },{
                icon: 'edit',
                tooltip: 'Save User',
                onClick: (event, rowData) => alert("You saved " + rowData.name)
            },{
                icon: 'delete',
                tooltip: 'Save User',
                onClick: (event, rowData) => alert("You saved " + rowData.name)
            }
            ]}
            options={{
                actionsColumnIndex: -1,
                exportButton: true
              }}
        />
        )
    }
    }
export default DataTable;