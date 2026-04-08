"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Checkbox,
  Label,
  TextInput,
} from "flowbite-react";
import type { TodoV2 } from "../Types/Interfaces";

export function UpdateTodoModal({
  data,
  show,
  onClose,
  handleModalOpen,
  handleUpdate,
}: {
  data: TodoV2;
  show: boolean;
  onClose: () => void;
  handleUpdate: () => void;
  handleModalOpen: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <>
      <Modal show={show} onClose={onClose}>
        <ModalHeader>✏️ Update todo</ModalHeader>
        <ModalBody>
          <div className="flex max-w-md flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="title">Task Title</Label>
              </div>
              <TextInput
                id="title"
                type="title"
                placeholder="Prepare breakfast..."
                required
                onChange={handleModalOpen}
                value={data.title}
              />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="isCompleted"
                onChange={handleModalOpen}
                checked={data.isCompleted}
              />
              <Label htmlFor="isCompleted">Mark Complete</Label>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="green" onClick={handleUpdate}>
            Update
          </Button>
          <Button color="alternative" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
