import { useState } from "react";
import { CreateOrderForm } from "./create-order-form";
import { Modal } from "./modal";

const CreateOrderModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Create Order
        </button>
      </div>

      <Modal onClose={closeModal} open={isOpen}>
        <button
          onClick={closeModal}
          className="absolute flex justify-center items-end right-1 top-1 w-5 h-5 rounded-full hover:bg-gray-600 hover:text-white"
        >
          ×
        </button>
        <CreateOrderForm closeModal={closeModal} />
      </Modal>
    </>
  );
};

export { CreateOrderModal };
