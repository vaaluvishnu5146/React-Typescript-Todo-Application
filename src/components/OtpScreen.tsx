import { Button } from "flowbite-react";
import { useEffect, useRef } from "react";

export default function OtpScreen() {
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const validateBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleInputChange = (index: number) => {
    if (index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    } else {
      validateBtnRef.current?.focus();
    }
  };

  return (
    <div>
      <div>
        {Array.from({ length: 4 }).map((_, index) => (
          <input
            key={index}
            ref={(el) => {
              console.log(el);
              inputRefs.current[index] = el!;
            }}
            type="text"
            placeholder="*"
            maxLength={1}
            onChange={() => handleInputChange(index)}
          />
        ))}
      </div>
      <Button
        ref={validateBtnRef}
        color="red"
        onClick={() => alert("Button clicked")}
      >
        Validate OTP
      </Button>
    </div>
  );
}
