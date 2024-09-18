import Modal from 'react-modal';

import './style.scss';
import { useSelector } from 'react-redux';
import { themeSelector } from 'shared';

Modal.setAppElement('#root');

type Props = {
  url: string;
  isOpen: boolean;
  closeModal: () => void;
};

export const TrailerModal = ({ url, isOpen, closeModal }: Props) => {
  const theme = useSelector(themeSelector);

  // Извлечение ID видео из ссылки
  // const getYouTubeId = (url: string) => {
  //   const regex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/.*v=([^&]+)/;
  //   const match = url.match(regex);
  //   return match ? match[1] : null;
  // };

  // const videoId = getYouTubeId();

  return (
    <>
      {/* Кнопка для открытия модального окна */}
      {/* Модальное окно */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Trailer"
        overlayClassName="modal__overlay"
        className="modal__content"
      >
        <button onClick={closeModal} className={theme}></button>

        {url ? (
          <iframe
            width="100%"
            height="450px"
            src={url}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube Video"
          />
        ) : (
          <p>Неверная ссылка на видео</p>
        )}
      </Modal>
    </>
  );
};
