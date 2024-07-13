import React from 'react'

type Props = {
  children: React.ReactNode;
}

const ModalComponent = ({ children }: Props) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      {children}
    </div>
  )
}

export default ModalComponent;
