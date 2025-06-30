"use client";

import * as React from "react";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface DialogDeleteButtonProps {
  /**
   * The text to display on the delete trigger button
   */
  triggerText?: string;
  /**
   * The title of the delete confirmation dialog
   */
  title?: string;
  /**
   * The description/warning message in the delete confirmation dialog
   */
  description?: string;
  /**
   * The text to display on the cancel button
   */
  cancelText?: string;
  /**
   * The text to display on the confirm delete button
   */
  confirmText?: string;
  /**
   * Function to call when delete is confirmed
   */
  onConfirm: () => void | Promise<void>;
  /**
   * Whether the delete operation is currently loading
   */
  isLoading?: boolean;
  /**
   * Whether the trigger button should be disabled
   */
  disabled?: boolean;
  /**
   * Custom trigger element (if you want to use something other than the default button)
   */
  trigger?: React.ReactNode;
  /**
   * Size variant for the trigger button
   */
  size?: "default" | "sm" | "lg" | "icon";
  /**
   * Whether to show only an icon in the trigger button
   */
  iconOnly?: boolean;
  /**
   * Additional CSS classes for the trigger button
   */
  className?: string;
}

export function DialogDeleteButton({
  triggerText = "Delete",
  title = "Are you sure?",
  description = "This action cannot be undone. This will permanently delete the item.",
  cancelText = "Cancel",
  confirmText = "Delete",
  onConfirm,
  isLoading = false,
  disabled = false,
  trigger,
  size = "default",
  iconOnly = false,
  className,
}: DialogDeleteButtonProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleConfirm = async () => {
    try {
      await onConfirm();
      setIsOpen(false);
    } catch (error) {
      // Let the parent component handle error display
      console.error("Delete operation failed:", error);
    }
  };

  const triggerElement = trigger || (
    <Button
      variant="outline"
      size={size}
      disabled={disabled}
      className={className}
    >
      <Trash2 />
      {!iconOnly && triggerText}
    </Button>
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{triggerElement}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Trash2 className="h-5 w-5 text-destructive" />
            {title}
          </DialogTitle>
          <DialogDescription className="text-left">
            {description}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-2">
          <Button
            variant="outline"
            onClick={() => setIsOpen(false)}
            disabled={isLoading}
          >
            {cancelText}
          </Button>
          <Button
            variant="destructive"
            onClick={handleConfirm}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                Deleting...
              </>
            ) : (
              <>
                <Trash2 />
                {confirmText}
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
