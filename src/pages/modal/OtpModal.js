import React from 'react'

export default function OtpModal() {
  return (
    <div className="modal fade" id="OtpModal" aria-hidden="true" aria-labelledby="OtpModalLabel" tabIndex="-1">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="OtpModalLabel">Modal 1</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          Show a second modal and hide this one with the button below.
        </div>
        <div className="modal-footer">
          <button className="btn btn-primary">Open second modal</button>
        </div>
      </div>
    </div>
  </div>
  )
}
