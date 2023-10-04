import * as React from 'react';

interface Props {
  label: string;
  onClick: () => void;
}

export default function AddButon({ label, onClick }: Props) {
  return (
    <a  className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"  onClick={onClick}>
      {label}
    </a>
  );
}

