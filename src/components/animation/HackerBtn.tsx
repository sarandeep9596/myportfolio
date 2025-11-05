"use client";
import { useState, useEffect } from "react";
import { Download } from "lucide-react";
import { Button } from "../ui/button";

type HackerBtnProps = {
  label: string;
  onClick?: () => void; // ✅ added optional click handler
};

const HackerBtn = ({ label, onClick }: HackerBtnProps) => {
  const [displayText, setDisplayText] = useState(label);
  const charset = "abcdefghijklmnopqrstuvwxyz";

  const randomChars = (length: number) =>
    Array.from({ length }, () => charset[Math.floor(Math.random() * charset.length)]).join("");

  const scramble = async (input: string) => {
    let prefix = "";
    for (let i = 0; i < input.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 50));
      prefix += input.charAt(i);
      setDisplayText(prefix + randomChars(input.length - prefix.length));
    }
  };

  const startScrambling = () => {
    scramble(label);
  };

  useEffect(() => {
    setDisplayText(label);
  }, [label]);

  return (
    <Button
      size="lg"
      className="text-base px-5 py-6"
      onMouseEnter={startScrambling}
      onClick={onClick} // ✅ added click functionality
    >
      <Download className="mx-1" />
      {displayText}
    </Button>
  );
};

export default HackerBtn;
