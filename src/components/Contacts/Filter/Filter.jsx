import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import s from './filter.module.css';
import { changeFilter } from 'redux/filter/filter-actions';
import { getFilter } from 'redux/filter/filter-selectors';

const Filter = () => {
  const loginInputId = nanoid();

  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filterContact = ({ target }) => {
    const action = changeFilter(target.value);

    dispatch(action);
  };

  return (
    <div className={s.container}>
      <label htmlFor={loginInputId} className={s.label}>
        Find contacts by name
      </label>
      <input
        onChange={filterContact}
        value={filter}
        type="text"
        name="filter"
        className={s.input}
      />
    </div>
  );
};

export default Filter;
