const PlayerModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>
      <div className="modal-content w-2/3 h-[80vh] bg-white px-4 pt-4 pb-5 rounded shadow-lg z-50 ">
        {children}
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PlayerModal;
