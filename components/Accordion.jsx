import { useEffect, useState } from "react";
import PlayerModal from "./PlayerModal";

const Accordion = ({ title, isOpen, onToggle }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const currentMatch = title.toLowerCase().split(" ").join("-");
  const [server, setServer] = useState("");
  const [matchName, setMatchName] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (matchName && server) {
      setUrl(
        `https://embedstreams.me/cricket-world-cup/${matchName}-${server}`
      );
    }
  }, [server]);

  const handleStream1 = () => {
    setServer("stream-1");
    setMatchName(currentMatch);
    openModal();
  };
  const handleStream2 = () => {
    setServer("stream-2");
    setMatchName(currentMatch);
    openModal();
  };

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };
  return (
    <>
      <div className="border border-gray-200 rounded mb-2 w-full">
        <div
          className="flex justify-between items-center p-4 cursor-pointer"
          onClick={onToggle}
        >
          <h2 className="text-lg font-medium">{title}</h2>
          <span
            className={`transform ${
              isOpen ? "rotate-180" : "rotate-0"
            } transition-transform duration-300 text-gray-600`}
          >
            &#9660;
          </span>
        </div>
        {isOpen && (
          <div className="p-4 bg-gray-100">
            <p className="text-gray-700 space-x-8">
              <button className="btn btn-info" onClick={handleStream1}>
                Server-1
              </button>
              <button className="btn btn-info" onClick={handleStream2}>
                Server-2
              </button>
            </p>
          </div>
        )}
      </div>
      <PlayerModal isOpen={isOpenModal} onClose={closeModal}>
        <iframe
          className="w-full h-full"
          src={url}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </PlayerModal>
    </>
  );
};

export default Accordion;
