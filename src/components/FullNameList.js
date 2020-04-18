import React from 'react';

export const FullNameList = ({
  nameList,
  onItemClick,
  babyName,
  babySurname,
}) => {
  return (
    <>
      <FullNameBlock
        nameList={nameList}
        onItemClick={onItemClick}
        babyName={babyName}
        babySurname={babySurname}
      />
    </>
  );
};

function FullNameBlock({ nameList, onItemClick, babyName, babySurname }) {
  return (
    <div className='fullname_block'>
      <div className='fullname_block-flex'>
        <ul className='fullname_list'>
          {nameList.map((entry) => (
            <li className={entry.sex} key={entry.id}>
              <button onClick={() => onItemClick(entry.id)}>
                {babyName} {entry.name} {babySurname}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
