"use client";

import { useState } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { NewProjectModal } from "../Modals";

export default function MenuItem({ title = "Menu Title", items = [], largeScreenOnly = false }) {
  return (
    <>
      <div className="">
        <Menu as="div" className="relative">
          {({ open }) => (
            <>
              <Menu.Button
                className={`
                ${largeScreenOnly ? "hidden sm:inline-block" : ""}
                ${open ? "text-white bg-slate-800" : "text-white/90"}
                btn-menu`}
              >
                <span>{title}</span>
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Menu.Items
                  as="div"
                  static
                  className="absolute w-[300px] left-0 z-10 max-w-sm px-4 sm:px-0"
                >
                  <div className="flex flex-col gap-2 overflow-hidden rounded-lg shadow-lg bg-black py-4">
                    {items.map((item, index) => (
                      <Menu.Item key={index} as="div">
                        {item}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </div>
    </>
  );
}
