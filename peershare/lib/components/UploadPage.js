import DropZone from './DropZone'
import React from 'react'
import Spinner from './Spinner'
import Tempalink from './Tempalink'
import UploadActions from '../actions/UploadActions'
import UploadStore from '../stores/UploadStore'
import socket from 'filepizza-socket'
import { formatSize } from '../util'
import axios from 'axios'

export default class UploadPage extends React.Component {
 
  constructor() {
    super()
    this.state = UploadStore.getState()
  this._onChange = () => {
      this.setState(UploadStore.getState())
    }

    this.uploadFile = this.uploadFile.bind(this)
  }

  componentDidMount() {
    UploadStore.listen(this._onChange)
  }

  componentWillUnmount() {
    UploadStore.unlisten(this._onChange)
  }

  uploadFile(file) {
    UploadActions.uploadFile(file)
  }

  handleSelectedFile(event) {
    let files = event.target.files
    if (files.length > 0) {
      UploadActions.uploadFile(files[0])
    }
  }
  publishtoBlockchain(datalink1){
	 
	  datalink1="http://localhost:3000/"+this.state.token
	  alert(this.state.token)
	   axios.post('http://localhost:3001/mineBlock', {
    "data": datalink1
   
  }, {'Content-Type': 'application/json'})
   
  }
  

  render() {
    switch (this.state.status) {
      case 'ready':

        return <DropZone onDrop={this.uploadFile}>
          <div className="page">

            <Spinner dir="up" />

            <h1>Book Sharer</h1>
            <p>Peer-to-peer blockchain book sharing platform</p>
            
            <p>
              <label className="select-file-label">
                <input type="file" onChange={this.handleSelectedFile} required  accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"/>
                <span>select book</span>
              </label>
            </p>
          </div>
        </DropZone>

      case 'processing':
        return <div className="page">

          <Spinner dir="up" animated />

          <h1>Book Sharer</h1>
          <p>Processing...</p>

        </div>

      case 'uploading':
        return <div className="page">

          <h1>Book Sharer</h1>
          <Spinner dir="up" animated
            name={this.state.fileName}
            size={this.state.fileSize} />

          <p>Your file has been publish to the blockchain</p>
          <p>This link will work as long as this page is open.</p>
          <p>Peers: {this.state.peers} &middot; Up: {formatSize(this.state.speedUp)}</p>
          <Tempalink token={this.state.token} />
          <button className='button' onClick={this.publishtoBlockchain.bind(this)}> Publish to Blockchain</button>

        </div>
    }
  }

}
