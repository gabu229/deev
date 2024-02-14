"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "@/providers/redux/stores/modalStates";

const ModalLayout = ({
  modalId,
  callToAction: CallToAction,
  modalBody: ModalBody,
  title = "Modal Title",
  size = "3xl",
}) => {
  const dispatch = useDispatch();
  const modals = useSelector((state) => state.modalStates.modals);

  const findModalIndex = (modal, id) => {
    return modal.modalId === id;
  };
  const modalIndex = modals.findIndex((modal) =>
    findModalIndex(modal, modalId)
  );

  const modal = modals[modalIndex];

  function closeThisModal() {
    dispatch(closeModal({ modalId: modalId }));
  }

  return (
    <>
      <Transition appear show={modal.isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          open={modal.isOpen}
          onClose={closeThisModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-300"
                leaveFrom="opacity-100 scale-300"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={`w-full max-w-3xl transform overflow-visible rounded-0 bg-slate-800 text-gray-300 p-6 text-left align-middle shadow-xl transition-all`}
                >
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-semibold leading-6 text-gray-300"
                  >
                    {title}
                  </Dialog.Title>

                  <div className="mt-2 py-10">
                    <ModalBody />
                  </div>

                  <div className="mt-4 text-end">
                    {modal.showCancelButton ? (
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-0 border border-transparent bg-slate-700 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-slate-700/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2"
                        onClick={closeThisModal}
                      >
                        OK
                      </button>
                    ) : (
                      <></>
                    )}
                    {/* <CallToAction /> */}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ModalLayout;
