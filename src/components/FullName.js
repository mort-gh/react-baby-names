import React from 'react';

export const FullName = ({
  babyName,
  setBabyName,
  babySurname,
  setBabySurname,
}) => {
  const handleChangeName = (e) => {
    setBabyName(e.target.value);
    localStorage.setItem('babySurname', e.target.value);
  };

  const handleChangeSurname = (e) => {
    setBabySurname(e.target.value);
    localStorage.setItem('babyPatronymic', e.target.value);
  };

  return (
    <div className='fullname_input-block'>
      <p className='fullname_input-text'>
        Введите фамилию и отчество, чтобы получить полное имя
      </p>

      <input
        className='fullname_input'
        name='name'
        type='text'
        placeholder='Фамилия ребёнка'
        value={babyName}
        onChange={handleChangeName}
        autoComplete='off'
        id='name'
      />

      <input
        className='fullname_input'
        name='surname'
        type='text'
        placeholder='Отчество ребёнка'
        value={babySurname}
        onChange={handleChangeSurname}
        autoComplete='off'
        id='surname'
      />
    </div>
  );
};
