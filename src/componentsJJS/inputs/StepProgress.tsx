import { useState } from "react";
import ButtonEnter from "../buttons/ButtonEnter";

const steps = ["01", "02", "03"];

export default function StepProgress() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="d-flex align-items-center justify-content-center mt-4">
      {steps.map((step, index) => (
        <div key={index} className="d-flex align-items-center">
          {/* 원형 스텝 */}
          <div
            className={`d-flex align-items-center justify-content-center rounded-circle border fw-bold transition 
              ${index + 1 < currentStep ? "bg-primary text-white border-primary" : ""} 
              ${index + 1 === currentStep ? "border-primary text-dark animate-pulse" : "border-secondary text-secondary"}`}
            style={{
              width: "40px",
              height: "40px",
              fontSize: "1.2rem",
            }}
          >
            {index + 1 < currentStep ? "✔" : step}
          </div>

          {/* 진행 바 */}
          {index < steps.length - 1 && (
            <div
              className="progress mx-2"
              style={{ width: "60px", height: "5px" }}
            >
              <div
                className={`progress-bar transition ${
                  index + 1 < currentStep ? "bg-primary" : "bg-secondary"
                }`}
                style={{
                  width: index + 1 === currentStep ? "50%" : "100%",
                  transition: "width 0.5s ease-in-out",
                }}
              ></div>
            </div>
          )}
        </div>
      ))}

      <ButtonEnter text="Enter" styleID="btn-enter" onClick={() => setCurrentStep((prev) => (prev < steps.length ? prev + 1 : prev))}/>
      {/* 버튼 */}
      {/* <button onClick={() => setCurrentStep((prev) => (prev < steps.length ? prev + 1 : prev))} className="btn btn-primary ms-3">Next</button> */}
    </div>
  );
}