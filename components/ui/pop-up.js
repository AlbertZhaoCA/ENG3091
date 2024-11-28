import React, { Component } from "react";

const Modal = ({ Component, isOpen, setOpen }) => {
  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center"
          onClick={closeModal}
        >
          <div
            className="relative p-4 rounded-lg max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className="absolute top-0 right-0 cursor-pointer p-2"
              onClick={closeModal}
            >
              <svg
                className="w-6 h-6 text-red-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
            <Component />
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
