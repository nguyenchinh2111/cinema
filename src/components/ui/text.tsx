"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textVariants = cva("", {
  variants: {
    variant: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      destructive: "text-destructive",
      success: "text-green-600",
      warning: "text-yellow-600",
      primary: "text-primary",
      secondary: "text-secondary",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "base",
    weight: "normal",
    align: "left",
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {
  as?: React.ElementType;
  children: React.ReactNode;
}

function Text({
  className,
  variant,
  size,
  weight,
  align,
  as: Component = "span",
  children,
  ...props
}: TextProps) {
  return (
    <Component
      className={cn(textVariants({ variant, size, weight, align }), className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export { Text, textVariants };
