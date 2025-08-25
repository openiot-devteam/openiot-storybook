import React from "react";
import Button from "@/components/Button/Button";

interface SmartThingsOAuthProps {
  onCancel: () => void;
  onConfirm: () => void;
}

function SmartThingsOAuth({ onCancel, onConfirm }: SmartThingsOAuthProps) {
  return (
    <dialog className="modal modal-shadow rounded-lg">
      <h2 className="flex items-center p-6 text-grey-900 text-lg font-bold leading-7">
        스마트 싱스 연동
      </h2>
      <p className="px-6 text-grey-900 text-sm leading-5">
        기기 연결을 위해 스마트싱스 연동이 필요합니다. <br />
        아래 버튼을 눌러 연동을 완료하세요.
      </p>
      <div className="flex justify-end gap-3 px-6 py-4">
        <Button variant="text" onClick={onCancel}>
          <span className="text-sm text-grey-600 font-bold leading-5">
            취소
          </span>
        </Button>
        <Button onClick={onConfirm}>
          <span className="text-sm font-bold leading-5">연동</span>
        </Button>
      </div>
    </dialog>
  );
}

export default SmartThingsOAuth;
