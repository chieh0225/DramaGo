function AttendModal() {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title fs-2">完成資料提交</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div className="modal-body">
            {/* 人數調整 */}
            <div className="mb-3">
              <label className="form-label">是否攜伴?</label>
              <div className="input-group">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  // onClick={() => setPeopleCount(Math.max(1, peopleCount - 1))}
                >
                  -
                </button>
                <input
                  type="text"
                  className="form-control text-center"
                  // value={peopleCount}
                  readOnly
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  // onClick={() => setPeopleCount(peopleCount + 1)}
                >
                  +
                </button>
              </div>
            </div>

            {/* 票數調整 */}
            <div className="mb-3">
              <label className="form-label">需要票數: ($400/張)</label>
              <div className="input-group">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  // onClick={() => setTicketCount(Math.max(1, ticketCount - 1))}
                >
                  -
                </button>
                <input
                  type="text"
                  className="form-control text-center"
                  // value={ticketCount}
                  readOnly
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  // onClick={() => setTicketCount(ticketCount + 1)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              關閉
            </button>
            <button type="button" className="btn btn-primary">
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AttendModal;
