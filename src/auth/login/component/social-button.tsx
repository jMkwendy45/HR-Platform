import React from "react";
import { Button } from "../../../components/ui/button";

type SocialButtonProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: string;
  className?: string;
};

export default function SocialButton({ children, icon, variant, className }: SocialButtonProps) {
  return (
    <Button variant={variant as any} className={className}>
      {icon}
      {children}
    </Button>
  );
}
